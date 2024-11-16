"use client";
import React, { useState } from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Modal, Button, Typography, Row, Col } from "antd";

interface Car {
  name: string;
  otr: string; // Harga OTR
  dp: string; // Harga Down Payment
  image: string;
  description: string;
  specs: string;
  detailImages: string[]; // Array untuk beberapa gambar mobil
}

const { Title, Text } = Typography;

const Catalog: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCar, setCurrentCar] = useState<Car | null>(null);

  const cars: Car[] = [
    {
      name: "Honda Civic",
      otr: "Rp 320.000.000",
      dp: "Rp 45.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda Civic adalah sedan kompak dengan efisiensi bahan bakar yang sangat baik dan fitur keselamatan canggih.",
      specs: "Mesin: 2.0L, Daya: 158 hp, Transmisi: CVT",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
    {
      name: "Honda Accord",
      otr: "Rp 450.000.000",
      dp: "Rp 60.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda Accord adalah sedan ukuran sedang yang dikenal dengan performa, interior luas, dan fitur modern.",
      specs: "Mesin: 1.5L Turbo, Daya: 192 hp, Transmisi: CVT",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
    {
      name: "Honda CR-V",
      otr: "Rp 550.000.000",
      dp: "Rp 70.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda CR-V adalah SUV kompak dengan ruang kargo yang luas dan sistem bantuan pengemudi canggih.",
      specs: "Mesin: 1.5L Turbo, Daya: 190 hp, Transmisi: CVT",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
    {
      name: "Honda HR-V",
      otr: "Rp 350.000.000",
      dp: "Rp 50.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda HR-V adalah crossover kompak yang menawarkan kenyamanan dan efisiensi bahan bakar yang luar biasa.",
      specs: "Mesin: 1.8L, Daya: 141 hp, Transmisi: CVT",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
    {
      name: "Honda Brio",
      otr: "Rp 200.000.000",
      dp: "Rp 30.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda Brio adalah mobil subkompak yang sangat efisien bahan bakar, ideal untuk penggunaan sehari-hari di perkotaan.",
      specs: "Mesin: 1.2L, Daya: 90 hp, Transmisi: CVT",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
    {
      name: "Honda Mobilio",
      otr: "Rp 250.000.000",
      dp: "Rp 35.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda Mobilio adalah MPV yang menawarkan ruang kabin luas dan efisiensi bahan bakar yang sangat baik.",
      specs: "Mesin: 1.5L, Daya: 118 hp, Transmisi: CVT",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
    {
      name: "Honda Pilot",
      otr: "Rp 700.000.000",
      dp: "Rp 100.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda Pilot adalah SUV tiga baris yang menawarkan ruang luas untuk penumpang dan bagasi.",
      specs: "Mesin: 3.5L V6, Daya: 280 hp, Transmisi: 9-speed Otomatis",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
    {
      name: "Honda Odyssey",
      otr: "Rp 650.000.000",
      dp: "Rp 90.000.000",
      image:
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      description:
        "Honda Odyssey adalah MPV premium dengan interior luas dan fitur-fitur canggih.",
      specs: "Mesin: 3.5L V6, Daya: 280 hp, Transmisi: 9-speed Otomatis",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
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
                <Text strong className="text-red-600 text-md">
                  {`OTR ${car.otr}`}
                </Text>
                <div className="mt-2 text-gray-500">
                  <Text className="text-sm">{`DP mulai dari ${car.dp}`}</Text>
                </div>
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
                        `https://wa.me/?text=Saya tertarik dengan ${car.name}`
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
                  `https://wa.me/?text=Saya tertarik dengan ${currentCar.name}`
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
