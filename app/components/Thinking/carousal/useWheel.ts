"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';
import { Flip } from 'gsap/dist/Flip';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable, Flip);
}

export function useWheel(wheelRef: React.RefObject<HTMLDivElement>, imagesLength: number) {
  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel || typeof window === 'undefined') return;

    const setup = () => {
      const radius = wheel.offsetWidth ;
      const center = radius;
      const slice = 360 / imagesLength;
      const DEG2RAD = Math.PI / 180;

      const cards = wheel.querySelectorAll('[data-wheel-card]');
      
      cards.forEach((card, i) => {
        gsap.set(card, {
          x: center + radius * Math.sin(i * slice * DEG2RAD),
          y: center - radius * Math.cos(i * slice * DEG2RAD),
          rotation: i * slice,
          // z: i === 0 ? 0 : i === imagesLength - 1 ? -1 : -0.9, // Depth for cards        
          xPercent: -50,
          yPercent: -50,
          // autoRotate: true
        });
      });
    };

    setup();
    window.addEventListener('resize', setup);

    // Create draggable instance
    const draggable = Draggable.create(wheel, {
      type: 'rotation',
      inertia: true,
      snap: (value) => gsap.utils.snap(360 / imagesLength, value), // Ensure snapping to the nearest slice
      onDragEnd: function () {
        // Optionally, align to the nearest snap point on drag end
        const snappedRotation = gsap.utils.snap(360 / imagesLength, this.rotation);
        gsap.to(wheel, { rotation: snappedRotation, duration: 0.2, ease: 'power4.Out' });
      },
    })[0];

    // Initial rotation animation
    // gsap.to(wheel, {
    //   rotation: -360,
    //   ease: 'none',
    //   duration: imagesLength,
    //   repeat: -1
    // });

    return () => {
      window.removeEventListener('resize', setup);
      draggable.kill();
    };
  }, [wheelRef, imagesLength]);
}