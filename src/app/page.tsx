"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./pages/Home/Body";

export default function Home() {
  return (
    <div className="px-10">
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <Navbar />
      <Body />
      {/* <h1>Hello World</h1> */}
      {/* </div> */}
    </div>
  );
}
