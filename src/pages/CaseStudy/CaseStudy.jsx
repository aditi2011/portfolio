import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import hygoImage from '../../assets/case_studies/hygo_2x.png';
// import collegeCupidImage from '../../assets/case_studies/cupid_2x.png';
import LoadingPage from '../Loading/LoadingPage';
import './CaseStudy.css';

// Import hygo pages
import hygoP1 from '../../assets/case_studies/hygo/p1.png';
import hygoP2 from '../../assets/case_studies/hygo/p2.png';
import hygoP3 from '../../assets/case_studies/hygo/p3.png';
import hygoP4 from '../../assets/case_studies/hygo/p4.png';
import hygoP5 from '../../assets/case_studies/hygo/p5.png';
import hygoP6 from '../../assets/case_studies/hygo/p6.png';
import hygoP7 from '../../assets/case_studies/hygo/p7.png';
import hygoP8 from '../../assets/case_studies/hygo/p8.png';
import hygoP9 from '../../assets/case_studies/hygo/p9.png';
import hygoP10 from '../../assets/case_studies/hygo/p10.png';
import hygoP11 from '../../assets/case_studies/hygo/p11.png';
import hygoP12 from '../../assets/case_studies/hygo/p12.png';
import hygoP13 from '../../assets/case_studies/hygo/p13.png';
import hygoP14 from '../../assets/case_studies/hygo/p14.png';

// Import college cupid image
import cupidP1 from '../../assets/case_studies/cupid/Case Study Template.jpg';
import cupidP2 from '../../assets/case_studies/cupid/Case Study Template-1.jpg';
import cupidP3 from '../../assets/case_studies/cupid/Case Study Template-2.jpg';
import cupidP4 from '../../assets/case_studies/cupid/Case Study Template-3.jpg';
import cupidP5 from '../../assets/case_studies/cupid/Case Study Template-4.jpg';
import cupidP6 from '../../assets/case_studies/cupid/Case Study Template-5.jpg';
import cupidP7 from '../../assets/case_studies/cupid/Case Study Template-6.jpg';
import cupidP8 from '../../assets/case_studies/cupid/Case Study Template-7.jpg';
import cupidP9 from '../../assets/case_studies/cupid/Case Study Template-8.jpg';
import cupidP10 from '../../assets/case_studies/cupid/Case Study Template-9.jpg';
import cupidP11 from '../../assets/case_studies/cupid/Case Study Template-10.jpg';
import cupidP12 from '../../assets/case_studies/cupid/Case Study Template-11.jpg';
import cupidP13 from '../../assets/case_studies/cupid/Case Study Template-12.jpg';
import cupidP14 from '../../assets/case_studies/cupid/Case Study Template-13.jpg';
import cupidP15 from '../../assets/case_studies/cupid/Case Study Template-14.jpg';
import cupidP16 from '../../assets/case_studies/cupid/Case Study Template-15.jpg';
import cupidP17 from '../../assets/case_studies/cupid/Case Study Template-16.jpg';

// Case study data mapping
const caseStudies = {
  'hygo': {
    title: 'Hygo',
    pages: [
      { 
        id: 1, 
        title: 'Overview',
        images: [
          { src: hygoP1, alt: 'Hygo Page 1' },
          { src: hygoP2, alt: 'Hygo Page 2' },
        ]
      },
      { 
        id: 3, 
        title: 'Secondary Research',
        images: [
          { src: hygoP3, alt: 'Hygo Page 3' },
        ]
      },
      { 
        id: 4, 
        title: 'Problems',
        images: [
          { src: hygoP4, alt: 'Hygo Page 4' },
          { src: hygoP5, alt: 'Hygo Page 5' },
          { src: hygoP6, alt: 'Hygo Page 6' },
        ]
      },
      { 
        id: 7, 
        title: 'User Research',
        images: [
          { src: hygoP7, alt: 'Hygo Page 7' },
        ]
      },
      { 
        id: 8, 
        title: 'Features',
        images: [
          { src: hygoP8, alt: 'Hygo Page 8' },
          { src: hygoP9, alt: 'Hygo Page 9' },
          { src: hygoP10, alt: 'Hygo Page 10' },
          { src: hygoP11, alt: 'Hygo Page 11' },
        ]
      },
      { 
        id: 12, 
        title: 'UI',
        images: [
          { src: hygoP12, alt: 'Hygo Page 12' },
          { src: hygoP13, alt: 'Hygo Page 13' },
          { src: hygoP14, alt: 'Hygo Page 14' },
        ]
      },
    ],
    description: 'Hygo Case Study'
  },
  'cupid': {
    title: 'College Cupid',
    // 
    pages: [
      { 
        id: 1, 
        title: 'Overview',
        images: [
          { src: cupidP1, alt: 'College Cupid Page 1' },
          { src: cupidP2, alt: 'College Cupid Page 2' },
          { src: cupidP3, alt: 'College Cupid Page 3' },
          { src: cupidP4, alt: 'College Cupid Page 4' },
        ]
      },
      { 
        id: 3, 
        title: 'Research',
        images: [
          { src: cupidP5, alt: 'College Cupid Page 5' },
          { src: cupidP6, alt: 'College Cupid Page 6' },
          { src: cupidP7, alt: 'College Cupid Page 7' },
          { src: cupidP8, alt: 'College Cupid Page 8' },
          { src: cupidP9, alt: 'College Cupid Page 9' },
        ]
      },
      { 
        id: 4, 
        title: 'Problem',
        images: [
          { src: cupidP10, alt: 'College Cupid Page 10' },
          { src: cupidP11, alt: 'College Cupid Page 11' },
        ]
      },
      { 
        id: 5, 
        title: 'User Flow',
        images: [
          { src: cupidP12, alt: 'College Cupid Page 12' },
          { src: cupidP13, alt: 'College Cupid Page 13' },
          { src: cupidP14, alt: 'College Cupid Page 14' },
          { src: cupidP15, alt: 'College Cupid Page 15' },
        ]
      },
      { 
        id: 8, 
        title: 'Final Screens',
        images: [
          { src: cupidP16, alt: 'College Cupid Page 16' },
          { src: cupidP17, alt: 'College Cupid Page 17' },
        ]
      },
    ],
    description: 'College Cupid Case Study'
  }
};

const CaseStudy = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const contentRef = useRef(null);

  // Get the current case study data
  const currentCaseStudy = caseStudies[projectId];
  const hasMultiplePages = currentCaseStudy?.pages && currentCaseStudy.pages.length > 0;

  useEffect(() => {
    // Redirect if invalid project ID
    if (!currentCaseStudy) {
      navigate('/');
      return;
    }

    // Preload the first image only
    if (hasMultiplePages) {
      const img = new Image();
      img.src = currentCaseStudy.pages[0].images[0].src;
      img.onload = () => {
        setImageLoaded(true);
      };
    } else {
      const img = new Image();
      img.src = currentCaseStudy.image;
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [currentCaseStudy, navigate, hasMultiplePages]);

  // Handle loading screen completion from LoadingPage component
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Scroll spy for navbar using IntersectionObserver
  useEffect(() => {
    if (loading || !hasMultiplePages || !contentRef.current) return;

    const observerOptions = {
      root: contentRef.current,
      rootMargin: '-10% 0px -70% 0px', // Trigger when section enters the top 10-30% range
      threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) // More granular thresholds (0, 0.05, 0.1, ..., 1)
    };

    // Store all observed entries for more intelligent decision making
    const intersectingEntries = new Map();

    const observerCallback = (entries) => {
      // Update the map with current intersection states
      entries.forEach((entry) => {
        const pageId = parseInt(entry.target.id.replace('page-', ''));
        
        if (entry.isIntersecting) {
          intersectingEntries.set(pageId, {
            ratio: entry.intersectionRatio,
            boundingRect: entry.boundingClientRect,
            rootBounds: entry.rootBounds
          });
        } else {
          intersectingEntries.delete(pageId);
        }
      });

      // Find the most appropriate active section
      if (intersectingEntries.size > 0) {
        // Convert to array and sort by page ID
        const sortedEntries = Array.from(intersectingEntries.entries()).sort((a, b) => a[0] - b[0]);
        
        // Prioritize sections that are near the top of the viewport
        let bestSection = sortedEntries[0][0];
        let bestScore = -Infinity;

        sortedEntries.forEach(([pageId, data]) => {
          // Calculate a score based on:
          // 1. Intersection ratio (higher is better)
          // 2. Position relative to viewport top (closer to top is better)
          const rootTop = data.rootBounds?.top || 0;
          const rootHeight = data.rootBounds?.height || contentRef.current.clientHeight;
          const distanceFromTop = Math.abs(data.boundingRect.top - rootTop);
          const normalizedDistance = 1 - Math.min(distanceFromTop / rootHeight, 1);
          
          // Weighted score: 60% intersection ratio, 40% proximity to top
          const score = (data.ratio * 0.6) + (normalizedDistance * 0.4);
          
          if (score > bestScore) {
            bestScore = score;
            bestSection = pageId;
          }
        });

        setActiveSection(bestSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all page containers
    const pageElements = contentRef.current.querySelectorAll('.page-container');
    pageElements.forEach((element) => observer.observe(element));

    return () => {
      intersectingEntries.clear();
      pageElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [hasMultiplePages, loading]);

  const scrollToPage = (pageNumber) => {
    if (!contentRef.current) return;
    
    const element = document.getElementById(`page-${pageNumber}`);
    if (element) {
      const container = contentRef.current;
      const elementTop = element.offsetTop;
      
      // Smooth scroll within the container
      container.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
      
      // Immediately update active section
      setActiveSection(pageNumber);
    }
  };

  const handleClose = () => {
    // close the tab and navigate to home
    window.close();
  };

  // Don't render if invalid case study
  if (!currentCaseStudy) {
    return null;
  }

  return (
    <div className="case-study-container">
      {loading ? (
        <LoadingPage onFinish={handleLoadingComplete} />
      ) : (
        <div className="case-study-content" ref={contentRef}>
          <button className="close-button" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Navigation Sidebar */}
          {hasMultiplePages && (
            <nav className="page-navigation">
              {/* TOC Panel that appears on hover */}
              <div className="toc-panel">
                <div className="toc-content">
                  {currentCaseStudy.pages.map((page) => (
                    <a
                      key={page.id}
                      href={`#page-${page.id}`}
                      className={`toc-item ${activeSection === page.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToPage(page.id);
                      }}
                    >
                      <span className="toc-text">
                        {page.title || `Page ${page.id}`}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Progress Bars */}
              <div className="nav-content">
                {currentCaseStudy.pages.map((page) => (
                  <div key={page.id}>
                    <button
                      className={`nav-item ${activeSection === page.id ? 'active' : ''}`}
                      // onClick={() => scrollToPage(page.id)}
                      title={page.title || `Page ${page.id}`}
                      aria-label={`Go to ${page.title || `page ${page.id}`}`}
                    />
                  </div>
                ))}
              </div>
            </nav>
          )}

          <div className="images-container">
            {hasMultiplePages ? (
              // Render sections with their grouped images
              currentCaseStudy.pages.map((section) => (
                <div 
                  key={section.id}
                  className="page-container"
                  id={`page-${section.id}`}
                >
                  {section.images.map((image, index) => (
                    <LazyLoadImage
                      key={`${section.id}-${index}`}
                      src={image.src}
                      alt={image.alt}
                      effect="blur"
                      threshold={200}
                      wrapperClassName="lazy-load-wrapper"
                      className="case-study-image"
                    />
                  ))}
                </div>
              ))
            ) : (
              // Single image fallback
              <div className="image-container">
                <img src={currentCaseStudy.image} alt={currentCaseStudy.description} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
