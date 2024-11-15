import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-100 text-black py-8 px-4">
      <div className="container mx-auto">
        {/* Grid Layout untuk Informasi */}
        <Row gutter={[16, 32]}>
          {/* Info Pemesanan */}
          <Col xs={24} sm={12} md={6}>
            <h3 className="text-xl font-semibold">Info Pemesanan</h3>
            <p className="mt-2 text-sm">
              Silakan menghubungi kami untuk pemesanan atau pembelian mobil
              Honda Anda. Kami akan segera menghubungi Anda.
            </p>
          </Col>

          {/* Alamat Perusahaan */}
          <Col xs={24} sm={12} md={6}>
            <h4 className="text-lg font-semibold">Honda Bandung</h4>
            <p className="mt-2 text-sm">
              Jl. Bandung No. 12, Bandung, Jawa Barat
            </p>
          </Col>

          {/* Kontak */}
          <Col xs={24} sm={12} md={6}>
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <p className="mt-2 text-sm">
              No. Telp/Whatsapp:{" "}
              <a href="tel:+6285365050508" className="text-blue-400">
                081221431716
              </a>
            </p>
            <p className="mt-2 text-sm">
              Email:{" "}
              <a href="mailto:rhazesd@gmail.com" className="text-blue-400">
                rhazesd@gmail.com
              </a>
            </p>
          </Col>

          {/* Media Sosial */}
          <Col
            xs={24}
            sm={12}
            md={6}
            className="flex justify-center flex-wrap gap-6 mt-8 md:mt-0"
          >
            <a
              href="https://wa.me/085365050508"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-green-500 transition-colors duration-300"
            >
              <WhatsAppOutlined />
            </a>
            <a
              href="https://www.facebook.com/hondaindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-600 transition-colors duration-300"
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://www.instagram.com/honda_id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-500 transition-colors duration-300"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://twitter.com/HondaID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition-colors duration-300"
            >
              <TwitterOutlined />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <h2 className="text-sm">
            &copy; 2024 Honda Indonesia. All Rights Reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
