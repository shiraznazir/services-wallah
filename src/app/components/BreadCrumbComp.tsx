"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
interface BreadcrumbProps {
  title: string;
  subTitle: string;
}

const BreadCrumbComp: React.FC<BreadcrumbProps> = ({ title, subTitle }) => {
  return (
    <Breadcrumb className="my-5" >
      <BreadcrumbList>
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink className="font-bold" href="/">{title}</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Current Page */}
        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold" >{subTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComp;
