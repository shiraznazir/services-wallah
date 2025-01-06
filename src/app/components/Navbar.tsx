"use client";

import React, { useState } from "react";
import ModeToggle from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import BookACall from "./BookACall";
import Logo from "./Logo";

const DropdownList = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/service">Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/about">About Us</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact">Contact Us</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MenubarDemo = () => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="hidden md:flex gap-10 p-2">
          <Link href="/" className="font-bold">
            Home
          </Link>
          <Link href="/service" className="font-bold">
            Services
          </Link>
          <Link href="/about" className="font-bold">
            About Us
          </Link>
          <Link href="/contact" className="font-bold">
            Contact Us
          </Link>
          <div onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer font-bold">
            Enquiry
          </div>
          <BookACall isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

const Navbar = () => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 dark:text-white h-20 w-full fixed px-5 md:px-10 flex justify-between items-center shadow z-50`}
    >
      {/* Logo Section */}
      <Logo />
      {/* <Link href={"/"}>
      <div className={`dark:bg-white dark:text-black rounded-lg p-2`}>
        <Image
          className="animate-slideIn"
          width={100}
          height={100}
          src={"/images/logo.png"}
          alt="Company Logo"
          priority
        />
      </div></Link> */}

      {/* Desktop Menu */}
      <MenubarDemo />

      {/* Mobile Menu and Additional Controls */}
      <div className="flex items-center gap-5">
        <DropdownList />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
