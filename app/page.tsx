import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardPreviews from "./components/DashboardPreviews";
import WhyScanEat from "./components/WhyScanEat";
import Packages from "./components/Packages";
import Benefits from "./components/Benefits";
import CTAStrip from "./components/CTAStrip";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy">
      <Navbar />
      <Hero />
      <WhyScanEat />
      <DashboardPreviews />
      <Packages />
      <Benefits />
      <CTAStrip />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
