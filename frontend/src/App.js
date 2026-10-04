import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Lenis from "lenis";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import ThankYouPage from "@/pages/ThankYouPage";
import Marquee from "@/components/landing/Marquee";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Industries from "@/components/landing/Industries";
import Reviews from "@/components/landing/Reviews";
import Offer from "@/components/landing/Offer";
import Specs from "@/components/landing/Specs";
import Faq from "@/components/landing/Faq";
import OrderForm from "@/components/landing/OrderForm";
import Footer from "@/components/landing/Footer";
import SocialProofPopup from "@/components/landing/SocialProofPopup";
import Shop from "@/components/landing/Shop";
import SocialStands from "@/components/landing/SocialStands";

function Landing() {
  useEffect(() => {
    document.title = "Social Media Review Stands — Google Review NFC Stand | More Reviews and Followers. Zero Effort.";
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -64 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F8F9FA]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <HowItWorks />
        <Benefits />
        <Shop />
        <SocialStands />
        <Industries />
        <Reviews />
        <Offer />
        <Specs />
        <Faq />
        <OrderForm />
      </main>
      <Footer />
      <SocialProofPopup />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors theme="dark" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
