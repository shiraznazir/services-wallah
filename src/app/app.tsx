"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";

const App = () => {
  const pathname = usePathname(); // Get the current route

  const hideNavbarOnRoutes = ["/login"];
  const showNavbar = !hideNavbarOnRoutes.includes(pathname);

  return <> {showNavbar && <Navbar />}</>;
};

export default App;
