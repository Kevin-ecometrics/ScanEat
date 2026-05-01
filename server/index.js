/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "*" }));
app.use(express.json({ limit: "10kb" }));

const safeText = (val) => (typeof val === "string" ? val.trim() : "");

const escapeHTML = (str) => {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

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

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running");
});