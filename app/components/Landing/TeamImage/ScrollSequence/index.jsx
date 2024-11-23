"use client";

import { useRef, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CanvasRenderer from "./CanvasRenderer";
// import Overlay from './Overlay';
import { preloadImages, frameCount } from "./ImageLoader";
import teamImage from "./teamImage.module.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollSequence = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]); // Preloaded images
  const renderRef = useRef(null); // Canvas render function

  // Set up the canvas to render images
  const setupCanvas = useCallback((canvas) => {
    canvasRef.current = canvas;
    const context = canvas.getContext("2d");

    // Render image on the canvas
    const render = (frameIndex) => {
      const img = imagesRef.current[frameIndex];
      if (img?.complete) {
        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;

        const scale = Math.max(
          context.canvas.width / img.width,
          context.canvas.height / img.height
        );
        const x = (context.canvas.width - img.width * scale) / 2;
        const y = (context.canvas.height - img.height * scale) / 2;

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    renderRef.current = render; // Save render function
    render(0); // Initial render
  }, []);

  // Preload images when the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      imagesRef.current = preloadImages(); // Preload all images

      const initialImageLoad = () => {
        if (imagesRef.current[0]) {
          renderRef.current(0); // Render the first frame on load
        }
      };

      initialImageLoad();
      window.addEventListener("resize", initialImageLoad);

      return () => {
        window.removeEventListener("resize", initialImageLoad);
      };
    }
  }, []);

  // Use GSAP for scroll-triggered animations
  useGSAP(() => {
    let frameIndex = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=200%",
        scrub: 5,
        pin: true,
        // markers: true,
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * (frameCount - 1));
          if (frameIndex !== newIndex) {
            frameIndex = newIndex;
            if (imagesRef.current[frameIndex]) {
              renderRef.current(frameIndex); // Render the new frame
            }
          }
        },
      },
    });

    // Handle window resizing
    const handleResize = () => {
      if (renderRef.current && typeof window !== "undefined") {
        renderRef.current(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill(); // Cleanup GSAP timeline
    };
  }, { scope: containerRef });

  // JSX structure for the component
  return (
    <>
      <div className={`${teamImage.teamImageMain}`}>
        <div className={`${teamImage.teamImageSubMain}`}>
          <div ref={containerRef} className={`${teamImage.containerMain}`}>
            <div className={`${teamImage.canvasContainer}`}>
              <CanvasRenderer onCanvasRef={setupCanvas} />
              {/* <Overlay /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollSequence;
