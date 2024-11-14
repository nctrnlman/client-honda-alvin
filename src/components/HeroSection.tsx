import { Carousel } from "antd";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen">
      {/* Carousel */}
      <Carousel autoplay effect="fade" className="w-full h-full">
        <div>
          <div className="relative w-full h-full">
            <Image
              src="https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg"
              alt="Honda Car 1"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
        {/* <div>
          <div className="relative w-full h-full">
            <Image
              src="https://honda-kl.com/images/car-models/city/2023/gallery-11.jpg"
              alt="Honda Car 2"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div> */}
        <div>
          <div className="relative w-full h-full">
            <Image
              src="https://di-uploads-pod1.dealerinspire.com/saffordbrownhondaarlington/uploads/2023/12/ezgif.com-avif-to-jpg-converted-2.jpg"
              alt="Honda Car 3"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
      </Carousel>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6 sm:px-12">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s text-red-600">
          Find Your Perfect Honda
        </h1>
        <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Discover the best Honda cars for your lifestyle.
        </p>
        <a href="#catalog">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            Browse Our Catalog
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
