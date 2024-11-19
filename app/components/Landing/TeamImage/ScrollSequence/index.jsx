"use client";

import { useRef, useCallback, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CanvasRenderer from './CanvasRenderer';
// import Overlay from './Overlay';
import { preloadImages, frameCount } from './ImageLoader';
import teamImage from "./teamImage.module.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollSequence = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const renderRef = useRef(null);


  // Set up the canvas to render images
  const setupCanvas = useCallback((canvas) => {
    canvasRef.current = canvas;
    const context = canvas.getContext('2d');

    // Render image on the canvas
    const render = (frameIndex) => {
      if (imagesRef.current[0]?.complete) { // Ensure image is loaded
        const img = imagesRef.current[frameIndex]; // Get the current image (use index 0 for now)
        // console.log('Rendering image:', img, frameIndex);

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

    renderRef.current = render;
    render(); // Initial render on setup
  }, []);

  // Preload images when the component is mounted
  useEffect(() => {
    imagesRef.current = preloadImages(); // Preload all images
    // console.log('Loaded images:', imagesRef.current);
    function initialImageLoad() {

      if (imagesRef.current[0]) {
        // console.log(this);
        renderRef.current(0); // Render the first frame on initial load
        console.log(renderRef.current(1));

      }
    }
    initialImageLoad();
    window.addEventListener('resize', initialImageLoad)
    return () => {
      window.addEventListener('resize', initialImageLoad)
    }
  }, []);

  // Use GSAP for scroll-triggered animations
  useGSAP(() => {
    let frameIndex = 0; // Initialize frame index at 0

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // The container element to trigger the scroll
        start: "top top", // Start when top of container reaches top of viewport
        end: () => '+=300%', // End when scrolled 300% of the container height
        scrub: 5, // Smooth scrolling effect
        pin: true, // Pin the container during the scroll
        markers: true, // Show markers for debugging
        onUpdate: (self) => {
          // Calculate the frame index based on scroll progress
          const newIndex = Math.floor(self.progress * (frameCount - 1)); // Ensure 0-indexed

          if (frameIndex !== newIndex) {
            frameIndex = newIndex; // Update frame index
            console.log(frameIndex);

            // Ensure that the new image exists and render it
            if (imagesRef.current[frameIndex]) {
              // console.log('Rendering frame index:', frameIndex);
              renderRef.current(frameIndex); // Call the render function
            }
          }
        },
      },
    });

    // Handle window resizing to re-render the canvas
    const handleResize = () => {
      renderRef.current();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill(); // Kill the GSAP timeline to prevent memory leaks
    };
  }, { scope: containerRef });

  // JSX structure for the component
  return (
    <>
      <div className={`${teamImage.teamImageMain}`}>
        {/* <div className="h-[100vh] z-10 relative bg-white"></div> */}

        <div className= {`${teamImage.teamImageSubMain}`}>
          <div ref={containerRef} className={`${teamImage.containerMain}`}>
            <div className={`${teamImage.canvasContainer}`}>
              <CanvasRenderer onCanvasRef={setupCanvas} />
              {/* <Overlay /> */}
            </div>
          </div>
        </div>

        {/* <div className="h-[100vh]"></div> */}
      </div>
    </>
  );
};

export default ScrollSequence;
