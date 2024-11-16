"use client";
import { Carousel } from "antd";
import Image from "next/image";
import { useEffect } from "react";

const HeroSection: React.FC = () => {
  // Menambahkan efek smooth scroll pada dokumen
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      <Carousel autoplay effect="fade" className="w-full h-full">
        {/* Slide 1 */}
        <div className="relative w-full h-screen">
          <Image
            src="https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg"
            alt="Mobil Honda 1"
            layout="fill" // Mengisi penuh container secara responsif
            objectFit="cover" // Menjaga aspek rasio dan mengisi container
            className="w-full h-full"
            priority // Memuat gambar pertama dengan prioritas tinggi
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-screen">
          <Image
            src="https://di-uploads-pod1.dealerinspire.com/saffordbrownhondaarlington/uploads/2023/12/ezgif.com-avif-to-jpg-converted-2.jpg"
            alt="Mobil Honda 2"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </Carousel>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s text-red-600 leading-tight sm:leading-snug">
          Temukan Honda Terbaik Anda
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s leading-relaxed sm:leading-loose max-w-2xl">
          Jelajahi mobil Honda terbaik yang cocok dengan gaya hidup Anda.
        </p>

        {/* Button */}
        <a href="#catalog">
          <button className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
            Lihat Katalog
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
