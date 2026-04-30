import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./providers/I18nProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScanEat — Menú Digital para Restaurantes",
  description:
    "ScanEat digitaliza tu menú con un QR personalizado. Actualización en tiempo real, pedidos desde la mesa y panel de administración. Sin app, sin papel.",
  keywords:
    "scan eat, menú digital, restaurante, QR menu, pedidos online, gestión restaurante, sistema meseros",
  authors: [{ name: "Ecommetrica" }],
  publisher: "Ecommetrica",
  robots: "index, follow",
  metadataBase: new URL("https://www.scaneat.ai/"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "ScanEat — Menú Digital para Restaurantes",
    description: "Tu menú en un QR. Simple, rápido, elegante.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="antialiased font-jakarta">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
