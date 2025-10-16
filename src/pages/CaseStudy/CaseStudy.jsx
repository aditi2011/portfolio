import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import hygoImage from '../../assets/case_studies/hygo_2x.png';
import collegeCupidImage from '../../assets/case_studies/cupid_2x.png';
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

// Case study data mapping
const caseStudies = {
  'hygo': {
    title: 'Hygo',
    pages: [
      { id: 1, src: hygoP1, alt: 'Hygo Page 1', title: 'Overview' },
      { id: 3, src: hygoP3, alt: 'Hygo Page 3', title: 'Secondary Research' },
      { id: 4, src: hygoP4, alt: 'Hygo Page 4', title: 'Problems' },
      { id: 7, src: hygoP7, alt: 'Hygo Page 7', title: 'User Research' },
      { id: 8, src: hygoP8, alt: 'Hygo Page 8', title: 'Features' },
      { id: 12, src: hygoP12, alt: 'Hygo Page 12', title: 'UI' },
    ],
    allPages: [
      { id: 1, src: hygoP1, alt: 'Hygo Page 1', title: 'Overview' },
      { id: 2, src: hygoP2, alt: 'Hygo Page 2', title: 'Project Overview' },
      { id: 3, src: hygoP3, alt: 'Hygo Page 3', title: 'Secondary Research' },
      { id: 4, src: hygoP4, alt: 'Hygo Page 4', title: 'Problems' },
      { id: 5, src: hygoP5, alt: 'Hygo Page 5', title: 'Wireframes' },
      { id: 6, src: hygoP6, alt: 'Hygo Page 6', title: 'Visual Design' },
      { id: 7, src: hygoP7, alt: 'Hygo Page 7', title: 'User Research' },
      { id: 8, src: hygoP8, alt: 'Hygo Page 8', title: 'Features' },
      { id: 9, src: hygoP9, alt: 'Hygo Page 9', title: 'Prototyping' },
      { id: 10, src: hygoP10, alt: 'Hygo Page 10', title: 'Testing Results' },
      { id: 11, src: hygoP11, alt: 'Hygo Page 11', title: 'Final Design' },
      { id: 12, src: hygoP12, alt: 'Hygo Page 12', title: 'UI' },
      { id: 13, src: hygoP13, alt: 'Hygo Page 13', title: 'Impact & Metrics' },
      { id: 14, src: hygoP14, alt: 'Hygo Page 14', title: 'Conclusion' },
    ],
    description: 'Hygo Case Study'
  },
  'college-cupid': {
    title: 'College Cupid',
    image: collegeCupidImage,
    description: 'College Cupid Case Study'
  }
};

// Page Image Component using react-lazy-load-image-component
const PageImage = ({ src, alt, pageNumber }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`page-container ${isLoaded ? 'loaded' : ''}`}
      id={`page-${pageNumber}`}
    >
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        threshold={200}
        onLoad={() => setIsLoaded(true)}
        wrapperClassName="lazy-load-wrapper"
        className="case-study-image"
      />
    </div>
  );
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
      img.src = currentCaseStudy.pages[0].src;
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

  // Scroll spy for navbar
  useEffect(() => {
    if (!hasMultiplePages) return;

    const handleScroll = () => {
      const pageElements = document.querySelectorAll('.page-container');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      pageElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          const pageId = element.id.replace('page-', '');
          setActiveSection(parseInt(pageId));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMultiplePages]);

  const scrollToPage = (pageNumber) => {
    const element = document.getElementById(`page-${pageNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                      onClick={() => scrollToPage(page.id)}
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
              // Render all pages, including those not in the navbar
              currentCaseStudy.allPages.map((page) => (
                <PageImage
                  key={page.id}
                  src={page.src}
                  alt={page.alt}
                  pageNumber={page.id}
                />
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
