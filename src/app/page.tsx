"use client";

import React, { useEffect, useState } from "react";
import Body from "@/app/components/Home/Body";
import Choose from "@/app/components/Home/Choose";
import Services from "@/app/components/Home/Services";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  

  if (!mounted) return null; 

  return (
    <div className={`px-10`}>
      <Body />
      <Services />
      <Choose />
    </div>
  )
}

export default Home;