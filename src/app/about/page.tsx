"use client";
import AboutUsAi from "../components/AboutUsAi";
import BackToTopBtn from "../components/BackToTopBtn";
import DownToTopBtn from "../components/BackToTopBtn";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import Teaam from "../components/Team";
import WhyUs from "../components/WhyUs";


export default function About() {
 
  return (
    <div >
      <Navbar />
      <HeroSection title=" درباره ما " route="aboute" />
      <AboutUsAi />
      <DownToTopBtn/>
      <WhyUs />
      <Teaam />
      <Newsletter />
      <Footer />
      <BackToTopBtn/>
    </div>
  );
}
