"use client";

import {
  HomeOutlined,
  InfoCircleOutlined,
  CarOutlined,
  TagsOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import { useState } from "react";
import Link from "next/link";
const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Function to toggle the visibility of the Drawer (for mobile)
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <Header className="bg-gray-200  shadow-lg py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">Honda </div>

        {/* Desktop Navbar */}
      </div>
    </Header>
  );
};

export default Navbar;
