"use client";
import React, { useState } from "react";
import Link from "next/link";
import VenderEquiry from "./VenderEquiry";
import Logo from "./Logo";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRegisterClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="px-10">
      <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700" />

      <div className="py-5 flex md:block flex-col justify-center items-center">
        <Logo />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Company Section */}
          <div>
            <h1 className="font-bold text-xl">Company</h1>
            <ul className="py-4 space-y-2 font-thin cursor-pointer">
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li>
                {" "}
                <Link href={"/terms-and-conditions"}>Terms & conditions</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Privacy policy</Link>
              </li>

              <li>
                <Link href={"/career"}>Careers </Link>
              </li>
            </ul>
          </div>

          {/* For Customers Section */}
          <div>
            <h1 className="font-bold text-xl">For Customers</h1>
            <ul className="py-4 space-y-2 font-thin cursor-pointer">
              <li>
                <Link href={"/review"}>SW reviews </Link>
              </li>
              <li>Categories near you </li>
              <li>
                {" "}
                <Link href={"/blog"}>Blog </Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact us</Link>
              </li>
            </ul>
          </div>

          {/* For Partners Section */}
          <div>
            <h1 className="font-bold text-xl">For Partners</h1>
            <ul className="py-4 space-y-2 font-thin cursor-pointer">
              <li onClick={handleRegisterClick}>Register as a professional</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h1 className="font-bold text-xl">Social Links</h1>
            <ul className="flex justify-center md:justify-start gap-5 py-5 font-thin cursor-pointer">
              <li>
                <a
                  href="https://www.facebook.com/servicewalah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/servicewalah/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer text-pink-600 hover:text-pink-800"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/servicewalah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer text-blue-700 hover:text-blue-900"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com/company/servicewalah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer text-blue-400 hover:text-blue-600"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
        <p className="text-sm font-mono text-center">
          © Copyright 2025 Service Walah. All rights reserved.
        </p>
        <VenderEquiry isOpen={isOpen} onClose={onClose} />
      </div>
    </section>
  );
};

export default Footer;
