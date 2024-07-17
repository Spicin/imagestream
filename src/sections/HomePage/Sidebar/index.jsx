import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Image from "next/image";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className={`relative pt-3 pr-2 flex flex-col bg-[white] shadow-2xl ${
        sidebarOpen
          ? "w-[20vw] pl-3 transition-all duration-500"
          : "w-[10vw] pl-1 transition-all duration-500"
      }`}
      style={{ height: "100vh" }}
    >
      <Image
        src={sidebarOpen ? `/imagestream_logo.png` : `/logo_icon.png`}
        alt="logo"
        width={"50"}
        height={"40"}
        className={sidebarOpen ? `w-[120px] h-[60px] ` : `w-[90px] h-[60px]`}
      />
      <div
        onClick={handleSidebarClick}
        className={
          "absolute top-2 right-2 cursor-pointer bg-white rounded-full border border-black"
        }
      >
        {sidebarOpen ? (
          <KeyboardDoubleArrowLeftIcon
            style={{ transform: "translateY(-1px)" }}
          />
        ) : (
          <KeyboardDoubleArrowRightIcon
            style={{ transform: "translateY(-1px)" }}
          />
        )}
      </div>
      <div
        className={
          "min-w-full border border-grey min-h-[1px] mt-1 mb-1 border-b-0"
        }
      >
        {" "}
      </div>
    </div>
  );
};

export default Sidebar;
