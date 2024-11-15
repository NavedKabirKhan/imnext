import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextAdnd = () => {
  const images = [
    {
      src: '/assets/images/case-studies/adnd/laptop-on-grey-platform.webp',
      alt: 'Laptop displaying UI of ADND Ideology on ADND’s website.',
    },
    {
      src: '/assets/images/case-studies/adnd/letterning-with-circle-focus-1.webp',
      alt: 'Ongoing typography for running projects.',
    },
    {
      src: '/assets/images/case-studies/adnd/blue-couch.webp',
      alt: 'front view of the blue couch and wall hanging Art from the ADND project.',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="adnd"
      nextStudyLink="/work/adnd"
      images={images}
      description="Crafting the Digital Canvas: ADND's Architectural Mastery Unveiled."
    backgroundColor="#626362"
    />
  );
};

export default NextAdnd;
