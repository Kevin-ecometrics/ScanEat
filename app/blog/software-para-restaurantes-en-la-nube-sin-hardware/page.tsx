import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IconArrow, IconCheck, IconChef } from "../../components/icons";

const SLUG = "software-para-restaurantes-en-la-nube-sin-hardware";
const TITLE = "Cómo agilizar tu restaurante y servicio sin gastar en hardware";
const DESCRIPTION =
  "ScanEat digitaliza tu menú y comandas. Descubre cómo elegir la mejor opción en software para restaurantes con sistema en la nube en este blog.";
const IMAGE = "/Comandas digitales agiles y modificables con scaneat.jpg";

export const metadata: Metadata = {
  title: `${TITLE} | ScanEat Blog`,
  description: DESCRIPTION,
  keywords:
    "sistema para restaurantes en la nube, software para restaurantes, comandas digitales, punto de venta en la nube, sistema KDS, alternativas para punto de venta, software de comandas por QR",
  alternates: {
    canonical: `/blog/${SLUG}`,
    languages: {
      es: `/blog/${SLUG}`,
      en: `/en/blog/cloud-restaurant-software-without-hardware`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    images: [{ url: IMAGE }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: [`https://www.scaneat.mx${IMAGE}`],
  inLanguage: "es",
  author: { "@type": "Organization", name: "ScanEat" },
  publisher: {
    "@type": "Organization",
    name: "Ecommetrica",
    logo: { "@type": "ImageObject", url: "https://www.scaneat.mx/logo.png" },
  },
  datePublished: "2026-07-28",
  mainEntityOfPage: `https://www.scaneat.mx/blog/${SLUG}`,
};

function Pillar({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 bg-[oklch(99.2%_0.004_80)] rounded-xl px-5 py-4 border border-border">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center">
        <IconCheck size={12} />
      </span>
      <span className="text-sm text-navy font-medium leading-relaxed">{children}</span>
    </li>
  );
}

export default function BlogPostPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar
        blogAlternate={{
          es: `/blog/${SLUG}`,
          en: "/en/blog/cloud-restaurant-software-without-hardware",
        }}
      />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5 border border-accent/20">
            <IconChef size={11} /> Sistema para restaurantes en la nube
          </span>

          <h1 className="text-[clamp(30px,4.5vw,46px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-6">
            ¿Cocina de otro planeta, pero servicio lento? Cómo digitalizar tu restaurante sin gastar en hardware
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-10">
            La comida de tu restaurante es espectacular, las técnicas de tu chef son impecables y el
            emplatado es digno de foto. Sin embargo, las comandas no salen a tiempo, hay errores en los
            pedidos y el cliente se va descontento con la atención, a pesar de que el plato terminó
            completamente limpio.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mb-3">
            ¿Caos en la cocina y el servicio? Evita el descontrol con comandas digitales
          </h2>
          <h4 className="text-base font-bold text-accent mb-5">
            Por qué necesitas un sistema de comandas digitales para cocina
          </h4>

          <p className="text-navy/80 leading-relaxed mb-6">
            Para mantener el ritmo actual, la operación de tu cocina debe evolucionar mediante la
            automatización y simplificar lo más posible para resolver los dolores de cabeza más comunes:
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            <Pillar>
              Al eliminar las comandas de papel hechas a mano, se acaban los errores de ortografía, la
              letra ilegible y la transcripción lenta. Las órdenes llegan directo a una pantalla en
              cocina (Sistema KDS) sin errores y con especificaciones exactas.
            </Pillar>
            <Pillar>
              Olvídate del papeleo manual al terminar el turno. Los cierres de caja y los reportes de
              ventas se generan solos y al instante, facilitando el cambio de turno de tus
              administradores y hostess.
            </Pillar>
            <Pillar>
              Simplifica el momento del pago con tarjeta y la división de cuentas separadas directamente
              desde el sistema, mejorando la experiencia final del comensal y las propinas.
            </Pillar>
          </ul>

          <figure className="mb-12">
            <img
              src="/Comandas digitales agiles y modificables con scaneat.jpg"
              alt="Comandas digitales que se envían al instante a cocina, sin errores, agiliza el proceso y da mejor servicio con ScanEat"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </figure>

          <h2 className="text-2xl font-extrabold text-navy mb-4">
            ¿Qué sistema POS es el mejor para mi restaurante?
          </h2>

          <p className="text-navy/80 leading-relaxed mb-6">
            En el mercado siempre hay miles de opciones. Esto es especialmente visible en regiones como
            Baja California, donde competimos con gastronomías de renombre internacional, colindamos con
            diversas culturas y nos enfrentamos a comensales con altas exigencias en cuanto a gusto y
            servicio.
          </p>

          <h4 className="text-base font-bold text-accent mb-5">
            ¿Cómo elegir? La mejor opción es aquella que resuelve los problemas específicos de tu
            operación, no aquella que te obliga a adaptarte al sistema.
          </h4>

          <p className="text-navy/80 leading-relaxed mb-6">
            Al buscar una plataforma, asegúrate de que cumpla con estos dos pilares:
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            <Pillar>
              Accesible para todos: fácil de gestionar en cocina, para meseros y administradores, donde
              la capacitación no tome semanas, sino un par de horas.
            </Pillar>
            <Pillar>
              Visibilidad en tiempo real: como gerente o dueño, ver el restaurante lleno no siempre se
              traduce en que todo va al 100. Una plataforma que puedas visualizar al instante desde tu
              celular, tablet o laptop, con reportes en tiempo real, te permite generar estrategias sobre
              la marcha para elevar la venta del día — y prevenir, en lugar de hacer control de daños.
            </Pillar>
          </ul>

          <figure className="mb-12">
            <img
              src="/sistema digital de comandas  para modulos kds con scaneat para excelencia en cada orden.jpg"
              alt="El nuevo sistema digital de comandas en la nube que se integra a módulos KDS para elevar el servicio en tu restaurante y captar mayor flujo de comensales"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </figure>

          <h2 className="text-2xl font-extrabold text-navy mb-3">
            La evolución digital: todo en la nube, sin inversiones obsoletas
          </h2>

          <p className="text-navy/80 leading-relaxed mb-4">
            Somos la alternativa diseñada para el ritmo actual de la industria gastronómica.
          </p>

          <h4 className="text-base font-bold text-accent mb-6">
            Te ofrecemos una plataforma 100% basada en la nube, sin instalaciones complejas ni
            inversiones en equipos costosos que se vuelven obsoletos en un par de años.
          </h4>

          <div className="bg-accent rounded-2xl p-8 flex flex-col gap-4 mb-10">
            <p className="text-white/90 leading-relaxed">
              Lleva tu restaurante a otro nivel: activa tu prueba demo de 30 días. Te dejamos todo
              personalizado y listo para que empieces a operar al 100% y a tu gusto.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-accent hover:bg-accent-light font-bold text-sm px-5 py-3 rounded-xl transition-all no-underline self-start"
            >
              Probar demo gratis <IconArrow size={14} />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
