# ScanEat — PROGRESS.md

## Fase 1: Landing + Express (demo request flow)

### Objetivo
Que el usuario solicite una demo desde la landing, se guarde en MySQL y te llegue un email. Sin Supabase Management API ni Vercel Deployment API todavía.

### ✅ Completado

- [x] `PROGRESS.md` — Archivo de tracking
- [x] `COSTS.md` — Estimado de costos mensuales
- [x] `server/package.json` — Agregada dependencia `mysql2`
- [x] `server/index.js` — Agregados:
  - Conexión MySQL con creación automática de tabla `demo_requests`
  - `POST /api/demo/request` — Recibe solicitud, guarda en MySQL, envía email al admin
  - `GET /api/demo/status/:token` — Consulta estado de solicitud
- [x] `app/lib/i18n.ts` — Textos actualizados para demo (ES/EN):
  - `hero.cta1`: "Probar demo gratis" / "Try demo free"
  - `hero.cta2`: "Ver video" / "Watch video"
  - `nav.demo`: "Probar demo" / "Try demo"
  - `packages.cta`: "Probar demo" / "Try demo"
  - `contact`: textos + campos nuevos (`demoBadge`, `demoNote`)
  - `ctas`: array actualizado con copy demo
- [x] `app/components/ContactForm.tsx` — Modo demo:
  - Submit cambió de `/api/contact` a `/api/demo/request`
  - Badge visual "🔒 No credit card required"
  - Success message con estilo verde "Recibimos tu solicitud de demo"
  - Trust items dinámicos por idioma
- [x] `app/components/Hero.tsx` — Sin cambios de código (textos vía i18n)
- [x] `app/components/CTAStrip.tsx` — Sin cambios de código (textos vía i18n)

### Pendiente (Fase 2)

- [ ] Activar Supabase Pro + Management API (crear proyectos automáticamente)
- [ ] Activar Vercel Pro + Deployment API (desplegar FoodHub automáticamente)
- [ ] Pipeline de provisioning completo (crear proyecto → migrar DB → seed data → deploy Vercel → email)
- [ ] Endpoints de aprobación/rechazo con tokens únicos
- [ ] Dashboard web de administración de solicitudes
