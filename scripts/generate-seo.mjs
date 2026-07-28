#!/usr/bin/env node
// Runs after `next build` (output: "export") to emit robots.txt, sitemap.xml
// and a sitemap.xsl stylesheet into the static export directory.

import { execSync } from "node:child_process";
import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "out");
const BASE_URL = "https://www.scaneat.mx";

const PAGES = [
  {
    path: "/",
    file: "app/page.tsx",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/blog/software-para-restaurantes-en-la-nube-sin-hardware",
    file: "app/blog/software-para-restaurantes-en-la-nube-sin-hardware/page.tsx",
    changefreq: "monthly",
    priority: 0.7,
    alternates: {
      es: "/blog/software-para-restaurantes-en-la-nube-sin-hardware",
      en: "/en/blog/cloud-restaurant-software-without-hardware",
    },
  },
  {
    path: "/en/blog/cloud-restaurant-software-without-hardware",
    file: "app/en/blog/cloud-restaurant-software-without-hardware/page.tsx",
    changefreq: "monthly",
    priority: 0.7,
    alternates: {
      es: "/blog/software-para-restaurantes-en-la-nube-sin-hardware",
      en: "/en/blog/cloud-restaurant-software-without-hardware",
    },
  },
];

function lastModifiedOf(relFile) {
  try {
    const gitDate = execSync(`git log -1 --format=%cI -- "${relFile}"`, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (gitDate) return gitDate;
  } catch {
    // not tracked yet / git unavailable, fall through
  }
  try {
    return statSync(path.join(ROOT, relFile)).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSitemapXml() {
  const urlEntries = PAGES.map((page) => {
    const loc = `${BASE_URL}${page.path}`;
    const lastmod = lastModifiedOf(page.file);
    const alternates = page.alternates
      ? Object.entries(page.alternates)
          .map(
            ([lang, altPath]) =>
              `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(
                `${BASE_URL}${altPath}`
              )}"/>`
          )
          .join("\n")
      : "";
    return [
      "  <url>",
      `    <loc>${escapeXml(loc)}</loc>`,
      alternates,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority.toFixed(1)}</priority>`,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n");
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
}

const SITEMAP_XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charSet="utf-8"/>
        <title>Sitemap · ScanEat</title>
        <meta name="robots" content="noindex"/>
        <style>
          :root { color-scheme: light dark; }
          body { font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; background: #fafafa; color: #1a2233; }
          header { padding: 40px 24px 24px; text-align: center; }
          header h1 { margin: 0 0 6px; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
          header p { margin: 0; color: #6b7280; font-size: 14px; }
          main { max-width: 960px; margin: 0 auto; padding: 0 24px 60px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
          thead th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; padding: 14px 16px; border-bottom: 2px solid #eee; }
          tbody td { padding: 14px 16px; border-bottom: 1px solid #f0f0f0; font-size: 14px; vertical-align: top; }
          tbody tr:last-child td { border-bottom: none; }
          tbody tr:hover { background: #fdf4f1; }
          a.loc { color: #d94f2b; font-weight: 600; text-decoration: none; word-break: break-all; }
          a.loc:hover { text-decoration: underline; }
          .badge { display: inline-block; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 999px; background: #fdece5; color: #d94f2b; margin-right: 4px; }
          .muted { color: #6b7280; }
          footer { text-align: center; padding: 20px; font-size: 12px; color: #9ca3af; }
          @media (prefers-color-scheme: dark) {
            body { background: #111318; color: #f4f4f5; }
            table { background: #1a1d24; box-shadow: none; }
            thead th { border-bottom-color: #2a2e37; color: #9ca3af; }
            tbody td { border-bottom-color: #23262e; }
            tbody tr:hover { background: #20232b; }
            .badge { background: #3a241d; color: #ff8a65; }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Sitemap de ScanEat</h1>
          <p><xsl:value-of select="count(//sitemap:url)"/> URLs indexables</p>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Idiomas</th>
                <th>Ultima modificacion</th>
                <th>Frecuencia</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="//sitemap:url">
                <tr>
                  <td>
                    <a class="loc" href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td>
                    <xsl:for-each select="xhtml:link">
                      <span class="badge"><xsl:value-of select="@hreflang"/></span>
                    </xsl:for-each>
                  </td>
                  <td class="muted"><xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></td>
                  <td class="muted"><xsl:value-of select="sitemap:changefreq"/></td>
                  <td class="muted"><xsl:value-of select="sitemap:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
        <footer>Generado automaticamente en cada build - scaneat.mx</footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;

if (!existsSync(OUT_DIR)) {
  console.error(
    `[generate-seo] "${OUT_DIR}" not found. Run "next build" first (output: "export").`
  );
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(path.join(OUT_DIR, "sitemap.xml"), buildSitemapXml());
writeFileSync(path.join(OUT_DIR, "sitemap.xsl"), SITEMAP_XSL);
writeFileSync(path.join(OUT_DIR, "robots.txt"), buildRobotsTxt());

console.log(
  `[generate-seo] wrote sitemap.xml, sitemap.xsl and robots.txt to ${path.relative(ROOT, OUT_DIR)}/ (${PAGES.length} URLs)`
);
