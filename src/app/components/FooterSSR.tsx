"use client"

import dynamic from "next/dynamic";

const FooterNoSSR = dynamic(() => import("./Footer"), { ssr: false });

export default FooterNoSSR;
