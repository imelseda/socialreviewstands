import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Variants from "@/components/landing/Variants";
import Reviews from "@/components/landing/Reviews";
import Specs from "@/components/landing/Specs";
import Faq from "@/components/landing/Faq";
import OrderForm from "@/components/landing/OrderForm";
import Footer from "@/components/landing/Footer";

function Landing() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#121212]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Variants />
        <Reviews />
        <Specs />
        <Faq />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
