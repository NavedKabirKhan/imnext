import React from 'react';
import Image from 'next/image';
import AnimateImage from '@/app/components/AnimateImage';

const ClientLogo = ({ src, alt, className = '' }) => (
  <AnimateImage className="media-container">
  <Image
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    style={{ width: '100%', height: 'auto' }}
  />
  </AnimateImage>
);

export default ClientLogo;