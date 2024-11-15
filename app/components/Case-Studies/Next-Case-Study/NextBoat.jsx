import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextBoat = () => {
  const images = [
    {
      src: '/assets/images/case-studies/boat/boat-billboard-public.webp',
      alt: 'Public billboard Ad of boAt Lunar eclipse watch.',
    },
    {
      src: '/assets/images/case-studies/boat/boat-watch-billboard-banner-5.webp',
      alt: 'boAt billboard marketing.',
    },
    {
      src: '/assets/images/case-studies/boat/two-billboards-on-wall-with-blue-chairs.webp',
      alt: 'boAt watch features a metro board.',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="boAt"
      nextStudyLink="/work/boat"
      images={images}
      description="Ride the Wave of Sound with boAt"
      backgroundColor="#2167B6"
    />
  );
};

export default NextBoat;
