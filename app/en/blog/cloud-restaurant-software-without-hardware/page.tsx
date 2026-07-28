import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SetHtmlLang from "../../../components/SetHtmlLang";
import { IconArrow, IconCheck, IconChef } from "../../../components/icons";

const SLUG = "cloud-restaurant-software-without-hardware";
const TITLE = "How to Speed Up Your Restaurant's Service Without Spending on Hardware";
const DESCRIPTION =
  "ScanEat digitizes your menu and kitchen orders. Discover how to choose the best cloud-based restaurant software system in this blog.";
const IMAGE = "/Comandas digitales agiles y modificables con scaneat.jpg";

export const metadata: Metadata = {
  title: `${TITLE} | ScanEat Blog`,
  description: DESCRIPTION,
  keywords:
    "cloud restaurant system, restaurant software, digital kitchen tickets, cloud point of sale, KDS system, POS alternatives, QR ordering software",
  alternates: {
    canonical: `/en/blog/${SLUG}`,
    languages: {
      en: `/en/blog/${SLUG}`,
      es: `/blog/software-para-restaurantes-en-la-nube-sin-hardware`,
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
  inLanguage: "en",
  author: { "@type": "Organization", name: "ScanEat" },
  publisher: {
    "@type": "Organization",
    name: "Ecommetrica",
    logo: { "@type": "ImageObject", url: "https://www.scaneat.mx/logo.png" },
  },
  datePublished: "2026-07-28",
  mainEntityOfPage: `https://www.scaneat.mx/en/blog/${SLUG}`,
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

export default function BlogPostPageEn() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy">
      <SetHtmlLang lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar
        blogAlternate={{
          es: "/blog/software-para-restaurantes-en-la-nube-sin-hardware",
          en: `/en/blog/${SLUG}`,
        }}
      />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5 border border-accent/20">
            <IconChef size={11} /> Cloud restaurant system
          </span>

          <h1 className="text-[clamp(30px,4.5vw,46px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-6">
            Kitchen from another planet, but slow service? How to digitize your restaurant without
            spending on hardware
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-10">
            Your restaurant's food is spectacular, your chef's technique is flawless, and the plating is
            picture-perfect. Yet tickets don't come out on time, orders get mixed up, and guests leave
            unhappy with the service — even though they cleaned their plate.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mb-3">
            Chaos in the kitchen and on the floor? Stop it with digital tickets
          </h2>
          <h4 className="text-base font-bold text-accent mb-5">
            Why you need a digital kitchen order system
          </h4>

          <p className="text-navy/80 leading-relaxed mb-6">
            To keep up with today's pace, your kitchen operation needs to evolve through automation and
            simplify as much as possible to solve the most common headaches:
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            <Pillar>
              Ditching handwritten paper tickets means no more spelling mistakes, illegible handwriting,
              or slow transcription. Orders go straight to a kitchen screen (KDS system) with zero errors
              and exact specifications.
            </Pillar>
            <Pillar>
              Forget manual paperwork at the end of a shift. Cash closings and sales reports are
              generated instantly on their own, making shift changes easier for your managers and hosts.
            </Pillar>
            <Pillar>
              Simplify card payments and split checks directly from the system, improving the guest's
              final experience — and your tips.
            </Pillar>
          </ul>

          <figure className="mb-12">
            <img
              src="/Comandas digitales agiles y modificables con scaneat.jpg"
              alt="Digital tickets sent instantly to the kitchen, error-free, speeding up service with ScanEat"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </figure>

          <h2 className="text-2xl font-extrabold text-navy mb-4">
            What's the best POS system for my restaurant?
          </h2>

          <p className="text-navy/80 leading-relaxed mb-6">
            There are always thousands of options on the market. This is especially true in regions like
            Baja California, where we compete with internationally renowned cuisines, sit at the
            crossroads of diverse cultures, and serve guests with high expectations for taste and
            service.
          </p>

          <h4 className="text-base font-bold text-accent mb-5">
            How do you choose? The best option is the one that solves your operation's specific
            problems — not the one that forces you to adapt to the system.
          </h4>

          <p className="text-navy/80 leading-relaxed mb-6">
            When looking for a platform, make sure it meets these two pillars:
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            <Pillar>
              Accessible for everyone: easy to manage in the kitchen, for waitstaff and managers, where
              training takes a couple of hours, not weeks.
            </Pillar>
            <Pillar>
              Real-time visibility: as a manager or owner, a full dining room doesn't always mean
              everything is running at 100%. A platform you can check instantly from your phone, tablet,
              or laptop, with real-time reports, lets you build strategies on the fly to boost today's
              sales — preventing problems instead of doing damage control.
            </Pillar>
          </ul>

          <figure className="mb-12">
            <img
              src="/sistema digital de comandas  para modulos kds con scaneat para excelencia en cada orden.jpg"
              alt="The new cloud-based digital ticket system that integrates with KDS modules to elevate service in your restaurant and welcome more guests"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </figure>

          <h2 className="text-2xl font-extrabold text-navy mb-3">
            The digital shift: everything in the cloud, no obsolete investments
          </h2>

          <p className="text-navy/80 leading-relaxed mb-4">
            We're the alternative built for the current pace of the restaurant industry.
          </p>

          <h4 className="text-base font-bold text-accent mb-6">
            We offer a 100% cloud-based platform, with no complex installations and no investment in
            expensive equipment that becomes obsolete in a couple of years.
          </h4>

          <div className="bg-accent rounded-2xl p-8 flex flex-col gap-4 mb-10">
            <p className="text-white/90 leading-relaxed">
              Take your restaurant to the next level: activate your 30-day demo trial. We'll leave
              everything customized and ready so you can start operating at 100%, your way.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-accent hover:bg-accent-light font-bold text-sm px-5 py-3 rounded-xl transition-all no-underline self-start"
            >
              Try free demo <IconArrow size={14} />
            </a>
          </div>

          <p className="text-navy/80 leading-relaxed">
            Invest in great food and the best staff, not in a system that's expensive or hard to manage.
            Don't keep a shopping list by hand or scribble on a sticky note when something runs out in
            the kitchen — instead, suspend that item instantly, so your guest never sees it and gets
            annoyed to find out it's sold out.
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
