import { useEffect, useRef } from 'react';

const FadeInImage = ({ src, alt, ...props }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('image-visible');
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold if needed
    );

    const currentImageRef = imageRef.current; // Copy ref to a local variable

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt || ''} // Ensure alt is always set for accessibility
      className="image-hidden"
      {...props}
    />
  );
};

export default FadeInImage;
