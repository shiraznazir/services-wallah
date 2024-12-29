"use client";

import React from "react";
import logo from "@/assets/logo.png";
import { ModeToggle } from "./ModeToggle";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { useTheme } from "next-themes";

const MenubarDemo = () => {
  return (
    <Menubar className="flex gap-10 p-2">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Homes</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Services</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-bold">About Us</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Contact Us</MenubarTrigger>
      </MenubarMenu>
      {/* <MenubarMenu>
        <MenubarTrigger>
          {" "}
          <ModeToggle />
        </MenubarTrigger>
      </MenubarMenu> */}
    </Menubar>
  );
};

const Navbar = () => {
  const theme = useTheme();

  return (
    <div className="h-16 p-4 flex justify-between">
      <div
        className={`${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white px-2 pt-2 pb-10 rounded-lg text-black"
        }`}
      >
        <Image
          className="animate-slideIn"
          width={100}
          height={100}
          src={logo}
          alt="logo"
        />
      </div>
      <MenubarDemo />
      <h1>
        <ModeToggle />
      </h1>
    </div>
  );
};

export default Navbar;
