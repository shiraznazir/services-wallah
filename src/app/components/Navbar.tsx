"use client";

import React, { useState } from "react";
import ToggleMode from "./Toggle-Mode";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 dark:text-white h-20 w-full fixed px-5 md:px-10 flex justify-between items-center shadow z-50`}
    >
      {/* Logo Section */}
      <Logo />

      {/* toogle mode */}
      <ToggleMode />
    </div>
  );
};

export default Navbar;