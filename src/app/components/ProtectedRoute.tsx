"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { isAuthenticated } from "@/utils/isAuthenticated";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login"); 
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
