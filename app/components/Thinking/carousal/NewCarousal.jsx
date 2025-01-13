'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './FruitSlider.module.css'; // Import CSS module

const fruits = [
  {
    id: "feature1",
    src: '/assets/images/thinking/1.jpg',
    alt: 'Project 1',
    title: 'Naved Khan',
    description:
      'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
    images: ['/assets/images/thinking/1.jpg'], // Single image
  },
  {
    id: "feature2",
    src: '/assets/images/thinking/2.jpg',
    alt: 'Project 2',
    title: 'Project Two',
    description: 'This is a detailed description of Project Two.',
    images: ['/assets/images/thinking/2.jpg', '/assets/images/thinking/2.jpg'], // Two images
  },
  {
    id: "feature3",
    src: '/assets/images/thinking/3.jpg',
    alt: 'Project 3',
    title: 'Project Three',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg'], // More than two images
  },
  {
    id: "feature4",
    src: '/assets/images/thinking/4.jpg',
    alt: 'Project 4',
    title: 'Project Four',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg'], // More than two images
  },
  {
    id: "feature5",
    src: '/assets/images/thinking/5.jpg',
    alt: 'Project 5',
    title: 'Project Five',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg'], // More than two images
  },
  {
    id: "feature6",
    src: '/assets/images/thinking/6.jpg',
    alt: 'Project 6',
    title: 'Project Six',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg'], // More than two images
  },
  {
    id: "feature1",
    src: '/assets/images/thinking/1.jpg',
    alt: 'Project 1',
    title: 'Naved Khan',
    description:
      'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
    images: ['/assets/images/thinking/1.jpg'], // Single image
  },
  {
    id: "feature2",
    src: '/assets/images/thinking/2.jpg',
    alt: 'Project 2',
    title: 'Project Two',
    description: 'This is a detailed description of Project Two.',
    images: ['/assets/images/thinking/2.jpg', '/assets/images/thinking/2.jpg'], // Two images
  },
  {
    id: "feature3",
    src: '/assets/images/thinking/3.jpg',
    alt: 'Project 3',
    title: 'Project Three',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg'], // More than two images
  },
  {
    id: "feature4",
    src: '/assets/images/thinking/4.jpg',
    alt: 'Project 4',
    title: 'Project Four',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg'], // More than two images
  },
  {
    id: "feature5",
    src: '/assets/images/thinking/5.jpg',
    alt: 'Project 5',
    title: 'Project Five',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg'], // More than two images
  },
  {
    id: "feature6",
    src: '/assets/images/thinking/6.jpg',
    alt: 'Project 6',
    title: 'Project Six',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg'], // More than two images
  },
  {
    id: "feature1",
    src: '/assets/images/thinking/1.jpg',
    alt: 'Project 1',
    title: 'Naved Khan',
    description:
      'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
    images: ['/assets/images/thinking/1.jpg'], // Single image
  },
  {
    id: "feature2",
    src: '/assets/images/thinking/2.jpg',
    alt: 'Project 2',
    title: 'Project Two',
    description: 'This is a detailed description of Project Two.',
    images: ['/assets/images/thinking/2.jpg', '/assets/images/thinking/2.jpg'], // Two images
  },
  {
    id: "feature3",
    src: '/assets/images/thinking/3.jpg',
    alt: 'Project 3',
    title: 'Project Three',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg'], // More than two images
  },
  {
    id: "feature4",
    src: '/assets/images/thinking/4.jpg',
    alt: 'Project 4',
    title: 'Project Four',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg'], // More than two images
  },
  {
    id: "feature5",
    src: '/assets/images/thinking/5.jpg',
    alt: 'Project 5',
    title: 'Project Five',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg'], // More than two images
  },
  {
    id: "feature6",
    src: '/assets/images/thinking/6.jpg',
    alt: 'Project 6',
    title: 'Project Six',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg'], // More than two images
  },
  {
    id: "feature1",
    src: '/assets/images/thinking/1.jpg',
    alt: 'Project 1',
    title: 'Naved Khan',
    description:
      'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
    images: ['/assets/images/thinking/1.jpg'], // Single image
  },
  {
    id: "feature2",
    src: '/assets/images/thinking/2.jpg',
    alt: 'Project 2',
    title: 'Project Two',
    description: 'This is a detailed description of Project Two.',
    images: ['/assets/images/thinking/2.jpg', '/assets/images/thinking/2.jpg'], // Two images
  },
  {
    id: "feature3",
    src: '/assets/images/thinking/3.jpg',
    alt: 'Project 3',
    title: 'Project Three',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg'], // More than two images
  },
  {
    id: "feature4",
    src: '/assets/images/thinking/4.jpg',
    alt: 'Project 4',
    title: 'Project Four',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg'], // More than two images
  },
  {
    id: "feature5",
    src: '/assets/images/thinking/5.jpg',
    alt: 'Project 5',
    title: 'Project Five',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg'], // More than two images
  },
  {
    id: "feature6",
    src: '/assets/images/thinking/6.jpg',
    alt: 'Project 6',
    title: 'Project Six',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg'], // More than two images
  },
  {
    id: "feature1",
    src: '/assets/images/thinking/1.jpg',
    alt: 'Project 1',
    title: 'Naved Khan',
    description:
      'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
    images: ['/assets/images/thinking/1.jpg'], // Single image
  },
  {
    id: "feature2",
    src: '/assets/images/thinking/2.jpg',
    alt: 'Project 2',
    title: 'Project Two',
    description: 'This is a detailed description of Project Two.',
    images: ['/assets/images/thinking/2.jpg', '/assets/images/thinking/2.jpg'], // Two images
  },
  {
    id: "feature3",
    src: '/assets/images/thinking/3.jpg',
    alt: 'Project 3',
    title: 'Project Three',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg', '/assets/images/thinking/3.jpg'], // More than two images
  },
  {
    id: "feature4",
    src: '/assets/images/thinking/4.jpg',
    alt: 'Project 4',
    title: 'Project Four',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg', '/assets/images/thinking/4.jpg'], // More than two images
  },
  {
    id: "feature5",
    src: '/assets/images/thinking/5.jpg',
    alt: 'Project 5',
    title: 'Project Five',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg', '/assets/images/thinking/5.jpg'], // More than two images
  },
  {
    id: "feature6",
    src: '/assets/images/thinking/6.jpg',
    alt: 'Project 6',
    title: 'Project Six',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg'], // More than two images
  },
  {
    id: "feature1",
    src: '/assets/images/thinking/1.jpg',
    alt: 'Project 1',
    title: 'Project One',
    description: 'This is a detailed description of Project Three.',
    images: ['/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg', '/assets/images/thinking/6.jpg'], // More than two images
  },
];

const FruitSlider = ({ onButtonClick }) => {
  const [currentIndex, setCurrentIndex] = useState(16); // Start from middle
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);
  const [selectedWork, setSelectedWork] = useState(null);


  const handleButtonClick = (id) => {
    const selectedItem = fruits.find((item) => item.id === id);
    setSelectedWork(selectedItem);
  };

  const handleClosePopup = () => {
    setSelectedWork(null); // Close the popup
  };

  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    handleDragging(x);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    handleDragging(x);
  };

  const handleDragging = (x) => {
    const distance = (x - startX) * 2;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        // Swiping right
        setCurrentIndex((prev) => (prev - 1 + fruits.length) % fruits.length);
      } else {
        // Swiping left
        setCurrentIndex((prev) => (prev + 1) % fruits.length);
      }
      setIsDragging(false); // Stop dragging after detecting a swipe
    }
  };




  const getTransformStyle = (index) => {
    const distance = index - currentIndex;
    const scale = 1.3;
    const rotation = distance * 15;
    const translateY = Math.abs(distance) * 80;
    const translateX = distance * 600;
    // console.log(index);


    // if (index === 15) {
    //   console.log(fruits.map((fruit, index) => (
    //     {
    //       src: fruit.src,
    //       alt: fruit.alt,
    //       text: fruit.text,
    //     }
    //   )));
    // }


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
    style={{
      cursor: isDragging ? "grabbing" : "grab",
    }}
    onMouseDown={handleMouseDown}
    onTouchStart={handleTouchStart}
    onMouseMove={handleMouseMove}
    onTouchMove={handleTouchMove}
    onMouseUp={handleMouseUp}
    onTouchEnd={handleTouchEnd}
    onMouseLeave={handleMouseUp} // To handle when the mouse leaves the slider
    >
      <div className={styles.sliderInner}>
        {fruits.map(({ id, src, title, alt }, index) => (
          <div
            className={styles.fruitCard}
            style={getTransformStyle(index)}
            key={id}
          >
            <img src={src} alt={alt} className={styles.fruitImage} />
            <button
              className={styles.buttonFeatureWorks}
              onClick={() => handleButtonClick(id)}

            >
              {title}
            </button>
          </div>
        ))}
      </div>
      {/* Popup */}
      {selectedWork && (
        <div className={styles.popup} data-lenis-prevent>
          <div className={styles.popupContent}>
            <div className={styles.workInternalHeader}>
              <button
                className={styles.closeButton}
                onClick={handleClosePopup}
              >
                <span className={styles.closeIcon}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9499 18.1374C17.2782 18.4656 17.8104 18.4656 18.1386 18.1374C18.4668 17.8092 18.4668 17.2771 18.1386 16.9488L10.4375 9.24807L17.8664 1.81953C18.1946 1.4913 18.1946 0.959153 17.8664 0.630932C17.5381 0.302711 17.006 0.30271 16.6777 0.630931L9.24881 8.05948L2.09182 0.902817C1.76358 0.574596 1.2314 0.574596 0.903168 0.902817C0.57493 1.23104 0.57493 1.76319 0.903166 2.09141L8.06017 9.24807L0.630941 16.6769C0.302705 17.0052 0.302705 17.5373 0.630941 17.8655C0.959178 18.1938 1.49135 18.1938 1.81959 17.8655L9.24882 10.4367L16.9499 18.1374Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>


            <div className={styles.workInternalMain}>
              <div className={styles.workHeadContent}>
                <h2 className={styles.workTitle}>{selectedWork.title}</h2>
                <div className={styles.workDescription}>
                  <p>{selectedWork.description}</p>
                </div>
              </div>

              {/* Conditional Rendering for Popup Grid */}
              {selectedWork.images.length === 1 ? (
                <div className={styles.popupSingleImage}>
                  <img
                    src={selectedWork.images[0]}
                    alt="Single Image"
                    className={styles.singleImage}
                  />
                </div>
              ) : selectedWork.images.length === 2 ? (
                <div className={styles.popupTwoImages}>
                  {selectedWork.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className={styles.twoImage}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.popupGrid}>
                  {selectedWork.images.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.popupGridItem} ${index % 3 === 2 ? styles.landscape : styles.square
                        }`}
                    >
                      <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default FruitSlider;
