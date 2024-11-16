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
    // Menambahkan script Tawk.to ke dalam halaman
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/673856a92480f5b4f59eea7a/1icq152a1"; // Ganti dengan ID Anda
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Menyisipkan script ke dalam body
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Menghapus script ketika komponen unmount
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
