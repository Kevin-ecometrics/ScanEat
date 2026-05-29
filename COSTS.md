# ScanEat — Costos Mensuales Estimados

## Proyecto: Auto-Provisioning de Demos

---

## Supabase Pro

| Concepto | Costo |
|----------|-------|
| Plan Pro (base org) | **$25 USD/mes** |
| Incluye: 1 proyecto Micro (8GB DB, 100K MAU, 250GB egress) | ✅ Incluido |
| Proyectos demo adicionales (Micro compute) | **$10 USD/mes c/u** |

> Management API disponible solo en plan Pro — requisito indispensable para crear proyectos programáticamente.

---

## Vercel Pro

| Concepto | Costo |
|----------|-------|
| Plan Pro (1 asiento dev + $20 crédito de uso) | **$20 USD/mes** |
| Proyectos ilimitados | ✅ Incluido |
| Deployment API (`POST /v13/deployments`) | ✅ Incluido |
| 6,000 deploys/día, 12 builds concurrentes | ✅ Incluido |

> Sin Vercel Pro no hay acceso a la Deployment API — requisito indispensable.

---

## Email / SMTP

| Servicio | Costo |
|----------|-------|
| Nodemailer + SMTP existente | **$0** (ya implementado) |

---

## Anti-Spam

| Medida | Costo |
|--------|-------|
| reCAPTCHA v3 | **$0** (gratis) |
| Rate limiting (server-side) | **$0** |
| BD SQLite local | **$0** |

---

## Dominios

| Dominio | Costo |
|---------|-------|
| scaneat.ai | ✅ Ya cubierto |
| scaneat.mx | ✅ Ya cubierto |

---

## Totales

| Escenario | Costo/mes |
|-----------|-----------|
| Base (sin demos activos) | **$45/mes** |
| Con 1 demo activa | **$55/mes** |
| Con 3 demos activas | **$75/mes** |
| Con 5 demos activas | **$95/mes** |

> Cada demo activa cuesta **~$10/mes** (solo compute de Supabase). Se factura por hora, así que si destruyes una demo a los 3 días, pagas ~$1.

---

## Resumen

| Servicio | Plan | Por qué es necesario |
|----------|------|---------------------|
| Supabase Pro | $25/mes | Management API para crear proyectos |
| Vercel Pro | $20/mes | Deployment API para desplegar FoodHub |
| Proyectos extra | $10/mes c/u | Cada demo necesita su propia DB |
