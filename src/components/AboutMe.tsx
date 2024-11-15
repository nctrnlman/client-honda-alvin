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
  // Manage scroll animations for elements coming into view
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
      className="py-24 bg-gradient-to-r from-white to-gray-100 text-center min-h-screen"
    >
      <div className="container mx-auto px-6">
        <Row justify="center" gutter={[16, 16]}>
          {/* Sisi Kiri: Profil */}
          <Col
            xs={24}
            sm={12}
            md={8}
            className="flex justify-center mb-8 sm:mb-0"
          >
            <div
              className={`flex flex-col items-center shadow-md p-6 rounded-2xl bg-white border-2 border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl ${
                isVisible ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <Avatar
                size={200}
                src="https://www.w3schools.com/w3images/avatar2.png" // Replace with your image
                className="mb-4 border-4 border-gray-100 transition-transform transform hover:rotate-6"
              />
              <h3 className="text-2xl font-semibold text-black mb-2">
                John Doe
              </h3>
              <p className="text-gray-700 text-sm mb-4 italic">
                Konsultan Penjualan Honda | Passionate tentang membantu Anda
                menemukan mobil yang sempurna
              </p>
            </div>
          </Col>

          {/* Sisi Kanan: Informasi Kontak */}
          <Col
            xs={24}
            sm={12}
            md={14}
            className="flex justify-center text-justify"
          >
            <div
              className={`p-8 bg-white shadow-md rounded-2xl w-full border-2 border-gray-200 ${
                isVisible ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <p className="text-lg text-gray-800 mb-6">
                Dengan pengalaman lebih dari 5 tahun di industri otomotif, saya
                berusaha memberikan pengalaman membeli mobil yang lancar bagi
                klien saya. Tujuan saya adalah membantu Anda menemukan Honda
                yang sempurna sesuai kebutuhan, preferensi, dan anggaran Anda.
              </p>

              <p className="text-lg text-gray-800 mb-6">
                Apakah Anda mencari sedan bergaya, SUV yang andal, atau sesuatu
                di antaranya, saya di sini untuk memandu Anda melalui setiap
                langkah prosesnya. Mari kita wujudkan impian Anda untuk
                mengendarai mobil Honda yang sempurna!
              </p>

              {/* Ikon Kontak dan Media Sosial (dalam satu baris) */}
              <div className="flex space-x-6 justify-center mt-8">
                {/* Tombol Aksi (Call, Email, WhatsApp) */}
                <Button
                  icon={<PhoneOutlined />}
                  size="large"
                  className="bg-red-600 text-white hover:bg-red-700 w-14 h-14 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />
                <Button
                  icon={<MailOutlined />}
                  size="large"
                  className="bg-gray-600 text-white hover:bg-gray-700 w-14 h-14 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />
                <Button
                  icon={<WhatsAppOutlined />}
                  size="large"
                  className="bg-green-600 text-white hover:bg-green-700 w-14 h-14 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />

                {/* Ikon Media Sosial */}
                <Button
                  icon={<InstagramOutlined />}
                  size="large"
                  className="bg-pink-500 text-white hover:bg-pink-600 w-14 h-14 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />
                <Button
                  icon={<TwitterOutlined />}
                  size="large"
                  className="bg-blue-500 text-white hover:bg-blue-600 w-14 h-14 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutMe;
