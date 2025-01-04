"use client";

import Image from "next/image";
import React from "react";
import installImag from "@/assets/installation.jpeg";
import BreadCrumbComp from "./BreadCrumbComp";

const Installation = () => {
  return (
    <section id="installation" className="text-center">
      <BreadCrumbComp title="Home" subTitle="Services" />
      {/* Uncomment if image should be used
      <Image
        className="animate-zoomIn hover:animate-zoomIn cursor-pointer rounded-lg shadow-lg"
        width={500}
        height={500}
        src={installImag}
        alt="Air conditioning installation process"
        priority
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 flex justify-center items-center">
          <video
            className="w-full max-w-md mx-auto"
            controls
            preload="metadata"
            aria-label="Installation process video"
          >
            {/* <source src={videoClip} type="video/mp4" /> */}
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 text-left">
          <div>
            <h2 className="text-3xl font-bold mb-4 animate-slideIn">
              Our Installation Process
            </h2>
            <ul className="space-y-2 list-disc list-inside font-bold animate-slideIn">
              <li>Consultation and Assessment</li>
              <li>System Selection</li>
              <li>Professional Installation</li>
              <li>System Testing</li>
              <li>Post-Installation Support</li>
            </ul>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4 animate-slideIn">
              Types of Air Conditioners We Install
            </h2>
            <ul className="space-y-2 list-disc list-inside font-bold animate-slideIn">
              <li>Split Air Conditioners</li>
              <li>Window Air Conditioners</li>
              <li>Central Air Conditioning Systems</li>
              <li>Cassette Air Conditioners</li>
              <li>Ductable Air Conditioners</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
