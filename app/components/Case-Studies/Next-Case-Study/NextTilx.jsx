import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextTilx = () => {
  const images = [
    {
      src: '/assets/images/case-studies/tilx/building-banner.webp',
      alt: 'Large building banner advertising The Indian Luxury Expo with an event invite collab with Porsche.',
    },
    {
      src: '/assets/images/case-studies/tilx/building-structure.webp',
      alt: 'Architectural detail of a modern building with a complex geometric ceiling structure',
    },
    {
      src: '/assets/images/case-studies/tilx/invitation-card.webp',
      alt: 'Invitation card for The Indian Luxury Expo at Porche Centre',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="TILX"
      nextStudyLink="/work/tilx"
      images={images}
      description="Elegance Redefined: The Indian Luxury Expo's Visual Symphony"
      backgroundColor="#AF8964" // Optional custom background color
    />
  );
};

export default NextTilx;
