"use client";
import React, { useState } from "react";
import Link from "next/link";
import VenderEquiry from "./VenderEquiry";
import Logo from "./Logo";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRegisterClick = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return (
    <footer className="px-10">
      <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700" />

      <div className="py-5 flex flex-col md:block justify-center items-center">
        <Logo />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left mt-8">
          {/* Company Section */}
          <div>
            <h1 className="font-bold text-xl">Company</h1>
            <ul className="py-4 space-y-2 font-thin">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/career">Careers</Link>
              </li>
            </ul>
          </div>

          {/* For Customers Section */}
          <div>
            <h1 className="font-bold text-xl">For Customers</h1>
            <ul className="py-4 space-y-2 font-thin">
              <li>
                <Link href="/review">SW Reviews</Link>
              </li>
              <li>Categories Near You</li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* For Partners Section */}
          <div>
            <h1 className="font-bold text-xl">For Partners</h1>
            <ul className="py-4 space-y-2 font-thin">
              <li
                onClick={handleRegisterClick}
                className="cursor-pointer hover:text-blue-600"
              >
                Register as a Professional
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h1 className="font-bold text-xl">Social Links</h1>
            <ul className="flex justify-center md:justify-start gap-5 py-5">
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/servicewalah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {/* SVG for Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </li>
              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/servicewalah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  {/* SVG for Instagram */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/company/service-walah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  {/* SVG for LinkedIn */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>
              {/* YouTube */}
              <li>
                <a
                  href="https://www.youtube.com/@ServiceWalah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800"
                >
                  {/* SVG for YouTube */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M21.8 8.001a2.746 2.746 0 00-1.938-1.949C18.14 6 12 6 12 6s-6.14 0-7.862.052A2.746 2.746 0 002.2 8.001a29.27 29.27 0 00-.052 7.997c.199.876.89 1.567 1.767 1.766C5.86 18 12 18 12 18s6.14 0 7.862-.052a2.746 2.746 0 001.938-1.949c.197-.878.3-2.633.3-3.996s-.103-3.118-.3-3.996zM9.75 15.207v-6.414L15 12l-5.25 3.207z" />
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
    </footer>
  );
};

export default Footer;
