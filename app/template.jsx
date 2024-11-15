"use client";

import { useEffect, useState } from "react";
import { animatePageIn } from "@/animations";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  const [nextPageName, setNextPageName] = useState("");

  useEffect(() => {
    // Determine the next page name when the path changes
    const pageName = pathname.split("/").pop() || "Home";
    setNextPageName(pageName.charAt(0).toUpperCase() + pageName.slice(1));

    // Trigger page out animation, then page in animation with a delay
    animatePageIn();

  }, [pathname]); // Run effect on pathname change

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-black z-10000 fixed top-0 left-0 flex items-end justify-end p-20"
      >
        <span className="text-white text-5xl">
          {nextPageName}
        </span>
      </div>
      {children}
    </div>
  );
}
