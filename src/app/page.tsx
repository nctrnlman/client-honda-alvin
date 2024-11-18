"use client";
import AboutMe from "@/components/AboutMe";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/673856a92480f5b4f59eea7a/1icq152a1";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
