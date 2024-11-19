import React from 'react';
import Image from 'next/image';
import AnimateImage from '@/app/components/AnimateImage';

const ClientLogo = ({ src, alt, className = '' }) => (
  <Image
    src={src}
    alt={alt}
    className={className}
  />
);

export default ClientLogo;