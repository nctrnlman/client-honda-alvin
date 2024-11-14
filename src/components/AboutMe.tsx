import { Avatar, Button, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const AboutMe = () => {
  return (
    <section id="about" className="py-40 bg-white text-center min-h-screen">
      <div className="container mx-auto px-6">
        <Row justify="center" gutter={[16, 16]}>
          {/* Sisi Kiri: Profil */}
          <Col
            xs={24}
            sm={12}
            md={8}
            className="flex justify-center mb-8 sm:mb-0"
          >
            <div className="flex flex-col items-center shadow-lg p-6 rounded-lg bg-white border-2 border-gray-200 transition-transform transform hover:scale-105">
              <Avatar
                size={200}
                src="https://www.w3schools.com/w3images/avatar2.png" // Ganti dengan gambar yang sesuai
                className="mb-4 border-4 border-gray-100 transition-transform transform hover:rotate-12"
              />
              <h3 className="text-3xl font-semibold text-black mb-2 transition-all duration-300">
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
            <div className="p-6 bg-white shadow-lg rounded-lg w-full border-2 border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                Dengan pengalaman lebih dari 5 tahun di industri otomotif, saya
                berusaha memberikan pengalaman membeli mobil yang lancar bagi
                klien saya. Tujuan saya adalah membantu Anda menemukan Honda
                yang sempurna sesuai kebutuhan, preferensi, dan anggaran Anda.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Apakah Anda mencari sedan bergaya, SUV yang andal, atau sesuatu
                di antaranya, saya di sini untuk memandu Anda melalui setiap
                langkah prosesnya. Mari kita wujudkan impian Anda untuk
                mengendarai mobil Honda yang sempurna!
              </p>

              {/* Ikon Kontak dan Media Sosial (dalam satu baris) */}
              <div className="flex space-x-6 justify-center mt-6">
                {/* Tombol Aksi (Call, Email, WhatsApp) */}
                <Button
                  icon={<PhoneOutlined />}
                  size="large"
                  className="bg-red-600 text-white hover:bg-red-700 w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />
                <Button
                  icon={<MailOutlined />}
                  size="large"
                  className="bg-gray-500 text-white hover:bg-gray-600 w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />
                <Button
                  icon={<WhatsAppOutlined />}
                  size="large"
                  className="bg-green-600 text-white hover:bg-green-700 w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />

                {/* Ikon Media Sosial dengan Tombol */}
                <Button
                  icon={<InstagramOutlined />}
                  size="large"
                  className="bg-pink-500 text-white hover:bg-pink-600 w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                />
                <Button
                  icon={<TwitterOutlined />}
                  size="large"
                  className="bg-blue-500 text-white hover:bg-blue-600 w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
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
