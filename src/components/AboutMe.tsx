"use client";
import { Avatar, Button, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const sectionHeight = aboutSection.offsetHeight;
      if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-red-500  to-red-700 text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <Row justify="center" gutter={[24, 24]}>
          {/* Left Section: Profile */}
          <Col
            xs={24}
            sm={12}
            md={8}
            className="flex justify-center items-center mb-8 sm:mb-0"
          >
            <div
              className={`flex flex-col items-center shadow-lg p-8 rounded-3xl bg-white text-black border-4 border-red-500 transition-transform transform hover:scale-105 ${
                isVisible ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <Avatar
                size={200}
                src="/profiles/alvin.jpeg"
                alt="profile"
                className="mb-6 border-4 border-red-500 shadow-md transform hover:rotate-6 transition-transform duration-300"
              />
              <h3 className="text-3xl font-bold mb-2">⁠Alvian deandra </h3>
              <p className="text-lg text-gray-700 mb-4 text-center italic">
                Sales consultan
              </p>
              <Button
                onClick={() => window.open("tel:082240478316", "_blank")}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110"
              >
                Hubungi Saya
              </Button>
            </div>
          </Col>

          {/* Right Section: Selling Point and Contact */}
          <Col xs={24} sm={12} md={14} className="flex items-center">
            <div
              className={`p-8 bg-white shadow-lg rounded-3xl border-4 border-red-500 w-full ${
                isVisible ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                Kenapa Harus Pilih Saya untuk Mobil Honda Anda?
              </h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-justify">
                Dengan <strong>pengalaman lebih dari 5 tahun</strong>, saya
                memiliki keahlian untuk membantu Anda menemukan mobil Honda yang
                paling cocok untuk kebutuhan harian Anda. Tidak hanya sekadar
                menjual, saya akan membantu Anda memahami keunggulan setiap
                model, sehingga Anda dapat memilih kendaraan yang sesuai dengan
                gaya hidup dan anggaran Anda. saya siap memberikan solusi
                terbaik.
              </p>

              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-justify">
                <strong>Percayakan kebutuhan mobil Anda kepada saya</strong>,
                karena saya tidak hanya menawarkan produk, tetapi juga panduan
                yang personal dan mendetail.
                <span className="text-red-600 font-bold px-1">
                  Hubungi saya sekarang
                </span>
                untuk mendapatkan <strong>penawaran spesial</strong>,
                <strong>diskon eksklusif</strong>, dan informasi yang tepat
                tentang mobil Honda idaman Anda. Bersama saya, proses membeli
                mobil Honda akan menjadi pengalaman yang mudah, cepat, dan
                memuaskan!
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-8">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<PhoneOutlined />}
                  onClick={() => window.open("tel:082240478316", "_blank")}
                >
                  Telepon
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<WhatsAppOutlined />}
                  onClick={() =>
                    window.open("https://wa.me/6282240478316", "_blank")
                  }
                >
                  WhatsApp
                </Button>
                <Button
                  className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<MailOutlined />}
                  onClick={() =>
                    (window.location.href = "mailto:alviandeandra920@gmail.com")
                  }
                >
                  Email
                </Button>
                <Button
                  className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<InstagramOutlined />}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/alvin_honda12/",
                      "_blank"
                    )
                  }
                >
                  Instagram
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutMe;
