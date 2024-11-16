"use client";

import { useEffect, useState } from "react";
import { animatePageIn } from "@/animations";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  // const pathname = usePathname();
  // const [nextPageName, setNextPageName] = useState("");

  // useEffect(() => {
  //   // Determine the next page name when the path changes
  //   const pageName = pathname.split("/").pop() || "Home";
  //   setNextPageName(pageName.charAt(0).toUpperCase() + pageName.slice(1));

  //   // Trigger page out animation, then page in animation with a delay
  //   animatePageIn();

  // },); // Run effect on pathname change

  return (
    <div>
      <div
        id="transition-element"
        className="transitionElement "
      >
        <span className="transitionPageName" id="transitionPageName">
        </span>
      </div>
      {children}
    </div>
  );
}
