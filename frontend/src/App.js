import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Variants from "@/components/landing/Variants";
import Industries from "@/components/landing/Industries";
import Reviews from "@/components/landing/Reviews";
import Offer from "@/components/landing/Offer";
import Specs from "@/components/landing/Specs";
import Faq from "@/components/landing/Faq";
import OrderForm from "@/components/landing/OrderForm";
import Footer from "@/components/landing/Footer";
import SocialProofPopup from "@/components/landing/SocialProofPopup";

function Landing() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F8F9FA]">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Benefits />
        <Variants />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
