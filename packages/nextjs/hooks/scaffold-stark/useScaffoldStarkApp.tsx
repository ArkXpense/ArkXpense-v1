// useScaffoldStarkApp.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAccount } from "~~/hooks/useAccount";

export const useScaffoldStarkApp = () => {
  const { status } = useAccount();
  const [isAuthPage, setIsAuthPage] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const authPages = ["/login", "/register"];
    setIsAuthPage(authPages.includes(pathname));

    if (status !== "connected" && !authPages.includes(pathname)) {
      router.push("/login");
    }
  }, [status, pathname, router]);

  return { isAuthPage, status };
};
