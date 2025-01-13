"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';
import { Flip } from 'gsap/dist/Flip';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable, Flip);
}

export function useWheel(wheelRef, imagesLength) {
  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel || typeof window === 'undefined') return;

    const setup = () => {
      const radius = wheel.offsetWidth / 2;
      const center = radius;
      const slice = 360 / imagesLength;
      const DEG2RAD = Math.PI / 180;

      const cards = wheel.querySelectorAll('[data-wheel-card]');

      cards.forEach((card, i) => {
        gsap.set(card, {
          x: center + radius * Math.sin(i * slice * DEG2RAD),
          y: center - radius * Math.cos(i * slice * DEG2RAD),
          rotation: i * slice,
          z: i === 0 ? 0 : i === imagesLength - 1 ? -1 : -0.9, // Depth for cards        
          xPercent: -50,
          yPercent: -50,
          // autoRotate: true,

        });
        console.log(i);

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
        var snappedRotation = gsap.utils.snap(360 / imagesLength, this.rotation);
        gsap.to(wheel, { rotation: snappedRotation, duration: 0.17, ease: 'power4.InOut' });
        const cards = wheel.querySelectorAll('[data-wheel-card]');

        //print rotation
        // cards.forEach((card, i) => {
        //   const rotation = gsap.getProperty(card, 'rotation'); // Get rotation from GSAP
        //   console.log(`Card ${i + 1}: Rotation: ${rotation}`);
        // })
        // console.log()
        snappedRotation = ((snappedRotation % 360) + 360) % 360;

      },
      onDrag: function () {
        const cards = wheel.querySelectorAll('[data-wheel-card]');
        const slice = 360 / imagesLength; // Angle between adjacent cards
        const snappedRotation = ((this.rotation % 360) + 360) % 360; // Normalize to 0-360

        console.log("snappedRotation: ", snappedRotation);

        cards.forEach((card, i) => {
          // Calculate the card's angle
          const cardAngle = i * slice;

          // Find the shortest angular distance between the card and the snapped rotation
          let angleDiff = snappedRotation - cardAngle;

          // Normalize angleDiff to the range -180 to 180
          angleDiff = ((angleDiff + 180) % 360) - 180;

          // Map the angleDiff to a rotation value
          const maxRotation = 10; // Maximum rotation at the sides (left and right)
          let cardRotation;

          if (angleDiff >= -180 && angleDiff <= 0) {
            // Left side: Map angleDiff (-180 to 0) to rotation (-10 to 0)
            cardRotation = gsap.utils.mapRange(-180, 0, -maxRotation, 0, angleDiff);
          } else {
            // Right side: Map angleDiff (0 to 180) to rotation (0 to 10)
            cardRotation = gsap.utils.mapRange(0, 180, 0, maxRotation, angleDiff);
          }

          // Apply rotation to the inner card
          gsap.set(card.querySelector('[data-card]'), {
            rotation: cardRotation,
          });

          console.log(`Card ${i}: angleDiff: ${angleDiff}, cardRotation: ${cardRotation}`);
        });
      }



    })[0];

    return () => {
      window.removeEventListener('resize', setup);
      draggable.kill();
    };
  }, [wheelRef, imagesLength]);
}