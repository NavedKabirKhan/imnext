import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextRoyalLegacy = () => {
  const images = [
    {
      src: '/assets/images/case-studies/royal-legacy/roadside_wall_mock.webp',
      alt: 'Newspaper Marketing Ad of Decathlon by Integra Magna',
    },
    {
      src: '/assets/images/case-studies/royal-legacy/royal_legacy_business_card.webp',
      alt: 'OOH Marketing of a man playing basketball in Decathlon merch.',
    },
    {
      src: '/assets/images/case-studies/royal-legacy/lady.webp',
      alt: 'Map of the illustration of the island created for Decathlon',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="Royal Legacy"
      nextStudyLink="/work/royal-legacy"
      images={images}
      description="Where Tradition Meets Taste with Royal Legacy."
      backgroundColor="#155A53" // Optional custom background color
    />
  );
};

export default NextRoyalLegacy;
