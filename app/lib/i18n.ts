import { title } from "process";

export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      why: "¿Por qué ScanEat?",
      packages: "Paquetes",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contacto",
      demo: "Probar demo",
    },
    hero: {
      badge: "Web App para Restaurantes",
      headline1: "¿Tienes restaurante y quieres sacarle el maximo provecho?",
      headline2: "Empieza a usar ScanEat ",
      sub1: "Somos la mejor  alternativa para tu restaurante basada en la nube, sin instalaciones de hardware e inversion en equipo que se vuelva obsoleta",
      sub2: "Scaneat es la forma más rápida de potenciar tu servicio y ganar más sin complicaciones informáticas.",
      cta1: "Probar demo gratis",
      cta2: "Ver video",
    },
    why: {
      badge: "¿Por qué ScanEat?",
      headline: "Porque el servicio ya no solo se mide en la mesa, ",
      headlineAccent: "también se vive en la pantalla. ",
      headlineEnd: "",
      sub: "Elevamos la experiencia de tus clientes con una plataforma impecable, donde pedir su platillo favorito es un proceso cómodo, rápido y diseñado para consentirlos desde el primer tap.",
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
          desc: "¿Tarjeta o efectivo? ¿Cuentas juntas o separadas? No hay problema, cierra la mesa suave y eficiente.",
        },
      ],
    },
    dashboards: {
      badge: "Para cada rol",
      headline: "Una app pensada para",
      headlineAccent: "todos en tu restaurante",
      sub: "Sincroniza tu equipo, optimiza tus mesas en tiempo real y eleva tus calificaciones. Diseñamos la tecnología que simplifica tu operación ",
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
            "Sin app solo cámara y QR",
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
      cta: "Probar demo",
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
      sub: "No sacrifiques la calidad, invierte en tecnología para mejorar tus utilidades.",
      ctaBannerSub: "Mayor eficiencia, más ventas.",
      ctaBannerHeadline: "Es hora de evolucionar la mesa.",
      ctaBannerSub2: "Eleva la gestión y la experiencia de tu restaurante con ScanEat.",
      ctaBannerBtn: "Comenzar hoy",
      items: [
        {
          title: "Soporte cercano",
          desc: "Soporte técnico y telefónico. No importa dónde estés, estamos a una llamada o un mensaje de distancia para resolver cualquier duda al instante.",
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
      { label: "Demo gratuita", headline: "Prueba ScanEat sin costo", cta: "Solicitar demo" },
      { label: "Descubre ScanEat", headline: "Agiliza tu restaurante.", sub: "Empieza hoy.", cta: "Probar demo", featured: true },
      { label: "Sin compromiso", headline: "Actívalo cuando quieras", cta: "Ver demo" },
    ],
    comparative: {
      titleAccent: "ScanEat ",
      title: "VS Otros sistemas",
      tableHeader1: "Característica",
      tableHeader2: "ScanEat", 
      tableHeader3: "Otros",
      items: [
        {
          feature: "Implementación",
          scanEat: "100% en la nube, sin instalaciones adicionales.",
          others: "Requieren configuración, hardware o soporte técnico.",
        },
        {
          feature: "Experiencia de Usuario",
          scanEat: "Moderna, intuitiva y enfocada en autoservicio.",
          others: "Más complejos, rígidos o con procesos tradicionales.",
        },
        {
          feature: "Costos",
          scanEat: "Suscripción accesible, sin inversiones iniciales altas.",
          others: "Costos mayores en licencias, hardware o mantenimiento.",
        },
        {
          feature: "Infraestructura",
          scanEat: "En la nube, sin equipos adicionales.",
          others: "Dependen de servidores, dispositivos o configuraciones locales.",
        },
        {
          feature: "Escalabilidad",
          scanEat: "Fácil de expandir y gestionar desde la web.",
          others: "Crecimiento más lento y dependiente de infraestructura.",
        },
        {
          feature: "Código QR",
          scanEat: "QR-First: el QR es el centro de la operación.",
          others: "El QR suele ser secundario o inexistente.",
        },
        {
          feature: "Datos y analítica",
          scanEat: "Métricas centralizadas y en tiempo real.",
          others:
            "Datos fragmentados o poca visibilidad del comportamiento del cliente.",
        },
      ],
    },
    faq: {
      badge: "Preguntas frecuentes",
      headline: "¿Preguntas?",
      headlineAccent: "Comencemos.",
      items: [
        { q: "¿Cómo se instala y qué necesito?", a: "Es una web app; solo necesitas conexión a Internet y una impresora para tus QRs, y listo." },
        { q: "¿Qué sigue después de contratar?", a: "Te damos un dominio y creamos tu base de datos en la nube para que esté lista. Tú te encargas de personalizar tu menú, crear tus mesas y tus QRs ¡y está listo para usarse!" },
        { q: "¿Cuántos usuarios puedo tener?", a: "Usuarios ilimitados para administradores, meseros y, por supuesto, tus comensales." },
        { q: "¿Dónde se puede usar?", a: "En cualquier dispositivo celular, tablet, computadora con internet y un navegador. iOS, Android, Windows, Mac, todos son bienvenidos." },
        { q: "¿Cómo funcionan las calificaciones de clientes?", a: "Las reseñas son calificaciones que cada cliente puede dejar después de su servicio. Esta calificación y los comentarios permiten identificar y atacar áreas de oportunidad para mejorar continuamente." },
        { q: "¿Hay costos ocultos o cargos por actualización?", a: "No. Las actualizaciones y mejoras son tuyas, totalmente gratis. El precio mensual lo es todo." },
      ],
    },
    blog: {
      badge: "Blog",
      headline: "Aprende a agilizar",
      headlineAccent: "tu restaurante",
      sub: "Ideas y guías prácticas para digitalizar tu operación sin complicarte.",
      slug: "software-para-restaurantes-en-la-nube-sin-hardware",
      readTime: "6 min de lectura",
      post: {
        title: "Cómo digitalizar tu restaurante sin gastar en hardware",
        excerpt: "Tu comida es espectacular, pero si las comandas no salen a tiempo el cliente se va descontento. Descubre cómo un sistema de comandas digitales y KDS en la nube resuelve el caos de cocina y servicio.",
        cta: "Leer artículo",
      },
    },
    banner: {
      title: "Sin hardware, sin contratos forzosos",
      titleWave: "Pruébalo gratis durante 30 días",
    },
    contact: {
      badge: "Demo gratuita",
      headline: "Prueba ScanEat",
      headlineAccent: "sin compromiso",
      sub: "Cuéntanos sobre tu restaurante y te enviaremos tu demo personalizada.",
      fields: {
        name: "Tu nombre",
        namePlaceholder: "Juan García",
        email: "Correo electrónico",
        emailPlaceholder: "juan@mirestaurante.com",
        restaurant: "Nombre del restaurante",
        restaurantPlaceholder: "La Trattoria del Centro",
        message: "Mensaje (opcional)",
        messagePlaceholder: "Cuéntanos sobre tu restaurante, número de mesas, necesidades...",
      },
      sending: "Enviando...",
      sent: "¡Solicitud enviada!",
      error: "Error, intenta de nuevo",
      duplicate: "Ya existe una solicitud para este restaurante con ese correo",
      cta: "Solicitar demo",
      successMsg: "Recibimos tu solicitud de demo. Te contactaremos pronto.",
      errorMsg: "Algo salió mal. Escríbenos a",
      demoBadge: "Sin compromiso",
      demoNote: "No necesitas tarjeta de crédito",
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
      blog: "Blog",
      contact: "Contact",
      demo: "Try demo",
    },
    hero: {
      badge: "Web App for Restaurants",
      headline1: "Do you own a restaurant and want to get the most out of it?",
      headline2: "Start using ScanEat.",
      sub1: "We are the best cloud-based solution for your restaurant—no installation required, and no need to invest in equipment that will eventually become obsolete",
      sub2: "Scaneat is the fastest way to boost your service and increase your revenue without any IT hassles.",
      cta1: "Try demo free",
      cta2: "Watch video",
    },
    why: {
      badge: "Why ScanEat?",
      headline: "Because service is no longer measured solely at the table",
      headlineAccent: "it’s also experienced on the screen. ",
      headlineEnd: "",
      sub: "We enhance your customers' experience with a seamless platform where ordering their favorite dish is a convenient, fast process designed to pamper them from the very first tap. ",
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
          desc: "Card or cash? Split or together? No problem, close the table smoothly and efficiently.",
        },
      ],
    },
    dashboards: {
      badge: "For every role",
      headline: "An app built for",
      headlineAccent: "everyone in your restaurant",
      sub: "Synchronize your team, optimize your tables in real time, and boost your ratings. We design technology that streamlines your operations ",
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
            "Order directly from the table, no waiting",
            "Notification when their order is ready",
            "Service rating at the end",
            "No app just camera and QR",
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
      cta: "Try demo",
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
      sub: "Don't sacrifice quality, invest in technology to improve your profits.",
      ctaBannerSub: "Greater efficiency, more sales.",
      ctaBannerHeadline: "It's time to take the table to the next level.",
      ctaBannerSub2: "Take your restaurant's management and customer experience to the next level with ScanEat",
      ctaBannerBtn: "Start today",
      items: [
        {
          title: "Close support",
          desc: "Technical and phone support. No matter where you are, we are one call or message away to solve any question instantly.",
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
      { label: "Free demo", headline: "Try ScanEat at no cost", cta: "Request demo" },
      { label: "Discover ScanEat", headline: "Streamline your restaurant.", sub: "Start today.", cta: "Try demo", featured: true },
      { label: "No commitment", headline: "Activate whenever you want", cta: "Watch demo" },
    ],
    comparative: {
      titleAccent: "ScanEat ",
      title: "VS Others systems",
      tableHeader1: "Feature",
      tableHeader2: "ScanEat ",
      tableHeader3: "Others",
      items: [
        {
          feature: "Implementation",
          scanEat: "100% cloud-based, no additional installations required.",
          others: "Require configuration, hardware, or technical support.",
        },
        {
          feature: "User Experience",
          scanEat: "Modern, intuitive, and focused on self-service.",
          others: "More complex, rigid, or based on traditional processes.",
        },
        {
          feature: "Costs",
          scanEat: "Affordable subscription, no high upfront costs.",
          others: "Higher costs for licenses, hardware, or maintenance.",
        },
        {
          feature: "Infrastructure",
          scanEat: "Cloud-based, no additional equipment required.",
          others: "Dependent on servers, devices, or local configurations.",
        },
        {
          feature: "Scalability",
          scanEat: "Easy to scale and manage via the web.",
          others: "Slower growth and dependent on infrastructure.",
        },
        {
          feature: "QR Code",
          scanEat: "QR-First: the QR code is at the heart of the operation.",
          others: "The QR code is often secondary or nonexistent.",
        },
        {
          feature: "Data and Analytics",
          scanEat: "Centralized, real-time metrics.",
          others:
            "Fragmented data or limited visibility into customer behavior.",
        },
      ],
    },
    faq: {
      badge: "Frequently asked questions",
      headline: "Questions?",
      headlineAccent: "Let's get started.",
      items: [
        { q: "How is it installed and what do I need?", a: "It's a web app; you only need an internet connection and a printer for your QRs, and you're set." },
        { q: "What happens after signing up?", a: "We give you a domain and create your cloud database ready to go. You take care of customizing your menu, creating your tables and QRs and it's ready to use!" },
        { q: "How many users can I have?", a: "Unlimited users for administrators, waitstaff, and of course your guests." },
        { q: "Where can it be used?", a: "On any device phone, tablet, computer with internet and a browser. iOS, Android, Windows, Mac, all are welcome." },
        { q: "How do guest ratings work?", a: "Reviews are ratings each guest can leave after their service. These ratings and comments help identify and address areas for improvement continuously." },
        { q: "Are there hidden costs or update fees?", a: "No. Updates and improvements are yours, completely free. The monthly price is all there is." },
      ],
    },
    blog: {
      badge: "Blog",
      headline: "Learn how to streamline",
      headlineAccent: "your restaurant",
      sub: "Practical ideas and guides to digitize your operation without the hassle.",
      slug: "cloud-restaurant-software-without-hardware",
      readTime: "6 min read",
      post: {
        title: "How to Digitize Your Restaurant Without Spending on Hardware",
        excerpt: "Your food is spectacular, but if tickets don't come out on time, guests leave unhappy. Discover how a cloud-based digital ticket and KDS system fixes kitchen and service chaos.",
        cta: "Read article",
      },
    },
    banner: {
      title: "No hardware, no long-term contracts",
      titleWave: "Try ScanEat free for 30 days",
    },
    contact: {
      badge: "Free demo",
      headline: "Try ScanEat",
      headlineAccent: "no strings attached",
      sub: "Tell us about your restaurant and we'll send you a personalized demo.",
      fields: {
        name: "Your name",
        namePlaceholder: "John Smith",
        email: "Email address",
        emailPlaceholder: "john@myrestaurant.com",
        restaurant: "Restaurant name",
        restaurantPlaceholder: "The Downtown Trattoria",
        message: "Message (optional)",
        messagePlaceholder: "Tell us about your restaurant, number of tables, needs...",
      },
      sending: "Sending...",
      sent: "Request sent!",
      error: "Error, please try again",
      duplicate: "A request already exists for this restaurant with this email",
      cta: "Request demo",
      successMsg: "We received your demo request. We'll be in touch soon.",
      errorMsg: "Something went wrong. Email us at",
      demoBadge: "No commitment",
      demoNote: "No credit card required",
    },
    footer: {
      rights: "© 2026 ScanEat · Ecommetrica · All rights reserved.",
      location: "Tijuana, Baja California, Mexico",
    },
  },
} as const;

export type Translations = {
  nav: { why: string; packages: string; faq: string; blog: string; contact: string; demo: string };
  hero: { badge: string; headline1: string; headline2: string; sub1: string; sub2: string; cta1: string; cta2: string };
  why: { badge: string; headline: string; headlineAccent: string; headlineEnd: string; sub: string; pillars: { tag: string; title: string; desc: string }[] };
  dashboards: { badge: string; headline: string; headlineAccent: string; sub: string; roles: { role: string; headline: string; features: string[] }[] };
  packages: { badge: string; headline: string; headlineAccent: string; sub: string; reporterLabel: string; comingSoon: string; cta: string; includes: { title: string; desc: string }[]; badges: string[] };
  benefits: { headline: string; headlineAccent: string; sub: string; ctaBannerSub: string; ctaBannerHeadline: string; ctaBannerSub2: string; ctaBannerBtn: string; items: { title: string; desc: string; note?: string }[] };
  ctas: { label: string; headline: string; sub?: string; cta: string; featured?: boolean }[];
  comparative: { titleAccent: string; title: string; tableHeader1: string; tableHeader2: string; tableHeader3: string; items: {feature: String; scanEat: String; others: String;}[]};
  faq: { badge: string; headline: string; headlineAccent: string; items: { q: string; a: string }[] };
  blog: { badge: string; headline: string; headlineAccent: string; sub: string; slug: string; readTime: string; post: { title: string; excerpt: string; cta: string } };
  banner: { title: string; titleWave: string; };
  contact: { badge: string; headline: string; headlineAccent: string; sub: string; fields: { name: string; namePlaceholder: string; email: string; emailPlaceholder: string; restaurant: string; restaurantPlaceholder: string; message: string; messagePlaceholder: string }; sending: string; sent: string; error: string; duplicate: string; cta: string; successMsg: string; errorMsg: string; demoBadge: string; demoNote: string };
  footer: { rights: string; location: string };
};
