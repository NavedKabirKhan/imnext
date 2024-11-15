import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextMotivata = () => {
  const images = [
    {
      src: '/assets/images/case-studies/motivata/street-billboard-2.webp',
      alt: 'Newspaper Marketing Ad of Decathlon by Integra Magna',
    },
    {
      src: '/assets/images/case-studies/motivata/motivata-beer-can.webp',
      alt: 'OOH Marketing of a man playing basketball in Decathlon merch.',
    },
    {
      src: '/assets/images/case-studies/motivata/motivata-tote-bag.webp',
      alt: 'Map of the illustration of the island created for Decathlon',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="Motivata"
      nextStudyLink="/work/motivata"
      images={images}
      description="A Festival of Self-Growth, Heart of the vibrant youth culture."
      backgroundColor="#EC8C26" // Optional custom background color
    />
  );
};

export default NextMotivata;
