import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardPreviews from "./components/DashboardPreviews";
import WhyScanEat from "./components/WhyScanEat";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Benefits from "./components/Benefits";
import CTAStrip from "./components/CTAStrip";
import Compare from "./components/Compare";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy">
      <Navbar />
      <Hero />
      <WhyScanEat />
      <Gallery />
      <DashboardPreviews />
      <Packages />
      <Benefits />
      <CTAStrip />
      <Compare />
      <FAQ />
      <Blog />
      <Banner />
      <ContactForm />
      <Footer />
    </div>
  );
}
