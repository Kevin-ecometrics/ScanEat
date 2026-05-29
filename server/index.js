/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const crypto = require("crypto");
const mysql = require("mysql2/promise");
const rateLimit = require("express-rate-limit");

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_ORIGIN,
  "http://localhost:3000",
  "https://e-commetrics.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir requests sin origin (Postman, mobile apps, etc)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json({ limit: "10kb" }));

const safeText = (val) => (typeof val === "string" ? val.trim() : "");

const escapeHTML = (str) => {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

// 🛡️ Admin Auth Middleware
const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const expectedKey = process.env.ADMIN_API_KEY;

  if (!expectedKey) {
    return res.status(500).json({ error: "ADMIN_API_KEY no configurada en el servidor" });
  }

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Se requiere autenticación" });
  }

  const token = authHeader.slice(7);
  if (token !== expectedKey) {
    return res.status(403).json({ error: "API key inválida" });
  }

  next();
};

// ⏱️ Rate Limiter para solicitudes de demo
const demoRequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Demasiadas solicitudes. Intenta de nuevo en 15 minutos." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── MySQL Connection ──
let db = null;

async function initDB() {
  db = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "scaneat",
  });

  await db.execute(`
    CREATE TABLE IF NOT EXISTS demo_requests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      restaurant VARCHAR(255) NOT NULL,
      message TEXT,
      locale VARCHAR(5) DEFAULT 'es',
      token VARCHAR(64) UNIQUE NOT NULL,
      status ENUM('pending','approved','rejected','completed','failed') DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  console.log("✓ MySQL conectado y tabla demo_requests lista");
}

// ── Nodemailer ──
const transporter = nodemailer.createTransport({
  host: process.env.HOST_SMTP,
  port: Number(process.env.PORT_SMTP),
  secure: Number(process.env.PORT_SMTP) === 465,
  auth: {
    user: process.env.EMAIL_SMTP,
    pass: process.env.PASSWORD_SMTP,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
  tls: {
    rejectUnauthorized: false,
  },
});

// 🎨 TOKENS (los mismos bonitos)
const tokens = {
  accent: "#dd5139",
  accentDark: "#b3260e",
  accentLight: "#ffe6dd",
  navy: "#0f1b2d",
  muted: "#6b727e",
  surface: "#fcfaf6",
  border: "#d4d8de",
  white: "#ffffff",
};

// 🌍 COPY MULTI-IDIOMA
const copy = {
  es: {
    subject: (name, restaurant) =>
      `[ScanEat] Nueva solicitud de ${name} — ${restaurant}`,
    title: "Nueva solicitud de demo",
    subtitle: "Alguien quiere conocer ScanEat",
    labels: {
      name: "Nombre",
      email: "Correo electrónico",
      restaurant: "Restaurante",
      message: "Mensaje",
    },
    replyBtn: "Responder al cliente",
    footer: "Mensaje enviado desde scaneat.mx",
  },
  en: {
    subject: (name, restaurant) =>
      `[ScanEat] New request from ${name} — ${restaurant}`,
    title: "New demo request",
    subtitle: "Someone wants to learn about ScanEat",
    labels: {
      name: "Name",
      email: "Email address",
      restaurant: "Restaurant",
      message: "Message",
    },
    replyBtn: "Reply to client",
    footer: "Message sent from scaneat.mx",
  },
};

// 📦 FIELD BONITO
function field(label, value) {
  return `
  <tr>
    <td style="padding:0 0 16px;">
      <table width="100%">
        <tr>
          <td style="background:${tokens.surface};border:1px solid ${tokens.border};border-radius:12px;padding:16px;">
            <p style="margin:0 0 5px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${tokens.muted};">${label}</p>
            <p style="margin:0;font-size:15px;font-weight:600;color:${tokens.navy};line-height:1.5;">${value}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

// 📧 EMAIL BONITO COMPLETO
function buildEmail({ name, email, restaurant, message, locale }) {
  const lang = copy[locale] || copy.es;

  const safeName = escapeHTML(name);
  const safeEmail = escapeHTML(email);
  const safeRestaurant = escapeHTML(restaurant);
  const safeMessage = escapeHTML(message).replace(/\n/g, "<br>");

  return `
<!DOCTYPE html>
<html lang="${locale}">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${lang.title}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
</head>
<body style="margin:0;padding:0;background:${tokens.surface};font-family:'Plus Jakarta Sans',ui-sans-serif,system-ui,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${tokens.surface};padding:40px 16px;">
<tr><td align="center">

<!-- ── Wrapper ── -->
<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:${tokens.white};border-radius:20px;border:1px solid ${tokens.border};overflow:hidden;box-shadow:0 4px 24px rgba(15,27,45,0.07);">

  <!-- ── NAVBAR ── -->
  <tr>
    <td style="background:${tokens.white};border-bottom:1px solid ${tokens.border};padding:18px 28px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="vertical-align:middle;">
            <table cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="vertical-align:middle;padding-right:10px;">
                  <img src="https://scaneat.mx/logo.png" alt="ScanEat" width="40" height="40" style="display:block;border-radius:8px;"/>
                </td>
                <td style="vertical-align:middle;">
                  <span style="font-size:18px;font-weight:800;color:${tokens.navy};letter-spacing:-0.5px;">ScanEat</span>
                </td>
              </tr>
            </table>
          </td>
          <td align="right" style="vertical-align:middle;">
            <span style="background:${tokens.accentLight};color:${tokens.accent};font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;padding:5px 12px;border-radius:999px;border:1px solid rgba(221,81,57,0.2);">
              ● ${lang.title}
            </span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── HERO HEADER ── -->
  <tr>
    <td style="background:linear-gradient(135deg,${tokens.navy} 0%,#1a2f4a 100%);padding:36px 28px 32px;text-align:center;">
      <p style="margin:0 0 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:rgba(255,255,255,0.5);">${lang.subtitle}</p>
      <h1 style="margin:0;font-size:28px;font-weight:800;color:${tokens.white};letter-spacing:-0.8px;line-height:1.2;">${lang.title}</h1>
      <div style="margin-top:16px;display:inline-block;background:rgba(221,81,57,0.15);border:1px solid rgba(221,81,57,0.3);border-radius:999px;padding:6px 16px;">
        <span style="font-size:12px;font-weight:600;color:${tokens.accent};">scaneat.mx</span>
      </div>
    </td>
  </tr>

  <!-- ── ACCENT LINE ── -->
  <tr>
    <td style="height:3px;background:linear-gradient(90deg,transparent,${tokens.accent},transparent);"></td>
  </tr>

  <!-- ── CONTENT ── -->
  <tr>
    <td style="padding:28px 28px 8px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">

        ${field(lang.labels.name, safeName)}
        ${field(
          lang.labels.email,
          `<a href="mailto:${safeEmail}" style="color:${tokens.accent};text-decoration:none;font-weight:600;">${safeEmail}</a>`
        )}
        ${field(lang.labels.restaurant, safeRestaurant)}

        <!-- Message field -->
        <tr>
          <td style="padding:0 0 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="background:${tokens.surface};border:1px solid ${tokens.border};border-radius:14px;padding:18px;">
                  <p style="margin:0 0 8px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${tokens.muted};">${lang.labels.message}</p>
                  <p style="margin:0;font-size:15px;font-weight:500;color:${tokens.navy};line-height:1.7;">${safeMessage}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td>
  </tr>

  <!-- ── CTA ── -->
  <tr>
    <td align="center" style="padding:8px 28px 32px;">
      <a href="mailto:${safeEmail}?subject=Re: ScanEat — ${escapeHTML(restaurant)}" style="display:inline-block;background:${tokens.accent};color:${tokens.white};font-size:15px;font-weight:700;text-decoration:none;padding:15px 36px;border-radius:14px;letter-spacing:-0.2px;">
        ${lang.replyBtn} →
      </a>
    </td>
  </tr>

  <!-- ── FOOTER ── -->
  <tr>
    <td style="background:${tokens.surface};border-top:1px solid ${tokens.border};padding:20px 28px;text-align:center;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center">
            <p style="margin:0 0 6px;font-size:12px;color:${tokens.muted};">${lang.footer}</p>
            <p style="margin:0;font-size:11px;color:${tokens.border};">© 2025 ScanEat · scaneat.mx</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
<!-- ── End Wrapper ── -->

</td></tr>
</table>

</body>
</html>`;
}
// 🧪 TEST
app.get("/api/test", (req, res) => {
  res.json({ ok: true });
});

// 📬 CONTACT
app.post("/api/contact", async (req, res) => {
  try {
    const name = safeText(req.body.name);
    const email = safeText(req.body.email);
    const restaurant = safeText(req.body.restaurant);
    const message = safeText(req.body.message);
    const rawLocale = safeText(req.body.locale);
    const locale = rawLocale.startsWith("en") ? "en" : "es";

    if (!name || !email || !restaurant || !message) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const lang = copy[locale] || copy.es;

    const html = buildEmail({
      name,
      email,
      restaurant,
      message,
      locale,
    });

    await transporter.sendMail({
      from: `"ScanEat" <${process.env.EMAIL_SMTP}>`,
      to: process.env.EMAIL_SMTP,
      replyTo: email,
      subject: lang.subject(name, restaurant),
      html,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Error al enviar correo" });
  }
});

// 📬 DEMO REQUEST
app.post("/api/demo/request", demoRequestLimiter, async (req, res) => {
  try {
    const name = safeText(req.body.name);
    const email = safeText(req.body.email);
    const restaurant = safeText(req.body.restaurant);
    const message = safeText(req.body.message);
    const rawLocale = safeText(req.body.locale);
    const locale = rawLocale.startsWith("en") ? "en" : "es";

    if (!name || !email || !restaurant) {
      return res.status(400).json({ error: "Nombre, email y restaurante son requeridos" });
    }

    const [existing] = await db.execute(
      "SELECT id FROM demo_requests WHERE email = ? AND restaurant = ? LIMIT 1",
      [email, restaurant]
    );

    if (existing.length > 0) {
      return res.status(409).json({ error: "Ya existe una solicitud para este restaurante con ese correo" });
    }

    const token = crypto.randomBytes(32).toString("hex");

    await db.execute(
      "INSERT INTO demo_requests (name, email, restaurant, message, locale, token) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, restaurant, message, locale, token]
    );

    const lang = copy[locale] || copy.es;

    const html = buildEmail({
      name,
      email,
      restaurant,
      message: message || "Solicitud de demo",
      locale,
    });

    await transporter.sendMail({
      from: `"ScanEat" <${process.env.EMAIL_SMTP}>`,
      to: process.env.EMAIL_SMTP,
      replyTo: email,
      subject: lang.subject(name, restaurant),
      html,
    });

    res.json({ ok: true, token });
  } catch (err) {
    console.error("ERROR DEMO REQUEST:", err);
    res.status(500).json({ error: "Error al procesar la solicitud de demo" });
  }
});

// 🔍 DEMO STATUS
app.get("/api/demo/status/:token", async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT name, email, restaurant, status, created_at FROM demo_requests WHERE token = ?",
      [req.params.token]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Solicitud no encontrada" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("ERROR DEMO STATUS:", err);
    res.status(500).json({ error: "Error al consultar estado" });
  }
});

// 📋 DEMO REQUESTS LIST (admin)
app.get("/api/demo/requests", requireAdminAuth, async (req, res) => {
  try {
    let sql = "SELECT id, name, email, restaurant, message, locale, token, status, created_at FROM demo_requests";
    const params = [];

    if (req.query.status) {
      sql += " WHERE status = ?";
      params.push(req.query.status);
    }

    sql += " ORDER BY created_at DESC";

    if (req.query.limit) {
      sql += " LIMIT ?";
      params.push(Number(req.query.limit));
    }

    const [rows] = await db.execute(sql, params);
    res.json(rows);
  } catch (err) {
    console.error("ERROR DEMO REQUESTS:", err);
    res.status(500).json({ error: "Error al obtener solicitudes" });
  }
});

// ✅ PATCH DEMO STATUS (admin)
app.patch("/api/demo/requests/:id/status", requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "approved", "rejected", "completed", "failed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: `Estado inválido. Valores: ${validStatuses.join(", ")}` });
    }

    const [result] = await db.execute(
      "UPDATE demo_requests SET status = ? WHERE id = ?",
      [status, id]
    ); 

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Solicitud no encontrada" });
    }

    res.json({ ok: true, status });
  } catch (err) {
    console.error("ERROR PATCH DEMO STATUS:", err);
    res.status(500).json({ error: "Error al actualizar estado" });
  }
});

// ── Init DB then start server ──
initDB().then(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("Server running", process.env.PORT || 4000);
  });
}).catch((err) => {
  console.error("Error conectando a MySQL:", err);
  process.exit(1);
});