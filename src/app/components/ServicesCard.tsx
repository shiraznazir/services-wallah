"use client";

import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface ServicesCardProps {
  title: string;
  img: StaticImageData;
  onClick: ()=> void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, img, onClick }) => {
  return (
    <div onClick={onClick} className="border-2 cursor-pointer hover:border-gray-100  p-4 rounded-lg">
      <h1 className="py-3 font-bold text-lg">{title}</h1>
      <Image className="rounded-lg animate-zoomIn hover:animate-in" width={400} height={400} src={img} alt={title} />
    </div>
  );
};

export default ServicesCard;
