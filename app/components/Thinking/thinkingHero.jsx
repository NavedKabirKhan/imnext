'use client';
import { useRef } from 'react';

import MouseMagnetRepel from '@/app/components/Thinking/RepelImage';
import styles from '@/app/styles/Thinking.module.css'; // Import CSS module
import SlideUpText from "@/app/components/SlideUpText";

export default function Hero() {
  const textRef = useRef(null);

  return (
    <div className={styles.thinkingContainer}>
      <div className={styles.thinkingHero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroHeading}>
            {/* <h1>INTEGRA MAGNA</h1> */}
            <SlideUpText text="INTEGRA MAGNA" ref={textRef} tag='h1' delay={0.5} />
          </div>
           <div className={styles.interImage}>
            {['1.jpg', '2.jpg', '3.jpg', '4.jpg'].map((img, i) => (
              <MouseMagnetRepel
                key={i}
                ref={(el) => (imagesRef.current[i] = el)} // Add image refs
                src={`/assets/images/thinking/${img}`}
                alt="Repelling Effect"
                effectRadius={300}
                repelStrength={1.5}
                rotate={i % 2 === 0 ? 2 : -2} // Alternate tilt
                translate={{ x: i * 0.01, y: -i * 0.01 }} // Incremental offset
              />
            ))}
          </div>  
          <div className={styles.heroHeading}>
            {/* <h2>ILLUSTRATOR, DESIGNER & MURALIST</h2> */}
            <SlideUpText text="ILLUSTRATOR, DESIGNER & MURALIST" ref={textRef} tag='h2' delay={0.9} />

          </div>
        </div>
      </div>
    </div>
  );
}
