"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js routing
import ServicesCard from "@/app/components/ServicesCard";
import img1 from "@/assets/s1.png";
import img2 from "@/assets/s2.png";
import img3 from "@/assets/s3.png";
import img4 from "@/assets/s4.png";
import { StaticImageData } from "next/image";

interface Service {
  title: string;
  img: StaticImageData;
}

const services: Service[] = [
  { title: "Installation", img: img1 },
  { title: "Maintenance", img: img2 },
  { title: "Repair", img: img3 },
  { title: "Consultation", img: img4 },
  { title: "AMC", img: img4 },
];

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Dragging Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Scroll Button Handlers
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Navigate and Scroll to Section
  const handleNavigation = (title: string) => {
    router.push("/service"); // Navigate to the service page
    setTimeout(() => {
      const destinationDiv = document.getElementById(title);
      if (destinationDiv) {
        destinationDiv.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="my-20 text-center relative">
      {/* Heading */}
      <h1 className="py-8 text-5xl font-bold animate-slideIn">Our Services</h1>

      {/* Scroll Buttons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handleScrollLeft}
          className="bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
          aria-label="Scroll Left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handleScrollRight}
          className="bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
          aria-label="Scroll Right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Scrollable Services */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide gap-6 px-4"
        style={{ cursor: isDragging ? "grabbing" : "grab", scrollBehavior: "smooth" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {services.map((service, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <ServicesCard
              onClick={() => handleNavigation(service.title)}
              title={service.title}
              img={service.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
