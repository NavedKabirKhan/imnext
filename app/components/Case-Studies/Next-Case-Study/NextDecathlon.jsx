import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextDecathlon = () => {
  const images = [
    {
      src: '/assets/images/case-studies/decathlon/decathlon-paper-ad.webp',
      alt: 'Newspaper Marketing Ad of Decathlon by Integra Magna',
    },
    {
      src: '/assets/images/case-studies/decathlon/decathlon-sports-man.webp',
      alt: 'OOH Marketing of a man playing basketball in Decathlon merch.',
    },
    {
      src: '/assets/images/case-studies/decathlon/decathlon-wall-mural-2.webp',
      alt: 'Map of the illustration of the island created for Decathlon',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="Decathlon"
      nextStudyLink="/work/decathlon"
      images={images}
      description="Discovering India's Playground with Decathlon"
      backgroundColor="#1582c3" // Optional custom background color
    />
  );
};

export default NextDecathlon;
