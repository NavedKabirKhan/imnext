import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextNeelamForesteria = () => {
  const images = [
    {
      src: '/assets/images/case-studies/neelam-foresteria/sticker-of-logo-on-brown-paper.webp',
      alt: 'Newspaper Marketing Ad of Decathlon by Integra Magna',
    },
    {
      src: '/assets/images/case-studies/neelam-foresteria/girl-with-wine-on-table.webp',
      alt: 'OOH Marketing of a man playing basketball in Decathlon merch.',
    },
    {
      src: '/assets/images/case-studies/neelam-foresteria/logo-on-wall.webp',
      alt: 'Map of the illustration of the island created for Decathlon',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="Neelam Foresteria"
      nextStudyLink="/work/neelam-foresteria"
      images={images}
      description="Whispers of the Wild: Neelam Forestaria's Luxurious Call to Nature."
      backgroundColor="#668D11" // Optional custom background color
    />
  );
};

export default NextNeelamForesteria;
