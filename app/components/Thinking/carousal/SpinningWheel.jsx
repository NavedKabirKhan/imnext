"use client";

import { useRef } from 'react';
// import { Flip } from 'gsap/dist/Flip';
import { useWheel } from './useWheel';
import { duplicatedImages } from './config';
import styles from './SpinningWheel.module.css';

export default function SpinningWheel() {
  const wheelRef = useRef(null);
  const headerRef = useRef(null);
  const currentCardRef = useRef(null);

  useWheel(wheelRef, duplicatedImages.length);


  return (
    <div className={styles.sliderContainer}>
      <div ref={headerRef} className={styles.header}  />
      <div className={styles.sliderSection}>
        <div ref={wheelRef} className={styles.wheel}>
          {duplicatedImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              data-wheel-card
              className={styles.wheel__card}
              // onClick={onClickCard}
            >
              <img src={src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}