"use client";
import { Card, Col, Row, Button, Modal } from "antd";
import { CarOutlined, WhatsAppOutlined } from "@ant-design/icons";
import React, { useState } from "react";

interface Car {
  name: string;
  otr: string; // OTR price
  dp: string; // Down payment price
  image: string;
  description: string;
  specs: string;
  detailImages: string[]; // Array for multiple images of the car
}

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
        "Honda Odyssey adalah minivan ramah keluarga dengan kenyamanan luar biasa dan kursi yang dapat disesuaikan.",
      specs: "Mesin: 3.5L V6, Daya: 280 hp, Transmisi: 9-speed Otomatis",
      detailImages: [
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
        "https://cdn.motor1.com/images/mgl/vxZ1mG/s3/2025-honda-civic-rs-jdm.jpg",
      ],
    },
  ];

  const showModal = (car: Car) => {
    setCurrentCar(car);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Katalog Kami</h2>
        <Row gutter={[16, 16]} className="mt-8">
          {cars.map((car, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      alt={car.name}
                      src={car.image}
                      className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 rounded-lg"></div>
                  </div>
                }
                className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg"
                bodyStyle={{ padding: "16px" }}
              >
                <div className="text-xl font-semibold text-gray-900 hover:text-gray-800 transition-colors duration-200">
                  {car.name}
                </div>
                <div className="text-lg text-gray-600 mt-2">OTR: {car.otr}</div>
                <div className="text-lg text-gray-600 mt-1">
                  DP mulai dari: {car.dp}
                </div>

                <div className="mt-4 space-y-3">
                  <Button
                    key="info"
                    type="primary"
                    icon={<CarOutlined />}
                    onClick={() => showModal(car)}
                    className="w-full py-3 text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
                  >
                    Detail
                  </Button>

                  <Button
                    key="whatsapp"
                    type="default"
                    icon={<WhatsAppOutlined />}
                    className="w-full py-3 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 rounded-md transition-all duration-300 transform hover:scale-105"
                    href={`https://wa.me/yourwhatsappphone?text=Saya%20tertarik%20dengan%20${car.name}`}
                    target="_blank"
                  >
                    WhatsApp
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for displaying car details */}
        {currentCar && (
          <Modal
            title={currentCar.name}
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={800}
            className="overflow-auto" // Tambahkan kelas untuk scroll jika konten melebihi ukuran modal
          >
            <div className="text-lg font-semibold">{currentCar.name}</div>
            <div className="text-md text-gray-600">OTR: {currentCar.otr}</div>
            <div className="text-md text-gray-600">
              DP mulai dari: {currentCar.dp}
            </div>
            <p className="mt-4 text-gray-700">{currentCar.description}</p>
            <p className="mt-2 text-gray-600">
              <strong>Spesifikasi:</strong> {currentCar.specs}
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-800">Gambar Detail</h4>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {currentCar.detailImages.map((image, index) => (
                  <div key={index} className="mb-4">
                    <img
                      src={image}
                      alt={`Detail ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Catalog;
