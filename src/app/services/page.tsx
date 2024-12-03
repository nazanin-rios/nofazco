"use client"
import BackToTopBtn from "../components/BackToTopBtn";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import ServicesSection from "../components/ServicesSection";

export default function Services() {


  return (
    <div>
      <Navbar />
      <HeroSection title="خدمات‌ها" route="services" />
     <ServicesSection/>
      <Newsletter />
      <Footer />
      <BackToTopBtn/>
    </div>
  );
}
