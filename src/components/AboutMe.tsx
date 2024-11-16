"use client";
import { Avatar, Button, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const AboutMe = () => {
  // Scroll animation state
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
                src="https://media.licdn.com/dms/image/v2/D5603AQH0ONJySq15Cw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718307681187?e=2147483647&v=beta&t=RraRN1-_wzd0ORN1wh2o1sYinuC31lyFVVryvfKaSzk" // Replace with your image
                className="mb-6 border-4 border-red-500 shadow-md transform hover:rotate-6 transition-transform duration-300"
              />
              <h3 className="text-3xl font-bold mb-2">Rhazes Devino</h3>
              <p className="text-lg text-gray-700 mb-4 text-center italic">
                Konsultan Penjualan Honda | Membantu Anda menemukan mobil impian
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110">
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
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Dengan lebih dari <strong>5 tahun pengalaman</strong>, saya
                adalah ahli dalam membantu Anda menemukan mobil Honda impian
                Anda. Tidak perlu bingung atau repot! Saya siap memberikan
                solusi terbaik untuk kebutuhan dan anggaran Anda. Baik Anda
                mencari <strong>sedan yang stylish</strong>,{" "}
                <strong>SUV yang kokoh</strong>, atau
                <strong>mobil keluarga yang nyaman</strong>, saya jamin Anda
                mendapatkan mobil dengan kualitas terbaik dan harga yang
                kompetitif.
              </p>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                <strong>
                  Jangan buang waktu dengan penawaran biasa-biasa saja!
                </strong>{" "}
                Pilih layanan saya untuk pengalaman membeli mobil yang cepat,
                mudah, dan memuaskan. Mobil Honda Anda hanya selangkah lagi –{" "}
                <span className="text-red-600 font-bold">
                  hubungi saya sekarang
                </span>
                , dan nikmati <strong>penawaran spesial</strong> serta
                <strong>diskon eksklusif</strong> untuk Anda hari ini!
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-8">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<PhoneOutlined />}
                >
                  Telepon
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<WhatsAppOutlined />}
                >
                  WhatsApp
                </Button>
                <Button
                  className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<MailOutlined />}
                >
                  Email
                </Button>
                <Button
                  className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110"
                  icon={<InstagramOutlined />}
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
