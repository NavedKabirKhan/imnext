// app/layout.js
"use client";
import Lenis from "lenis";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/app/styles/global.min.css";
import "@/app/styles/header.css";
import Header from "@/app/components/Header/Header";
import CaseStudyHeader from "@/app/components/Case-Studies/CaseStudyHeader";
import { animatePageIn, animatePageOut } from "@/animations"; // Ensure path is correct

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isCaseStudyPage, setIsCaseStudyPage] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Track the first load
  const [prevPathname, setPrevPathname] = useState(null); // Track previous pathname for route change

  useEffect(() => {
    setIsCaseStudyPage(pathname.startsWith("/work/"));
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  useEffect(() => {
    // Animate page in on initial load
    if (isInitialLoad) {
      animatePageIn();
      setIsInitialLoad(false);
    } else if (prevPathname !== pathname) {
      // If pathname changes (route change), animate page out, then in
      animatePageOut(pathname);
      animatePageIn();
      setPrevPathname(pathname);
    }
  }, [pathname, isInitialLoad, prevPathname]);

  return (
    <html lang="en">
      <body>

        {/* Transition Overlay */}
        <div
          id="transition-overlay"
          className={`fixed top-0 left-0 w-full h-full bg-black z-50 ${
            isInitialLoad ? "" : "hidden"
          }`}
        ></div>
        {isCaseStudyPage ? <CaseStudyHeader /> : <Header />}
        <main>{children}</main>
      </body>
    </html>
  );
}
