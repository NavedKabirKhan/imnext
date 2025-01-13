'use client';
import CurvedCarousel from '@/app/components/Thinking/carousal/SpinningWheel';
import styles from '@/app/styles/Thinking.module.css'; // Import CSS Module
import NewCarousal from '@/app/components/Thinking/carousal/NewCarousal';

export default function Feature() {
  return (
    <div className={styles.thinkingContainer}>
      <div className={styles.thinkingFeature}>
        <div className={styles.featureContainer}>
          <div className={styles.featureHeading}>
            <h4>FEATURED WORK</h4>
            <p>Select recent and notable projects</p>
          </div>

          <div className={styles.carouselWork}>
            <CurvedCarousel />
            {/* <NewCarousal /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
