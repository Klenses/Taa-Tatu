"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    HSStaticMethods?: {
      autoInit: () => void;
    };
  }
}

export function PrelineProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadPreline = async () => {
      await import("preline/preline");
      if (!isMounted) return;
      window.HSStaticMethods?.autoInit();
    };

    loadPreline();

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  return null;
}
