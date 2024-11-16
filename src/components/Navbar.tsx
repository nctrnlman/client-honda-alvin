"use client";

import {
  HomeOutlined,
  InfoCircleOutlined,
  CarOutlined,
  TagsOutlined,
  MenuOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Drawer } from "antd";
import { useState } from "react";
const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Function to toggle the visibility of the Drawer (for mobile)
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <Header className="bg-black shadow-lg py-4 fixed w-full z-50">
      <div className="flex justify-between items-center md:px-6 px-2">
        {/* Logo */}
        {/* <div className="text-2xl font-bold text-red-500">Honda</div> */}
        <div className="flex items-center">
          <img
            src="/honda-logo.png" // Pastikan gambar logo berada di folder public
            alt="Honda Logo"
            className="h-8" // Atur tinggi logo sesuai kebutuhan
          />
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8 text-white">
          <a
            href="#hero"
            className="hover:text-red-500 transition-all duration-300 text-lg font-medium flex items-center"
          >
            <HomeOutlined className="mr-2 text-2xl" />
            Beranda
          </a>
          <a
            href="#about"
            className="hover:text-red-500 transition-all duration-300 text-lg font-medium flex items-center"
          >
            <InfoCircleOutlined className="mr-2 text-2xl" />
            Tentang Kami
          </a>
          <a
            href="#catalog"
            className="hover:text-red-500 transition-all duration-300 text-lg font-medium flex items-center"
          >
            <CarOutlined className="mr-2 text-2xl" />
            Katalog
          </a>
          <a
            href="#promo"
            className="hover:text-red-500 transition-all duration-300 text-lg font-medium flex items-center"
          >
            <GiftOutlined className="mr-2 text-2xl" />
            Promo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="md:hidden text-white justify-end  text-xl"
          onClick={showDrawer}
        />
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={visible}
        width={250}
        className="bg-black text-white  "
      >
        <Menu mode="vertical" selectable={false} className="text-white">
          <Menu.Item onClick={closeDrawer}>
            <a href="#hero" className="text-white flex items-center">
              <HomeOutlined className="mr-2 text-xl" />
              Beranda
            </a>
          </Menu.Item>
          <Menu.Item onClick={closeDrawer}>
            <a href="#about" className="text-white flex items-center">
              <InfoCircleOutlined className="mr-2 text-xl" />
              Tentang Kami
            </a>
          </Menu.Item>
          <Menu.Item onClick={closeDrawer}>
            <a href="#catalog" className="text-white flex items-center">
              <CarOutlined className="mr-2 text-xl" />
              Katalog
            </a>
          </Menu.Item>
          <Menu.Item onClick={closeDrawer}>
            <a href="#promo" className="text-white flex items-center">
              <GiftOutlined className="mr-2 text-xl" />
              Promo
            </a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default Navbar;
