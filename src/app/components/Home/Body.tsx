"use client";

import React, { useEffect } from "react";
import img1 from "@/assets/a1.jpeg";
import img2 from "@/assets/a2.jpeg";
import img4 from "@/assets/a4.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Body = () => {
  const { setTheme } = useTheme()

  useEffect(()=>{
    setTheme("system");
  },[])

  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col font-bold text-xl text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-extrabold text-4xl md:text-6xl block">
              Stay cool,
              <br />
              Stay comfortable
            </span>
            <div className="mt-8">
              <span className="text-lg md:text-3xl">
                Professional air conditioning
              </span>
              <br />
              <span className="text-base md:text-2xl">
                services at your doorstep
              </span>
            </div>
          </motion.h1>
          <Link href={"tel:+919837305499"}>
            <Button
              className="animate-slideIn my-6 w-3/4 md:w-2/5 font-bold mx-auto md:mx-0"
              variant="outline"
            >
              Book A Call
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-rows-6 grid-cols-6 gap-3 max-h-screen pt-10">
        <div className="animate-zoomIn row-span-5 col-span-3">
          <Image
            className="w-full h-full object-cover rounded-l-xl"
            src={img1}
            alt="Image 1"
          />
        </div>
        <div className="animate-slideIn row-span-3 col-span-3">
          <Image
            className="w-full h-full object-cover rounded-tr-xl"
            src={img2}
            alt="Image 2"
          />
        </div>
        <div className="animate-zoomIn row-span-2 col-span-3">
          <Image
            className="w-full h-full object-cover rounded-br-xl"
            src={img4}
            alt="Image 3"
          />
        </div>
      </div>

      {/* Mobile Images Section */}
      <div className="grid md:hidden grid-cols-2 gap-4">
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={img1}
          alt="Image 1"
        />
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={img2}
          alt="Image 2"
        />
        <Image
          className="w-full h-full object-cover rounded-xl col-span-2"
          src={img4}
          alt="Image 3"
        />
      </div>
    </div>
  );
};

export default Body;
