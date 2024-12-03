"use client"
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import AboutUsAi from "./components/AboutUsAi";
import ServicesSection from "./components/ServicesSection";
import WhyUs from "./components/WhyUs";
import ProjectSection from "./components/ProjectSection";
import Teaam from "./components/Team";
import BackToTopBtn from "./components/BackToTopBtn";
import HomePageSlider from "./components/HomePageSlider";


export default function Home() {

  return (
    <div className="">
      <Navbar />
      <HomePageSlider/>
      <AboutUsAi />
      <ServicesSection />
      <WhyUs />
      <Teaam />
      <ProjectSection />
      <Footer />
      <BackToTopBtn/>
    </div>
  );
}
