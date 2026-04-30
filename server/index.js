/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config({ path: "../.env" });

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "*" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.HOST_SMTP,
  port: Number(process.env.PORT_SMTP),
  secure: true,
  auth: {
    user: process.env.EMAIL_SMTP,
    pass: process.env.PASSWORD_SMTP,
  },
});

// Design tokens (converted from frontend oklch values)
const tokens = {
  accent:      "#dd5139",
  accentDark:  "#b3260e",
  accentLight: "#ffe6dd",
  navy:        "#0f1b2d",
  muted:       "#6b727e",
  surface:     "#fcfaf6",
  border:      "#d4d8de",
  white:       "#ffffff",
};

const copy = {
  es: {
    subject: (name, restaurant) => `[ScanEat] Nueva solicitud de ${name} — ${restaurant}`,
    title: "Nueva solicitud de demo",
    subtitle: "Alguien quiere conocer ScanEat",
    labels: { name: "Nombre", email: "Correo electrónico", restaurant: "Restaurante", message: "Mensaje" },
    replyBtn: "Responder al cliente",
    footer: "Mensaje enviado desde el formulario de contacto en scaneat.mx",
  },
  en: {
    subject: (name, restaurant) => `[ScanEat] New request from ${name} — ${restaurant}`,
    title: "New demo request",
    subtitle: "Someone wants to learn about ScanEat",
    labels: { name: "Name", email: "Email address", restaurant: "Restaurant", message: "Message" },
    replyBtn: "Reply to client",
    footer: "Message sent from the contact form at scaneat.mx",
  },
};

function field(label, value) {
  return `
  <tr>
    <td style="padding:0 0 16px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="background:${tokens.surface};border:1.5px solid ${tokens.border};border-radius:12px;padding:16px 20px;">
            <p style="margin:0 0 5px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${tokens.muted};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${label}</p>
            <p style="margin:0;font-size:15px;font-weight:600;color:${tokens.navy};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.5;">${value}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function buildEmail({ name, email, restaurant, message, locale }) {
  const lang = copy[locale] || copy.es;

  return `<!DOCTYPE html>
<html lang="${locale}" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${lang.title}</title>
</head>
<body style="margin:0;padding:0;background:${tokens.surface};-webkit-font-smoothing:antialiased;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${tokens.surface};padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">

        <!-- ── Header ── -->
        <tr>
          <td style="background:${tokens.navy};border-radius:16px 16px 0 0;padding:36px 40px 32px;text-align:center;">
            <!-- Logo mark -->
            <table cellpadding="0" cellspacing="0" role="presentation" align="center" style="margin:0 auto 16px;">
              <tr>
                <td style="background:${tokens.accent};border-radius:12px;width:44px;height:44px;text-align:center;vertical-align:middle;">
                  <span style="color:${tokens.white};font-size:22px;line-height:44px;display:block;">&#9632;</span>
                </td>
                <td style="padding-left:12px;vertical-align:middle;">
                  <span style="color:${tokens.white};font-size:24px;font-weight:800;letter-spacing:-0.5px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">ScanEat</span>
                </td>
              </tr>
            </table>
            <!-- Accent pill -->
            <table cellpadding="0" cellspacing="0" role="presentation" align="center" style="margin:0 auto 14px;">
              <tr>
                <td style="background:${tokens.accentLight};border-radius:100px;padding:5px 16px;">
                  <span style="color:${tokens.accentDark};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${lang.subtitle}</span>
                </td>
              </tr>
            </table>
            <h1 style="margin:0;color:${tokens.white};font-size:26px;font-weight:800;letter-spacing:-0.5px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${lang.title}</h1>
          </td>
        </tr>

        <!-- ── Body ── -->
        <tr>
          <td style="background:${tokens.white};padding:36px 40px 8px;border-left:1.5px solid ${tokens.border};border-right:1.5px solid ${tokens.border};">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              ${field(lang.labels.name, name)}
              ${field(lang.labels.email, `<a href="mailto:${email}" style="color:${tokens.accent};text-decoration:none;font-weight:600;">${email}</a>`)}
              ${field(lang.labels.restaurant, restaurant)}
              <!-- Message field — accented -->
              <tr>
                <td style="padding:0 0 16px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background:${tokens.accentLight};border:1.5px solid ${tokens.border};border-left:4px solid ${tokens.accent};border-radius:0 12px 12px 0;padding:18px 22px;">
                        <p style="margin:0 0 8px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${tokens.accent};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${lang.labels.message}</p>
                        <p style="margin:0;font-size:15px;color:${tokens.navy};line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${message.replace(/\n/g, "<br>")}</p>
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
          <td style="background:${tokens.white};padding:4px 40px 36px;border-left:1.5px solid ${tokens.border};border-right:1.5px solid ${tokens.border};">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center" style="padding-top:8px;">
                  <a href="mailto:${email}"
                     style="display:inline-block;background:${tokens.accent};color:${tokens.white};font-size:14px;font-weight:700;text-decoration:none;padding:15px 36px;border-radius:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:0.01em;">
                    ${lang.replyBtn} → ${email}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── Footer ── -->
        <tr>
          <td style="background:${tokens.surface};border:1.5px solid ${tokens.border};border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
            <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:${tokens.navy};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
              <span style="color:${tokens.accent};">Scan</span>Eat · Ecommetrica
            </p>
            <p style="margin:0;font-size:12px;color:${tokens.muted};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${lang.footer}</p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

app.post("/api/contact", async (req, res) => {
  const { name, email, restaurant, message, locale } = req.body;

  if (!name || !email || !restaurant || !message) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  const lang = copy[locale] || copy.es;

  try {
    await transporter.sendMail({
      from: `"ScanEat" <${process.env.EMAIL_SMTP}>`,
      to: process.env.EMAIL_SMTP,
      replyTo: email,
      subject: lang.subject(name, restaurant),
      html: buildEmail({ name, email, restaurant, message, locale: locale || "es" }),
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    res.status(500).json({ error: "Error al enviar el correo." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
