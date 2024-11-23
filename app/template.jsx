"use client";

import { useEffect, useState, useRef } from "react";
import { animatePageIn } from "@/animations";
// import { useRouter } from "next/router";

// import { usePathname } from "next/navigation";

export default function Template({ children }) {

  // Function to update the width of the loading slider based on load time
    const loaderRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true); // Trigger animation when loader enters viewport
          } else {
            setInView(false); // Reset if it leaves the viewport (optional)
          }
        },
        { threshold: 0.1 } // Adjust threshold as needed
      );

      if (loaderRef.current) {
        observer.observe(loaderRef.current);
      }

      return () => {
        if (loaderRef.current) {
          observer.unobserve(loaderRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (inView) {
        let progressValue = 0;
        const interval = setInterval(() => {
          progressValue += 2; // Increment progress
          setProgress(progressValue);
          if (progressValue >= 100) {
            clearInterval(interval); // Stop at 100%
          }
        }, 20); // Adjust speed as needed

        return () => clearInterval(interval); // Cleanup
      } else {
        setProgress(100); // Reset if loader leaves viewport
      }
    }, [inView]);


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
          ref={loaderRef}
          id="transition-element"
          className="transitionElement "
        >
          <div className="loader-content">
            <span className="transitionPageName" id="transitionPageName">
            </span>
            <div className="loader">
              <div className="loading-percentage" style={{ width: `${progress}%` }}>


              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    );
  }
