"use client";

import { useRef, useEffect } from "react";
import styles from "@/app/styles/Thinking.module.css";
import { gsap } from "gsap"; // Ensure GSAP is installed: npm install gsap

const MouseMagnetRepel = ({
  src,
  alt,
  effectRadius = 200,
  repelStrength = 10,
  rotate = 0,
  translate = { x: 0, y: 0 }, // Default translation offset
}) => {
  const imageRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const element = imageRef.current;
    const strength = repelStrength * 200; // Scale strength based on the repelStrength prop
    let lastMouseMoveTime = 0;

    const handleMouseMove = (event) => {
      const currentTime = Date.now();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      lastMouseMoveTime = currentTime;

      const bounding = element.getBoundingClientRect();
      const centerX = bounding.left + bounding.width / 2;
      const centerY = bounding.top + bounding.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance <= effectRadius) {
        // Normalize the offsets based on distance and apply strength
        const offsetX =
          ((distanceX / bounding.width) * strength * (effectRadius - distance)) /
          effectRadius;
        const offsetY =
          ((distanceY / bounding.height) * strength * (effectRadius - distance)) /
          effectRadius;

        // Apply GSAP animation
        gsap.to(element, {
          x: offsetX + translate.x,
          y: offsetY + translate.y,
          rotation: rotate,
          duration: 0.5,
          ease: "elastic.out",
        });
      } else {
        // Reset when out of effectRadius
        gsap.to(element, {
          x: translate.x,
          y: translate.y,
          rotation: rotate,
          duration: 0.5,
          ease: "elastic.out",
        });
      }

      // Set a timeout to detect when the mouse stops moving
      timeoutRef.current = setTimeout(() => {
        if (Date.now() - lastMouseMoveTime >= 50) {
          gsap.to(element, {
            x: translate.x,
            y: translate.y,
            rotation: rotate,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }, 50); // Timeout threshold (in ms) to consider mouse stopped
    };

    const handleMouseOut = () => {
      // Reset position on mouse out
      gsap.to(element, {
        x: translate.x,
        y: translate.y,
        rotation: rotate,
        duration: 0.5,
        ease: "elastic.out",
      });
    };

    // Attach global event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [effectRadius, repelStrength, rotate, translate]);

  return (
    <div className={styles.wrapper}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${styles.image} magnetic`}
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
};

export default MouseMagnetRepel;
