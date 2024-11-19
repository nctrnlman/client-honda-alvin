"use client";
import React, { useState } from "react";
import { DownloadOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Modal, Button, Typography, Row, Col } from "antd";

interface Car {
  name: string;
  otr: string;
  dp: string;
  image: string;
  description: string;
  specs: string;
  detailImages: string[];
}

const { Title, Text } = Typography;

const Catalog: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCar, setCurrentCar] = useState<Car | null>(null);

  const cars: Car[] = [
    {
      name: "Honda Civic",
      otr: "6 Juta",
      dp: "61 Juta",
      image: "/cars/civic/primary.jpeg",
      description:
        "Honda Civic adalah sedan kompak dengan efisiensi bahan bakar yang sangat baik dan fitur keselamatan canggih.",
      specs: "Mesin: 2.0L, Daya: 158 hp, Transmisi: CVT",
      detailImages: [
        "/cars/civic/1.jpeg",
        "/cars/civic/2.jpeg",
        "/cars/civic/3.jpeg",
        "/cars/civic/4.jpeg",
      ],
    },
    {
      name: "Honda Accord",
      otr: "6.8 Juta",
      dp: "95 Juta",
      image: "/cars/accord/primary.jpeg",
      description:
        "Honda Accord adalah sedan ukuran sedang yang dikenal dengan performa, interior luas, dan fitur modern.",
      specs: "Mesin: 1.5L Turbo, Daya: 192 hp, Transmisi: CVT",
      detailImages: [
        "/cars/accord/1.jpeg",
        "/cars/accord/2.jpeg",
        "/cars/accord/3.jpeg",
        "/cars/accord/4.jpeg",
      ],
    },
    {
      name: "Honda BR-V",
      otr: "4.8 Juta",
      dp: "25 Juta",
      image: "/cars/brv/primary.jpeg",
      description:
        "SUV crossover yang dirancang untuk petualangan keluarga. Dengan kapasitas 7 penumpang dan fitur keselamatan canggih, BR-V menawarkan kenyamanan dan keamanan untuk perjalanan jauh maupun aktivitas harian",
      specs: "Mesin: 1.5L Turbo, Daya: 190 hp, Transmisi: CVT",
      detailImages: [
        "/cars/brv/1.jpeg",
        "/cars/brv/2.jpeg",
        "/cars/brv/3.jpeg",
        "/cars/brv/4.jpeg",
      ],
    },
    {
      name: "Honda WR-V",
      otr: "4.8 Juta",
      dp: "33 Juta",
      image: "/cars/wrv/primary.jpeg",
      description:
        "SUV kompak yang dirancang untuk gaya hidup dinamis dan mobilitas perkotaan. Dengan desain sporty dan efisiensi bahan bakar yang baik, WR-V memberikan pengalaman berkendara yang nyaman dan serbaguna.",
      specs: "Mesin: 1.5L Turbo, Daya: 190 hp, Transmisi: CVT",
      detailImages: [
        "/cars/wrv/1.jpeg",
        "/cars/wrv/2.jpeg",
        "/cars/wrv/3.jpeg",
        "/cars/wrv/6.jpeg",
      ],
    },
    {
      name: "Honda HR-V",
      otr: "6.6 Jutaan",
      dp: "36 Juta",
      image: "/cars/hrv/primary.jpg",
      description:
        "Honda HR-V adalah crossover kompak yang menawarkan kenyamanan dan efisiensi bahan bakar yang luar biasa.",
      specs: "Mesin: 1.8L, Daya: 141 hp, Transmisi: CVT",
      detailImages: ["/cars/hrv/1.png", "/cars/hrv/2.jpg"],
    },
    {
      name: "Honda Brio",
      otr: "3.4 Jutaan",
      dp: "21 Juta",
      image: "/cars/brio/primary.jpeg",
      description:
        "Honda Brio adalah mobil subkompak yang sangat efisien bahan bakar, ideal untuk penggunaan sehari-hari di perkotaan.",
      specs: "Mesin: 1.2L, Daya: 90 hp, Transmisi: CVT",
      detailImages: [
        "/cars/brio/1.jpeg",
        "/cars/brio/2.jpeg",
        "/cars/brio/3.jpeg",
        "/cars/brio/4.jpeg",
      ],
    },
    {
      name: "Honda City",
      otr: "6.8 Juta",
      dp: "28 Juta",
      image: "/cars/city/primary.jpeg",
      description:
        "Honda City adalah sedan kompak yang menawarkan kombinasi sempurna antara performa, kenyamanan, dan efisiensi. Dengan desain elegan dan fitur modern, Honda City cocok untuk pengemudi perkotaan maupun perjalanan jarak jauh.",
      specs: "Mesin: 1.5L, Daya: 118 hp, Transmisi: CVT",
      detailImages: [
        "/cars/city/1.jpeg",
        "/cars/city/2.jpeg",
        "/cars/city/3.jpeg",
      ],
    },
  ];

  const showModal = (car: Car) => {
    if (!isModalVisible) {
      setCurrentCar(car);
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="overflow-hidden md:px-8 py-6" id="catalog">
      {/* Judul dan Subjudul */}
      <div className="text-center mb-10 my-8 px-4 sm:px-6 md:px-8">
        <Title
          level={2}
          className="text-[#2c3e50] text-lg sm:text-2xl md:text-4xl lg:text-5xl"
        >
          Temukan Mobil Impian Anda Sekarang!
        </Title>
        <Text className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#7f8c8d]">
          Dapatkan Penawaran Terbaik dengan Harga OTR Terjangkau dan DP Ringan.
          Pilih Mobil Anda dan Hubungi Kami untuk Info Lebih Lanjut!
        </Text>
      </div>

      {/* Katalog Mobil */}
      <Row gutter={[16, 16]} justify="center" className="bg-[#fafafa] p-5">
        {cars.map((car, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <div
              className="relative rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out mb-5 cursor-pointer"
              onClick={() => showModal(car)}
            >
              <img
                alt={car.name}
                src={car.image}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center bg-white rounded-b-lg">
                <Title level={4} className="text-lg mb-2">
                  {car.name}
                </Title>
                <div className="mt-2 text-gray-500">
                  <Text className="text-sm">{`DP mulai dari ${car.dp}`}</Text>
                </div>
                <Text strong className="text-red-600 text-md">
                  {`Angsuran ${car.otr}`}
                </Text>
                <div className="mt-4 flex flex-col md:flex-row gap-2 justify-center">
                  <Button
                    type="default"
                    size="small"
                    className="rounded-md "
                    onClick={(e) => {
                      e.stopPropagation();
                      showModal(car);
                    }}
                  >
                    Detail
                  </Button>
                  <Button
                    type="primary"
                    icon={<WhatsAppOutlined />}
                    size="small"
                    className="bg-[#25D366] text-white rounded-md"
                    onClick={() =>
                      window.open(
                        `https://wa.me/6282240478316?text=Saya tertarik dengan ${car.name}`,
                        "_blank"
                      )
                    }
                  >
                    Hubungi via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="text-center px-4 sm:px-6 md:px-8 mt-8">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          className="bg-red-500 text-white rounded-md hover:bg-red-800"
          onClick={(e) => {
            e.stopPropagation();
            window.open(`/catalog.pdf`);
          }}
        >
          Dapatkan Daftar Harga Lengkap Sekarang!
        </Button>
        <p className="mt-4  text-gray-600">
          Klik tombol di atas untuk mengunduh dan mulai wujudkan mobil impian
          Anda hari ini!
        </p>
      </div>

      {/* Modal Detail Mobil */}
      {currentCar && (
        <Modal
          title={<Title level={3}>{currentCar.name}</Title>}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel} className="rounded-md">
              Tutup
            </Button>,
            <Button
              key="whatsapp"
              type="primary"
              icon={<WhatsAppOutlined />}
              className="bg-[#25D366] text-white rounded-md"
              onClick={() =>
                window.open(
                  `https://wa.me/6282240478316?text=Saya tertarik dengan ${currentCar.name}`,
                  "_blank"
                )
              }
            >
              WhatsApp
            </Button>,
          ]}
          width="80%"
          className="rounded-lg"
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <img
                src={currentCar.image}
                alt={currentCar.name}
                className="w-full rounded-lg shadow-lg"
              />
            </Col>
            <Col xs={24} sm={12}>
              <div className="space-y-6">
                {/* Deskripsi Mobil */}
                <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                  {currentCar.description}
                </p>
                {/* Harga OTR */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-red-600 mt-6 transition-transform transform hover:scale-105">
                  {/* OTR Harga */}
                  <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-red-600">
                    <strong>OTR:</strong> {currentCar.otr}
                  </p>
                </div>

                {/* Harga DP */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-red-600 mt-6 transition-transform transform hover:scale-105">
                  <p className="font-semibold text-2xl sm:text-3xl text-red-600">
                    <strong>DP:</strong> {currentCar.dp}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mt-3">
                    Dapatkan mobil impian Anda hanya dengan{" "}
                    <strong>DP terjangkau</strong>! Segera hubungi kami untuk
                    lebih lanjut.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <div className="mt-6">
            <Title level={4}>Gambar Detail</Title>
            <Row gutter={[16, 16]}>
              {currentCar.detailImages.map((img, index) => (
                <Col key={index} xs={24} sm={8}>
                  <img
                    src={img}
                    alt={`Detail ${index}`}
                    className="w-full rounded-lg shadow-md"
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Catalog;
