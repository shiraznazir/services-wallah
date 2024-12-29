"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface CustomCardProps {
  title: string;
  description: string;
  img?: string | StaticImageData;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, img }) => {
  return (
    <Card className="shadow-md cursor-pointer transition-transform hover:scale-105">
      <CardHeader className="text-center">
        <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold animate-fadeIn">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {img && (
          <div>
            <Image
              src={img}
              alt={title || "Card image"}
              width={350}
              height={200}
              className="rounded-t-lg animate-zoomIn object-cover w-full"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="text-center">
        <CardDescription className="text-sm sm:text-base md:text-lg lg:text-xl animate-fadeIn">
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
