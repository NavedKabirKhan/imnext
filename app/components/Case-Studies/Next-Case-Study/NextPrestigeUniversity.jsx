import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextPrestigeUniversity = () => {
  const images = [
    {
      src: '/assets/images/case-studies/prestige-university-branding/direction-sign.webp',
      alt: 'Directional signpost with arrows pointing to different schools of Prestige University.',
    },
    {
      src: '/assets/images/case-studies/prestige-university-branding/bag-hanging-on-pole.webp',
      alt: 'Prestige University backpack hanging on a pole.',
    },
    {
      src: '/assets/images/case-studies/prestige-university-branding/three-man-studying-together.webp',
      alt: 'Three young men studying together at a table at Prestige University.',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="Prestige University"
      nextStudyLink="/work/prestige-university"
      images={images}
      description="Sculpting Leaders of Tomorrow at Prestige University"
    />
  );
};

export default NextPrestigeUniversity;
