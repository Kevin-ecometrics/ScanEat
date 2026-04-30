export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      why: "¿Por qué ScanEat?",
      packages: "Paquetes",
      faq: "FAQ",
      contact: "Contacto",
      demo: "Solicitar demo",
    },
    hero: {
      badge: "Web App para Restaurantes",
      headline1: "¿Tienes restaurante?",
      headline2: "Tienes ScanEat.",
      sub1: "La forma más rápida de potenciar tu servicio y ganar más.",
      sub2: "Ustedes ya son los maestros de la cocina — ahora también expertos en gestión. Con la mejor web app, transformamos su talento en un negocio más ágil y rentable.",
      cta1: "Comenzar gratis",
      cta2: "Ver demo",
    },
    why: {
      badge: "¿Por qué ScanEat?",
      headline: "Queremos que tus comensales tengan",
      headlineAccent: "la mejor experiencia",
      headlineEnd: "en cada pedido",
      sub: "Automatiza y haz que regresen una y otra vez.",
      pillars: [
        {
          tag: "Sin app que instalar",
          title: "Escanea y comparte",
          desc: "Tus comensales escanean el QR y comienzan a pedir. ¿Llegan más invitados? Se unen a la mesa digital de forma fácil y rápida.",
        },
        {
          tag: "Tiempo real",
          title: "Comandas rápidas y exactas",
          desc: "El pedido entra, se procesa y está listo. Cocina y meseros trabajan sincronizados para una entrega veloz y sin errores.",
        },
        {
          tag: "Sin fricciones",
          title: "Cuentas claras y cobros fluidos",
          desc: "¿Tarjeta o efectivo? ¿Cuentas juntas o separadas? No hay problema — tus totales al instante cierran la mesa suave y eficiente.",
        },
      ],
    },
    dashboards: {
      badge: "Para cada rol",
      headline: "Una app pensada para",
      headlineAccent: "todos en tu restaurante",
      sub: "Administra todo, ve en vivo cómo van tus mesas — esto te ayudará a mejorar estrategias para aumentar ventas, disminuir el tiempo y elevar calificaciones.",
      roles: [
        {
          role: "Meseros & Hostess",
          headline: "Agiliza la recepción y maximiza la rotación de mesas sin perder el control.",
          features: [
            "Gestión de reservas en tiempo real",
            "Notificaciones de productos agotados",
            "Cobro rápido: tarjeta o efectivo",
            "Cuentas separadas o juntas en un toque",
            "Vista de mesas activas e inactivas",
          ],
        },
        {
          role: "Administrador",
          headline: "Gestiona tu base de datos, controla inventarios y mantén comunicación impecable con cocina.",
          features: [
            "Reportes y monitoreo en vivo de mesas",
            "Gestión de ingresos, cierres y cortes",
            "Visualiza el estado de tus mesas en vivo",
            "Implementa estrategias para rotar mesas más rápido",
            "Historial de ventas y calificaciones",
            "Exporta reportes completos en Excel y PDF",
          ],
        },
        {
          role: "Comensales",
          headline: "Reciben notificaciones instantáneas sobre el estatus de sus platillos.",
          features: [
            "Menú interactivo desde su celular",
            "Pedido directo desde la mesa sin esperar",
            "Notificación cuando su orden está lista",
            "Calificación del servicio al finalizar",
            "Sin app — solo cámara y QR",
          ],
        },
      ],
    },
    packages: {
      badge: "Paquetes",
      headline: "ScanEat: Automatiza tu restaurante,",
      headlineAccent: "maximiza tus ganancias",
      sub: "Reduce errores operativos, controla tus costos, optimiza tu nómina y recupera tu tranquilidad.",
      reporterLabel: "Incluye App Reportador",
      comingSoon: "*Próximamente: terminal de pago integrada",
      cta: "Solicitar precio",
      includes: [
        { title: "Portal administrativo", desc: "Reportes y monitoreo en vivo de mesas, gestión de ingresos, cierres y cortes." },
        { title: "Módulo KDS", desc: "Kitchen Display System: comandas en orden para coordinación fluida en cocina y barra." },
        { title: "Módulo meseros y hostess", desc: "Agiliza el servicio, reservas y cobro desde cualquier dispositivo." },
        { title: "Facturación", desc: "Solicitud de folios y guarda tickets en PDFs al instante." },
        { title: "Interfaz intuitiva", desc: "Fácil de usar para comensales, administrador y personal general." },
        { title: "Soporte total", desc: "Comando de ayuda integrado para notificar al personal en vivo." },
      ],
      badges: ["Usuarios ilimitados", "Cualquier dispositivo", "Actualizaciones gratis", "Cero costos ocultos"],
    },
    benefits: {
      headline: "Más beneficios de",
      headlineAccent: "la web app",
      sub: "No sacrifiques la calidad — invierte en tecnología para mejorar tus utilidades.",
      ctaBannerSub: "Mayor eficiencia, más ventas.",
      ctaBannerHeadline: "Es hora de cambiar la estrategia.",
      ctaBannerSub2: "Sube el nivel de tu gestión con ScanEat.",
      ctaBannerBtn: "Comenzar hoy",
      items: [
        {
          title: "Soporte cercano",
          desc: "Soporte técnico y telefónico. No importa dónde estés — estamos a una llamada o un mensaje de distancia para resolver cualquier duda al instante.",
          note: "Oficina física en Tijuana, Baja California",
        },
        {
          title: "Cero costos ocultos",
          desc: "Las actualizaciones y mejoras son tuyas, totalmente gratis. El precio que ves es el precio que pagas.",
        },
        {
          title: "Visualiza en vivo",
          desc: "Mira el estado de tus mesas para implementar estrategias de venta, rotar mesas más rápido y vender más.",
        },
        {
          title: "Calificaciones de clientes",
          desc: "Las reseñas permiten identificar y atacar áreas de oportunidad. Cada calificación y comentario te ayuda a mejorar el servicio.",
        },
      ],
    },
    ctas: [
      { label: "Si tienes ScanEat,", headline: "tienes todo listo", cta: "Únete hoy" },
      { label: "Mayor eficiencia,", headline: "Más ventas.", sub: "Solo con ScanEat.", cta: "Haz tu prueba", featured: true },
      { label: "El combo ganador:", headline: "Ustedes los platillos, ScanEat el orden.", cta: "Comienza hoy" },
    ],
    faq: {
      badge: "Preguntas frecuentes",
      headline: "¿Preguntas?",
      headlineAccent: "Comencemos.",
      items: [
        { q: "¿Cómo se instala y qué necesito?", a: "Es una web app — solo necesitas conexión a Internet y una impresora para tus QRs, y listo. No hay nada que descargar ni instalar." },
        { q: "¿Qué sigue después de contratar?", a: "Te damos un dominio y creamos tu base de datos en la nube para que esté lista. Tú te encargas de personalizar tu menú, crear tus mesas y tus QRs — ¡y está listo para usarse!" },
        { q: "¿Cuántos usuarios puedo tener?", a: "Usuarios ilimitados para administradores, meseros y, por supuesto, tus comensales." },
        { q: "¿Dónde se puede usar?", a: "En cualquier dispositivo — celular, tablet, computadora — con internet y un navegador. iOS, Android, Windows, Mac. No importa." },
        { q: "¿Cómo funcionan las calificaciones de clientes?", a: "Las reseñas son calificaciones que cada cliente puede dejar después de su servicio. Esta calificación y los comentarios permiten identificar y atacar áreas de oportunidad para mejorar continuamente." },
        { q: "¿Hay costos ocultos o cargos por actualización?", a: "No. Las actualizaciones y mejoras son tuyas, totalmente gratis. El precio mensual lo es todo." },
      ],
    },
    contact: {
      badge: "Empieza hoy",
      headline: "Menos costos,",
      headlineAccent: "más utilidades",
      sub: "Cuéntanos sobre tu restaurante y te contactamos en menos de 24 horas.",
      fields: {
        name: "Tu nombre",
        namePlaceholder: "Juan García",
        email: "Correo electrónico",
        emailPlaceholder: "juan@mirestaurante.com",
        restaurant: "Nombre del restaurante",
        restaurantPlaceholder: "La Trattoria del Centro",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu restaurante, número de mesas, necesidades...",
      },
      sending: "Enviando...",
      sent: "¡Mensaje enviado!",
      error: "Error, intenta de nuevo",
      cta: "Solicitar demo",
      successMsg: "Te contactamos en menos de 24 horas.",
      errorMsg: "Algo salió mal. Escríbenos a",
    },
    footer: {
      rights: "© 2026 ScanEat · Ecommetrica · Todos los derechos reservados.",
      location: "Tijuana, Baja California, México",
    },
  },

  en: {
    nav: {
      why: "Why ScanEat?",
      packages: "Packages",
      faq: "FAQ",
      contact: "Contact",
      demo: "Request demo",
    },
    hero: {
      badge: "Web App for Restaurants",
      headline1: "You have a restaurant?",
      headline2: "You have ScanEat.",
      sub1: "The fastest way to boost your service and earn more.",
      sub2: "You are already masters of the kitchen — now become experts in management too. With the best web app, we turn your talent into a more agile and profitable business.",
      cta1: "Start for free",
      cta2: "Watch demo",
    },
    why: {
      badge: "Why ScanEat?",
      headline: "We want your guests to have",
      headlineAccent: "the best experience",
      headlineEnd: "with every order",
      sub: "Automate and make them come back again and again.",
      pillars: [
        {
          tag: "No app needed",
          title: "Scan & share",
          desc: "Your guests scan the QR and start ordering. More guests arriving? They join the digital table quickly and easily.",
        },
        {
          tag: "Real time",
          title: "Fast & accurate orders",
          desc: "The order comes in, gets processed, and is ready. Kitchen and waitstaff work in sync for fast, error-free delivery.",
        },
        {
          tag: "Frictionless",
          title: "Clear bills, smooth payments",
          desc: "Card or cash? Split or together? No problem — instant totals close the table smoothly and efficiently.",
        },
      ],
    },
    dashboards: {
      badge: "For every role",
      headline: "An app built for",
      headlineAccent: "everyone in your restaurant",
      sub: "Manage everything, see your tables live — this will help you improve strategies to increase sales, reduce time, and raise ratings.",
      roles: [
        {
          role: "Waitstaff & Hostess",
          headline: "Speed up reception and maximize table turnover without losing control.",
          features: [
            "Real-time reservation management",
            "Out-of-stock notifications",
            "Fast checkout: card or cash",
            "Split or combined bills in one tap",
            "Active and inactive table view",
          ],
        },
        {
          role: "Administrator",
          headline: "Manage your database, control inventory, and keep flawless communication with the kitchen.",
          features: [
            "Live table reports and monitoring",
            "Revenue management, closings, and cuts",
            "See your table status live",
            "Implement strategies to rotate tables faster",
            "Sales history and ratings",
            "Export full reports in Excel and PDF",
          ],
        },
        {
          role: "Guests",
          headline: "Receive instant notifications about the status of their dishes.",
          features: [
            "Interactive menu from their phone",
            "Order directly from the table — no waiting",
            "Notification when their order is ready",
            "Service rating at the end",
            "No app — just camera and QR",
          ],
        },
      ],
    },
    packages: {
      badge: "Packages",
      headline: "ScanEat: Automate your restaurant,",
      headlineAccent: "maximize your profits",
      sub: "Reduce operational errors, control costs, optimize payroll, and get your peace of mind back.",
      reporterLabel: "Includes Reporter App",
      comingSoon: "*Coming soon: integrated payment terminal",
      cta: "Request pricing",
      includes: [
        { title: "Admin portal", desc: "Live table reports and monitoring, revenue management, closings, and cuts." },
        { title: "KDS module", desc: "Kitchen Display System: ordered tickets for smooth coordination in kitchen and bar." },
        { title: "Waitstaff & hostess module", desc: "Speed up service, reservations, and checkout from any device." },
        { title: "Invoicing", desc: "Request folios and save tickets as PDFs instantly." },
        { title: "Intuitive interface", desc: "Easy to use for guests, administrators, and general staff." },
        { title: "Full support", desc: "Built-in help command to notify staff live." },
      ],
      badges: ["Unlimited users", "Any device", "Free updates", "Zero hidden costs"],
    },
    benefits: {
      headline: "More benefits of",
      headlineAccent: "the web app",
      sub: "Don't sacrifice quality — invest in technology to improve your profits.",
      ctaBannerSub: "Greater efficiency, more sales.",
      ctaBannerHeadline: "Time to change the strategy.",
      ctaBannerSub2: "Level up your management with ScanEat.",
      ctaBannerBtn: "Start today",
      items: [
        {
          title: "Close support",
          desc: "Technical and phone support. No matter where you are — we are one call or message away to solve any question instantly.",
          note: "Physical office in Tijuana, Baja California",
        },
        {
          title: "Zero hidden costs",
          desc: "Updates and improvements are yours, completely free. The price you see is the price you pay.",
        },
        {
          title: "Live visualization",
          desc: "See the status of your tables to implement sales strategies, rotate tables faster, and sell more.",
        },
        {
          title: "Guest ratings",
          desc: "Reviews let you identify and address improvement areas. Every rating and comment helps you improve your service.",
        },
      ],
    },
    ctas: [
      { label: "If you have ScanEat,", headline: "you have everything ready", cta: "Join today" },
      { label: "Greater efficiency,", headline: "More sales.", sub: "Only with ScanEat.", cta: "Try it now", featured: true },
      { label: "The winning combo:", headline: "You bring the dishes, ScanEat brings the order.", cta: "Start today" },
    ],
    faq: {
      badge: "Frequently asked questions",
      headline: "Questions?",
      headlineAccent: "Let's get started.",
      items: [
        { q: "How is it installed and what do I need?", a: "It's a web app — you only need an internet connection and a printer for your QRs. Nothing to download or install." },
        { q: "What happens after signing up?", a: "We give you a domain and create your cloud database ready to go. You take care of customizing your menu, creating your tables and QRs — and it's ready to use!" },
        { q: "How many users can I have?", a: "Unlimited users for administrators, waitstaff, and of course your guests." },
        { q: "Where can it be used?", a: "On any device — phone, tablet, computer — with internet and a browser. iOS, Android, Windows, Mac. No matter what." },
        { q: "How do guest ratings work?", a: "Reviews are ratings each guest can leave after their service. These ratings and comments help identify and address areas for improvement continuously." },
        { q: "Are there hidden costs or update fees?", a: "No. Updates and improvements are yours, completely free. The monthly price is all there is." },
      ],
    },
    contact: {
      badge: "Start today",
      headline: "Less costs,",
      headlineAccent: "more profits",
      sub: "Tell us about your restaurant and we'll contact you within 24 hours.",
      fields: {
        name: "Your name",
        namePlaceholder: "John Smith",
        email: "Email address",
        emailPlaceholder: "john@myrestaurant.com",
        restaurant: "Restaurant name",
        restaurantPlaceholder: "The Downtown Trattoria",
        message: "Message",
        messagePlaceholder: "Tell us about your restaurant, number of tables, needs...",
      },
      sending: "Sending...",
      sent: "Message sent!",
      error: "Error, please try again",
      cta: "Request demo",
      successMsg: "We'll contact you within 24 hours.",
      errorMsg: "Something went wrong. Email us at",
    },
    footer: {
      rights: "© 2026 ScanEat · Ecommetrica · All rights reserved.",
      location: "Tijuana, Baja California, Mexico",
    },
  },
} as const;

export type Translations = {
  nav: { why: string; packages: string; faq: string; contact: string; demo: string };
  hero: { badge: string; headline1: string; headline2: string; sub1: string; sub2: string; cta1: string; cta2: string };
  why: { badge: string; headline: string; headlineAccent: string; headlineEnd: string; sub: string; pillars: { tag: string; title: string; desc: string }[] };
  dashboards: { badge: string; headline: string; headlineAccent: string; sub: string; roles: { role: string; headline: string; features: string[] }[] };
  packages: { badge: string; headline: string; headlineAccent: string; sub: string; reporterLabel: string; comingSoon: string; cta: string; includes: { title: string; desc: string }[]; badges: string[] };
  benefits: { headline: string; headlineAccent: string; sub: string; ctaBannerSub: string; ctaBannerHeadline: string; ctaBannerSub2: string; ctaBannerBtn: string; items: { title: string; desc: string; note?: string }[] };
  ctas: { label: string; headline: string; sub?: string; cta: string; featured?: boolean }[];
  faq: { badge: string; headline: string; headlineAccent: string; items: { q: string; a: string }[] };
  contact: { badge: string; headline: string; headlineAccent: string; sub: string; fields: { name: string; namePlaceholder: string; email: string; emailPlaceholder: string; restaurant: string; restaurantPlaceholder: string; message: string; messagePlaceholder: string }; sending: string; sent: string; error: string; cta: string; successMsg: string; errorMsg: string };
  footer: { rights: string; location: string };
};
