"use client";
import { useEffect} from 'react';

import styles from '@/app/styles/Thinking.module.css'
import Hero from '@/app/components/Thinking/thinkingHero';
import Feature from '@/app/components/Thinking/featureWork';
import MoreWork from '@/app/components/Thinking/moreWork';
import dynamic from 'next/dynamic';
import Head from 'next/head';




const Footer = dynamic(() => import('@/app/components/Footer/FinalFooter'), { ssr: false });


export default function Thinking() {

  
    useEffect(() => {
  document.title = 'Thinking | Integra Magna | Design Agency';
    }, []);
  
  return (
    <>
       <Head>
        <title>Thinking | Integra Magna | Design Agency</title>
        <meta name="description" content="Explore career opportunities at Integra Magna" />
      </Head>

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
