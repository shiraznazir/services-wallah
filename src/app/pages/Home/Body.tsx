"use client";

import React from "react";
import img1 from "@/assets/a1.jpeg";
import img2 from "@/assets/a2.jpeg";
import img3 from "@/assets/a3.jpeg";
import img4 from "@/assets/a4.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Body = () => {
  return (
    <div className="h-screen px-4 grid grid-cols-2 gap-8 pt-10">
      {/* Left Section */}
      <div className="h-screen flex justify-left items-center">
        <div className="flex flex-col font-bold text-2xl text-left">
          <span className="font-extrabold text-6xl block">
            Stay cool,
            <br />
            Stay comfortable
          </span>
          <span className="mt-8 text-3xl">Professional air conditioning </span>
          <span className="text-2xl">services at your doorstep</span>
          <Link href={"tel:+919837305499"}>
            <Button className="my-6 w-2/5  font-bold" variant="outline">
              Book A Call
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-h-screen grid grid-rows-6 grid-cols-6 gap-3">
        <div className="row-span-5 col-span-3">
          <Image
            className="w-full h-full object-cover rounded-l-xl"
            src={img1}
            alt="Image 1"
          />
        </div>
        <div className="row-span-3 col-span-3">
          <Image
            className="w-full h-full object-cover rounded-tr-xl"
            src={img2}
            alt="Image 2"
          />
        </div>
        <div className="row-span-2 col-span-3">
          <Image
            className="w-full h-full object-cover rounded-br-xl"
            src={img4}
            alt="Image 3"
          />
        </div>
        {/* <div className="row-span-4 col-span-3">
          <Image
            className="w-full h-full object-cover rounded-br-xl"
            src={img4}
            alt="Image 4"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Body;
