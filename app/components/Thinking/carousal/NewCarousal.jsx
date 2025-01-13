'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './FruitSlider.module.css'; // Import CSS module

const fruits = [
    {
        src: 'https://source.unsplash.com/ezSFnAFi9hY/500x500',
        alt: 'cut citrus fruits',
        text: 'Lorem Ipsum',
      },
      {
        src: 'https://source.unsplash.com/TIGDsyy0TK4/500x500',
        alt: 'sliced mango',
        text: 'Dolor Sit',
      },
      {
        src: 'https://source.unsplash.com/TdDtTu2rv4s/500x500',
        alt: 'a bunch of blueberries',
        text: 'Amet Consectetur',
      },
      {
        src: 'https://source.unsplash.com/eudGUrDdBB0/500x500',
        alt: 'a pineapple sitting on a table',
        text: 'Adipiscing Elit',
      },
      {
        src: 'https://source.unsplash.com/eJH4f1rlG7g/500x500',
        alt: 'frozen raspberries',
        text: 'Nunc Tortor',
      },
      {
        src: 'https://source.unsplash.com/24RUrLSW1HI/500x500',
        alt: 'a sliced strawberry',
        text: 'Metus Mollis',
      },
      {
        src: 'https://source.unsplash.com/h5yMpgOI5nI/500x500',
        alt: 'an arrangement of assorted sliced fruits',
        text: 'Congue Sagittis',
      },
      {
        src: 'https://source.unsplash.com/2TYrR2IB72s/500x500',
        alt: 'sliced watermelons',
        text: 'Vestibulum Et',
      },
      {
        src: 'https://source.unsplash.com/1cWZgnBhZRs/500x500',
        alt: 'grapefruits, lemons, and pomegranates',
        text: 'Donec Eget',
      },
      {
        src: 'https://source.unsplash.com/9aOswReDKPo/500x500',
        alt: 'half of an avocado',
        text: 'Maecenas et Justo',
      },
      {
        src: 'https://source.unsplash.com/Nl7eLS8E2Ss/500x500',
        alt: 'half of a lime',
        text: 'Malesuada Quam',
      },
      {
        src: 'https://source.unsplash.com/3HhXWJzG5Ko/500x500',
        alt: 'a single cherry with stem',
        text: 'Ultricies Sollicitudin',
      },
      {
        src: 'https://source.unsplash.com/fczCr7MdE7U/500x500',
        alt: 'a bunch of bananas',
        text: 'Gravida Nibh',
      },
      {
        src: 'https://source.unsplash.com/uI900SItAyY/500x500',
        alt: 'three pears',
        text: 'Pellentesque Sapien',
      },
      {
        src: 'https://source.unsplash.com/0AynZdszfz0/500x500',
        alt: 'a basket full of peaches',
        text: 'Suspendisse Vel',
      },
      {
        src: 'https://source.unsplash.com/C6JhUKs9q8M/500x500',
        alt: 'a bowl of avocados',
        text: 'Mauris Consectetur',
      },
];

const FruitSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(8); // Start from middle
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);



  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX) * 2;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        setCurrentIndex((prev) => (prev - 1 + fruits.length) % fruits.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % fruits.length);
      }
      setIsDragging(false);
    }
  };


  const getTransformStyle = (index) => {
    const distance = index - currentIndex;
    const scale = 1.3;
    const rotation = distance * 15;
    const translateY = Math.abs(distance) * 80;
    const translateX = distance * 600;
console.log(index);
  

if(index === 15){
    console.log(fruits.map((fruit, index) => (
        {
        src: fruit.src,
        alt: fruit.alt,
        text: fruit.text,
        }
    )));
}


    return {
      transform: `
        scale(${scale})
        translateY(${translateY}px)
        translateX(${translateX}px)
        rotate(${rotation}deg)
      `,
    };
  };

  return (
    <div
      ref={sliderRef}
      className={styles.sliderContainer}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.sliderInner}>
        {fruits.map((fruit, index) => (
          <div
            key={index}
            className={styles.fruitCard}
            style={getTransformStyle(index)}
          >
            <img src={fruit.src} alt={fruit.alt} className={styles.fruitImage} />
            <p className={styles.fruitText}>{fruit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitSlider;
