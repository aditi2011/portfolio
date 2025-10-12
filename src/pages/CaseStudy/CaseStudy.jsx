import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import hygoImage from '../../assets/case_studies/hygo_2x.png';
import collegeCupidImage from '../../assets/case_studies/cupid_2x.png';
import './CaseStudy.css';

// Case study data mapping
const caseStudies = {
  'hygo': {
    title: 'Hygo',
    image: hygoImage,
    description: 'Hygo Case Study'
  },
  'college-cupid': {
    title: 'College Cupid',
    image: collegeCupidImage,
    description: 'College Cupid Case Study'
  }
};

const CaseStudy = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { projectId } = useParams();

  // Get the current case study data
  const currentCaseStudy = caseStudies[projectId];

  useEffect(() => {
    // Redirect if invalid project ID
    if (!currentCaseStudy) {
      navigate('/');
      return;
    }

    // Preload the image
    const img = new Image();
    img.src = currentCaseStudy.image;
    img.onload = () => {
      setImageLoaded(true);
    };

    // Minimum loading time for smooth transition
    const timer = setTimeout(() => {
      if (imageLoaded) {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [imageLoaded, currentCaseStudy, navigate]);

  useEffect(() => {
    if (imageLoaded && loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [imageLoaded, loading]);

  const handleClose = () => {
    navigate('/');
  };

  // Don't render if invalid case study
  if (!currentCaseStudy) {
    return null;
  }

  return (
    <div className="case-study-container">
      {loading ? (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="spinner"></div>
            <h2>Loading {currentCaseStudy.title}...</h2>
          </div>
        </div>
      ) : (
        <div className="case-study-content">
          <button className="close-button" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="image-container">
            <img src={currentCaseStudy.image} alt={currentCaseStudy.description} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
