"use client";
import styles from '@/app/styles/Thinking.module.css'
import Hero from '@/app/components/Thinking/thinkingHero';
import Feature from '@/app/components/Thinking/featureWork';
import MoreWork from '@/app/components/Thinking/moreWork';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/app/components/Footer/FinalFooter'), { ssr: false });


export default function Thinking() {

  
  return (
    <>
      <div id="content">
        <div className={styles.main}>
          <Hero />
          <Feature />
          <MoreWork />
        </div>
      </div>
      <Footer />
    </>
  );
}
