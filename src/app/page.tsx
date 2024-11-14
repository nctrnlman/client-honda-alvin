import AboutMe from "@/components/AboutMe";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Catalog />
      <Promo />
      <Footer />
    </div>
  );
}
