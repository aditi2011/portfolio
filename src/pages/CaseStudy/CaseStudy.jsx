import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import hygoImage from '../../assets/case_studies/hygo_2x.png';
import './CaseStudy.css';

const CaseStudy = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = hygoImage;
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
  }, [imageLoaded]);

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

  return (
    <div className="case-study-container">
      {loading ? (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="spinner"></div>
            <h2>Loading Case Study...</h2>
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
            <img src={hygoImage} alt="Hygo Case Study" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
