# FoodHub — Análisis Completo

FoodHub es el **sistema de gestión de restaurantes** que se vende bajo la marca ScanEat. Una aplicación web full-stack con 3 roles distintos: admin, mesero y cliente/comensal.

---

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 16, React 19, TypeScript 5 |
| Base de datos | Supabase (PostgreSQL) con SSR |
| Estilos | Tailwind CSS 4 (colores OkLCh) |
| QR Codes | librería `qrcode` |
| HTTP | Axios |
| Package manager | Bun |

---

## Estructura de rutas

```
/admin              → Panel del administrador del restaurante
/waiter             → Panel del mesero/hostess
/customer           → Vista del comensal (escanea QR)
/customer/menu      → Carta del menú
/customer/payment   → Pago y solicitud de cuenta
/customer/history   → Historial de pedidos
/customer/qr        → Entrada por QR
```

---

## Base de datos (Supabase)

| Tabla | Descripción |
|-------|-------------|
| `tables` | Mesas del restaurante (número, estado, capacidad, ubicación) |
| `products` | Productos del menú (nombre, precio, categoría, disponibilidad) |
| `orders` | Órdenes por mesa/cliente (estado: active, completed, paid, cancelled) |
| `order_items` | Ítems de cada orden (estado: ordered → preparing → ready → served) |
| `waiter_notifications` | Notificaciones al mesero (new_order, refill, assistance, bill_request) |
| `sales_history` | Historial de ventas cerradas para reportes |
| `sales_items` | Detalle de ítems por venta |

### Esquema detallado

#### `tables`
```typescript
{
  id: number
  number: number
  status: 'available' | 'occupied' | 'reserved' | 'cleaning'
  capacity: number
  location: string | null
  created_at: timestamp
  updated_at: timestamp
}
```

#### `products`
```typescript
{
  id: number
  name: string
  description: string | null
  price: number
  category: string
  image_url: string | null
  is_available: boolean
  preparation_time: number | null
  created_at: timestamp
  updated_at: timestamp
}
```

#### `orders`
```typescript
{
  id: string (UUID)
  table_id: number
  customer_name: string | null
  status: 'active' | 'completed' | 'cancelled' | 'paid'
  total_amount: number
  created_at: timestamp
  updated_at: timestamp
}
```

#### `order_items`
```typescript
{
  id: string (UUID)
  order_id: string
  product_id: number
  product_name: string
  price: number
  quantity: number
  notes: string | null
  status: 'ordered' | 'preparing' | 'ready' | 'served'
  cancelled_quantity?: number
  created_at: timestamp
  updated_at: timestamp
}
```

#### `waiter_notifications`
```typescript
{
  id: string (UUID)
  table_id: number
  order_id: string | null
  type: 'new_order' | 'refill' | 'assistance' | 'bill_request'
  message: string
  payment_method?: string
  status: 'pending' | 'acknowledged' | 'completed'
  created_at: timestamp
}
```

---

## Los 3 roles en detalle

### Admin (`/admin`)

- Login con contraseña
- Dashboard con estadísticas del día (órdenes, ingresos, mesas activas, ticket promedio)
- CRUD de mesas y productos
- Historial de ventas con filtros por fecha y rango
- Ranking de productos más vendidos
- Subida de logo del restaurante a Supabase Storage

**Componentes:**
- `LoginForm.tsx` — Autenticación
- `Dashboard.tsx` — Estadísticas, listado de órdenes, productos populares, historial
- `TablesManagement.tsx` — CRUD de mesas
- `ProductsManagement.tsx` — CRUD de productos
- `TableForm.tsx` / `ProductForm.tsx` — Formularios de creación/edición
- `StarRating.tsx` — Componente de calificaciones

---

### Mesero (`/waiter`)

- **Tab Notificaciones**: alertas en tiempo real (nuevos pedidos, recarga, asistencia, solicitud de cuenta)
- **Tab Mesas**: todas las mesas con sus órdenes agrupadas por cliente
  - Actualiza el estado de cada ítem (preparando → listo → servido)
  - Cancela ítems con contraseña de confirmación
- **Cobro de mesa**:
  - Pago global (toda la mesa junta)
  - Pago por separado (cada comensal paga lo suyo)
  - Acepta efectivo MXN, terminal y dólares USD con tipo de cambio ajustable (default 18.5)
  - Calcula cambio automáticamente
- **Tab Productos**: gestión de productos desde la misma vista

**Componentes:**
- `Header.tsx`, `Tabs.tsx`, `LoadingScreen.tsx`
- `NotificationsTab.tsx`, `NotificationCard.tsx`, `NotificationIcon.tsx`
- `TablesTab.tsx`, `TableCard.tsx`, `TableHeader.tsx`, `TableSummary.tsx`
- `OrderItem.tsx`, `CustomerOrderSection.tsx`
- `ProductsManagement.tsx`

---

### Cliente/Comensal (`/customer`)

- Escanea QR en la mesa → sesión guardada en localStorage (expira en 4 horas)
- Navega el menú por categorías
- Agrega ítems al carrito con notas especiales (ej: "sin cebolla")
- Ve el estado de sus platillos en tiempo real
- Solicita la cuenta → mesero recibe notificación
- Puede ver historial de su mesa

**Componentes:**
- `CustomerPage.tsx` — Punto de entrada, decide si mostrar QR o menú según sesión
- `Menu.tsx` — Navegación del menú y gestión del carrito
- `Payment.tsx` — Solicitud de cuenta y estado del pago
- `History.tsx` — Historial de pedidos de la sesión
- `QRShare.tsx` — Generación y visualización del QR

---

## Flujos clave

### Flujo QR

```
Cliente escanea QR → /customer/qr?table=1&user=abc&order=xyz
→ SessionContext guarda sesión en localStorage
→ Cliente navega al menú y ordena
→ Cliente solicita cuenta → notificación al mesero
→ Mesero cobra → mesa liberada → sesión limpiada
```

### Flujo de un pedido

```
Cliente agrega ítems → estado: ordered
→ Mesero ve notificación "new_order"
→ Marca ítems como "preparing"
→ Cocina termina → "ready"
→ Mesero sirve → "served"
```

### Flujo de pago

```
Cliente solicita cuenta → waiter_notification tipo bill_request
→ Mesero abre calculadora de pago
→ Ingresa montos (efectivo + terminal + USD)
→ Sistema calcula cambio automáticamente
→ Confirma → registra en sales_history + libera mesa
→ Clientes ven "mesa liberada" y son redirigidos
```

---

## Sistema de estado (Contexts)

| Contexto | Propósito |
|----------|-----------|
| `SessionContext` | Sesión del comensal (tableId, userId, orderId, customerName) con TTL 4h |
| `OrderContext` | Carrito, ítems, suscripciones en tiempo real a Supabase |
| `ToastContext` | Notificaciones toast visuales (success, error, warning, info) |
| `ConfirmContext` | Modales de confirmación que retornan Promise\<boolean\> |

---

## Sistema de notificaciones

| Tipo | Disparado por | Descripción |
|------|--------------|-------------|
| `new_order` | Cliente | Nuevo pedido colocado |
| `refill` | Cliente | Solicita recarga (bebida, café) |
| `assistance` | Cliente | Necesita ayuda |
| `bill_request` | Cliente | Solicita la cuenta |
| `table_freed` | Mesero | Mesa pagada y liberada |

**Estados:** `pending` → `acknowledged` → `completed`

**Actualización en tiempo real:** suscripciones Supabase + polling de respaldo cada 2-3 segundos.

---

## Lógica de pagos

### Métodos aceptados
1. **Efectivo (MXN)**
2. **Terminal/Tarjeta (MXN)**
3. **USD** con tipo de cambio ajustable (default 18.5, guardado en localStorage)
4. **Mixto** — combinación de los anteriores

### Cálculo
```typescript
usdToMxn = usdAmount * usdRate
totalPaid = cashAmount + terminalAmount + usdToMxn
change = totalPaid > totalAmount ? totalPaid - totalAmount : 0
```

---

## Características notables

- **Múltiples comensales por mesa**: cada quien tiene su propia orden pero comparten mesa
- **Tiempo real**: suscripciones Supabase + polling de respaldo
- **Pagos mixtos**: efectivo + tarjeta + USD en la misma cuenta
- **Tipo de cambio USD ajustable** y persistido en localStorage
- **Integración MCP** con Supabase (proyecto ref: `adwoboytmmtymheoynao`)
- **TypeScript estricto** en todo el proyecto
- **Soporte multi-device**: cualquier dispositivo, sin instalación de app

---

## Relación con ScanEat

ScanEat (`scaneat.mx`) es la **landing page de marketing** de FoodHub. Cada feature mencionada en ScanEat corresponde a una funcionalidad real implementada en FoodHub:

| ScanEat menciona | FoodHub implementa |
|------|-----------|
| Menú digital por QR sin app | `/customer/qr` + SessionContext |
| Pedidos en tiempo real | Supabase subscriptions en OrderContext |
| Pagos sin fricciones | PaymentCalculator con efectivo/tarjeta/USD |
| Panel para meseros | `/waiter` con tabs de notificaciones y mesas |
| Panel admin | `/admin` con dashboard y CRUD |
| Calificaciones | StarRating + waiter_notifications |
| Reportes en vivo | Dashboard con sales_history y filtros por fecha |
