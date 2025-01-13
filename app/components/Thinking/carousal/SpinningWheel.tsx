import { useRef, useState } from 'react';
import { useWheel } from './useWheel';
import { duplicatedImages } from './config';
import styles from "@/app/styles/Thinking.module.css";

export default function SpinningWheel({ onButtonClick }) {
    const [currentIndex, setCurrentIndex] = useState(8); // Start from middle
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const sliderRef = useRef(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [selectedWork, setSelectedWork] = useState(null);

  useWheel(wheelRef, duplicatedImages.length);

  const handleButtonClick = (id: string | number) => {
    const selectedItem = duplicatedImages.find((item) => item.id === id);
    setSelectedWork(selectedItem);
  };

  const handleClosePopup = () => {
    setSelectedWork(null); // Close the popup
  };

  
  const getTransformStyle = (index) => {
    const distance = index - currentIndex;
    const rotation = distance * 15;
    const translateY = Math.abs(distance) * 80;
    const translateX = distance * 600;
    console.log(index);


    return {
      transform: `
        translateY(${translateY}px)
        translateX(${translateX}px)
        rotate(${rotation}deg)
      `,
    };
  };


  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderSection}>
        <div ref={wheelRef} className={styles.wheel}>
          {duplicatedImages.map(({ id, src, title }, index) => (
            <div
              key={id}
              data-wheel-card
              className={styles.wheel__card} style={getTransformStyle(index)}
            >
       
                <img src={src} alt={title} />
                <button
                  className={styles.buttonFeatureWorks}
                  onClick={() => handleButtonClick(id)}
                >
                  {title}
                </button>
 
            </div>
          ))}
        </div>
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
}
