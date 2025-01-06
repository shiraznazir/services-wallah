"use client";
import React from "react";
import Installation from "../components/Installation";
import BreadCrumbComp from "../components/BreadCrumbComp";
import Maintenance from "../components/Maintenance";
import Repair from "../components/Repair";
import AMC from "../components/AMC";
import Types from "../components/Types";

const Services = () => {
  return (
    <div className="px-10 py-5">
      <BreadCrumbComp title="Home" subTitle="Services" />
      <Installation />
      <Maintenance />
      <Repair />
      <AMC />
      <Types />
    </div>
  );
};

export default Services;
