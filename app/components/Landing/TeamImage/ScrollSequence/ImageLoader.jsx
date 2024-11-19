"use client";

const frameCount = 46;
const currentFrame = (index) =>
  `https://integramagna.com/assets/scrolling-team-working/0${index}.webp`;

export const preloadImages = () => {
  const images = [];
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
    // console.log('Images loaded:', images);
  }

  return images;
};

export { frameCount };