"use client";
import styles from '@/app/styles/Thinking.module.css'
import { useEffect, useRef, useState } from 'react';
import TransitionLink from "@/app/components/TransitionLink";
import SpinningWheel from "@/app/components/Thinking/carousal/SpinningWheel.tsx";
import projects from "@/app/json/thinkingProjects.json";
import blogs from "@/app/json/thinkingBlogs.json";
export default function Feature() {
  


  const [activeCategory, setActiveCategory] = useState('work'); // Default category
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Index for current project

  const projectRefs = useRef([]);
  const blogsRefs = useRef([]);

  const [transitioning, setTransitioning] = useState(false); // Control smooth transition
  const [displayedCategory, setDisplayedCategory] = useState('work'); // For display:block/none


  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          } else {
            entry.target.classList.remove(styles.active);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    // Observe project refs
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  
    // Observe blog refs
    blogsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  
    // Cleanup
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
  
      blogsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const handleClosePopup = () => {
    setSelectedWork(null);
  };

  const handleCategoryChange = (category) => {
    setTransitioning(true); // Start transition
    setTimeout(() => {
      setActiveCategory(category); // Change category after delay
      setTransitioning(false); // End transition
    }, 300); // Match the CSS transition duration
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedWork(projects[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedWork(projects[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className={styles.thinkingContainer}>

      <div className={styles.thinkingMore}>
        <div className={styles.radioSection}>
          <div className={styles.radioButton}>
            <button id="btn_submit"
              className={`${styles.workCategory} ${activeCategory === 'work' ? styles.active : ''
                }`}
              onClick={() => handleCategoryChange('work')}
            >
              Works
            </button>
            <button id="btn_submit"
              className={`${styles.blogCategory} ${activeCategory === 'blogs' ? styles.active : ''
                }`}
              onClick={() => handleCategoryChange('blogs')}
            >
              Blogs
            </button>
          </div>
        </div>

        {/* Works Section */}
        <div
          className={`${styles.moreContainer} ${activeCategory === 'work' ? styles.visible : styles.hidden
            } ${transitioning ? styles.transitioning : ''} ${displayedCategory === 'work' ? 'display' : ''
            }  `}
        >
          <div className={styles.moreHeading}>
            <h4>MORE WORK</h4>
            <p>Take a scroll, stay a while</p>
          </div>

          <div className={styles.workGrid}>
  {projects.map((project, index) => (
    <a
      key={project.id}
      href="#"
      className={styles.project}
      ref={(el) => (projectRefs.current[index] = el)}
      data-index={index}
      onClick={(e) => {
        e.preventDefault();
        handleWorkClick(project);
      }}
    >
      {project.images.length === 1 ? (
        // Render a single image
        <div className={styles.projectImage}>
          <img src={project.images[0]} alt={project.alt} loading="lazy" />
        </div>
      ) : (
        // Render a stack for multiple images
        <div className={`${styles.projectStack}`}>
        {project.images.slice(0, 2).map((image, idx) => {
          // Apply random transformations only to the first image
          const randomRotate = idx === 0 ? Math.random() * (10 - -10) + -10 : 0; // Random rotation only for the top image
          const randomX = idx === 0 ? Math.random() * (5 - -5) + -5 : 0; // Random translateX only for the top image
          const randomY = idx === 0 ? Math.random() * (0 - -10) + 4 : 0; // Random translateY only for the top image
          return (
            <img
              key={idx}
              src={image}
              alt={`${project.alt} ${idx + 1}`}
              style={{
                transform: `rotate(${randomRotate}deg) translate(${randomX}px, ${randomY}px)`,
                zIndex: idx === 0 ? 1 : 0, // Ensure the top image stays on top
              }}
              loading="lazy"
            />
          );
        })}
      </div>
      
      )}
    </a>
  ))}
</div>

        </div>

        {/* Blogs Section */}
        <div
          className={`${styles.blogContainer} ${activeCategory === 'blogs' ? styles.visible : styles.hidden
            } ${transitioning ? styles.transitioning : ''}   ${displayedCategory === 'blogs' ? 'display' : ''
            }`}
        >
          <div className={styles.moreHeading}>
            <h4>BLOGS</h4>
            <p>Read our latest thoughts</p>
          </div>

          <div className={styles.blogGrid}>
            {blogs.map((blog, index) => (
                
                  <TransitionLink key={blog.id} href={`/${blog.slug}`}>

              <div
                key={blog.id}
                className={styles.blogCard}
                style={{ backgroundColor: blog.backgroundColor }}
                ref={(el) => (blogsRefs.current[index] = el)}
                data-index={index}
              >
                <img
                  src={blog.thumbnail}
                  alt={`Thumbnail for ${blog.title}`}
                  className={styles.blogThumbnail}
                />
                <div className={styles.blogContent}>
                  <h5 className={styles.blogTitle}>{blog.title}</h5>
                  <div className={styles.blogLower}>
                    <p className={styles.blogMeta}>
                      {blog.date} • {blog.readTime} min read
                    </p>
                    <p className={styles.blogDescription}>{blog.description}</p>
                  </div>
                </div>
              </div>
              </TransitionLink>

            ))}
          </div>


        </div>
      </div>

      {/* Popup */}
      {selectedWork && (
        <div className={styles.popup}>
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
            {/* <div className={styles.workInternalMain}>
            <h2 className={styles.workTitle}>{selectedWork.title}</h2>
            <p className={styles.workDescription}>
              {selectedWork.description}
            </p>
          </div> */}

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
            {/* Navigation Arrows */}
            <div className={styles.popupNavigation}>
              <button className={styles.arrowLeft} onClick={handlePrevious}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" width={32} height={32} viewBox="0 0 40 40">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path fill="#363636" d="M0,20c0,11,9,20,20,20s20-9,20-20S31,0,20,0,0,9,0,20h0Z" />
                    <path fill="#fff" d="M10.59,19.39c-.35.35-.35.87,0,1.21l5.55,5.55c.35.35.87.35,1.21,0s.35-.87,0-1.21l-4.94-4.94,4.94-4.94c.35-.35.35-.87,0-1.21s-.87-.35-1.21,0c0,0-5.55,5.55-5.55,5.55ZM11.2,20.87h18.47v-1.73H11.2v1.73Z" />
                  </g>
                </svg>
              </button>
              <button className={styles.arrowRight} onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" width={32} height={32} viewBox="0 0 40 40">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path fill="#363636" d="M40,20C40,9,31,0,20,0S0,9,0,20s9,20,20,20,20-9,20-20h0Z"/>
                    <path fill="#fff" d="M29.41,20.61c.35-.35.35-.87,0-1.21l-5.55-5.55c-.35-.35-.87-.35-1.21,0s-.35.87,0,1.21l4.94,4.94-4.94,4.94c-.35.35-.35.87,0,1.21s.87.35,1.21,0c0,0,5.55-5.55,5.55-5.55ZM28.8,19.13H10.33v1.73h18.47v-1.73Z"/>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}