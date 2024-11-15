import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import landingStyles from "../../../styles/LandingPage.module.css";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const getImagePath = (index) => {
  return `assets/images/landing/integraMagnaLandingSequence/${index
    .toString()
    .padStart(3, "0")}.webp`;
};

const imageCount = 60; // Total number of images
const imageArray = Array.from({ length: imageCount }, (_, index) =>
  getImagePath(index + 1)
);

const preloadImages = (imageArray) => {
  const images = [];
  let imagesLoaded = 0;

  return new Promise((resolve) => {
    imageArray.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        images[index] = img;
        imagesLoaded++;
        if (imagesLoaded === imageArray.length) {
          resolve(images);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        imagesLoaded++;
        if (imagesLoaded === imageArray.length) {
          resolve(images);
        }
      };
    });
  });
};

const Spectrum = () => {
  const canvasRef = useRef(null);
  const [isSmallDevice, setIsSmallDevice] = useState(null); // Initialize as null

  useEffect(() => {
    const updateDeviceType = () => {
      if (typeof window !== 'undefined') {
        // Ensure window is defined before using it
        setIsSmallDevice(window.innerWidth < 960);
      }
    };

    // Run the check once the component is mounted (client-side)
    if (typeof window !== 'undefined') {
      updateDeviceType();
      window.addEventListener("resize", updateDeviceType);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", updateDeviceType);
      }
    };
  }, []);

  useEffect(() => {
    if (isSmallDevice === null) return; // Wait until the client-side has determined the device size

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let images = [];
    let animationInitialized = false;

    const startAutoplay = () => {
      let imageIndex = 0;
      let direction = 1; // 1 for forward, -1 for backward

      const autoplay = () => {
        imageIndex += direction;
        if (imageIndex === images.length - 1 || imageIndex === 0) {
          direction *= -1;
        }

        if (images[imageIndex]) {
          gsap.to(
            {},
            {
              duration: 0.04, // Duration of the transition
              ease: "power1.inOut", // Ease function
              onUpdate: () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                  images[imageIndex],
                  0,
                  0,
                  canvas.width,
                  canvas.height
                );
              },
              onComplete: () => {
                gsap.delayedCall(0.005, autoplay);
              },
            }
          );
        }
      };

      ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
      autoplay();
    };

    const initAnimation = () => {
      const handleMouseMove = (event) => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        const imageIndex = Math.round((images.length - 1) * x);

        if (images[imageIndex]) {
          gsap.to(canvas, { rotation: -30 * (y - 0.5), duration: 0.1 });
          gsap.to(canvas, {
            opacity: 1,
            duration: 0.2,
            onComplete: () => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(
                images[imageIndex],
                0,
                0,
                canvas.width,
                canvas.height
              );
              gsap.to(canvas, { opacity: 1, duration: 0.3 });
            },
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    };

    const initialize = () => {
      if (animationInitialized) return;
      animationInitialized = true;

      preloadImages(imageArray).then((loadedImages) => {
        images = loadedImages;
        if (isSmallDevice || ScrollTrigger.isTouch) {
          startAutoplay();
        } else {
          initAnimation();
        }
      });
    };
    canvas.style.opacity = 1;
    canvas.style.visibility = "visible";
    // Clear previous animations and reinitialize on resize
    gsap.killTweensOf(canvas);
    initialize();

    return () => {
      gsap.killTweensOf(canvas);
    };
  }, [isSmallDevice]);

  return (
    <>
      <div className={`${landingStyles.spectrum3delement} animHead`}>
        <canvas
          id="image"
          width="500"
          height="500"
          ref={canvasRef}
          className={landingStyles.desktop_canvas}
        ></canvas>
      </div>
    </>
  );
};

export default Spectrum;
