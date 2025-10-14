import React from 'react';
import './LoadingPage.css';

// Import images
import bookThumb from '../../assets/book_thumb.jpeg';
import cupidThumb from '../../assets/cupid_thumb.jpeg';
import hygoThumb from '../../assets/hygo_thumb.jpeg';
import lohitThumb from '../../assets/lohit_thumb.jpeg';
import rareThumb from '../../assets/rare_thumb.jpeg';
import stagedThumb from '../../assets/staged_thumb.jpg';
import stagedThumb2 from '../../assets/staged_thumb2.jpeg';

const LoadingPage = () => {
  // Create an array of images to use in the columns
  const images = [
    bookThumb,
    cupidThumb,
    hygoThumb,
    lohitThumb,
    rareThumb,
    stagedThumb,
    stagedThumb2
  ];

  // Duplicate images to create seamless scrolling effect
  const column1Images = [...images, ...images];
  const column2Images = [...images, ...images];
  const column3Images = [...images, ...images];
//   const column4Images = [...images, ...images];

  return (
    <div className="loading-page">
      <div className="loading-columns">
        {/* Column 1 - Scrolls Down */}
        <div className="loading-column scroll-down">
          {column1Images.map((img, index) => (
            <div key={`col1-${index}`} className="image-wrapper">
              <img src={img} alt={`Loading ${index}`} />
            </div>
          ))}
        </div>

        {/* Column 2 - Scrolls Up */}
        <div className="loading-column scroll-up">
          {column2Images.map((img, index) => (
            <div key={`col2-${index}`} className="image-wrapper">
              <img src={img} alt={`Loading ${index}`} />
            </div>
          ))}
        </div>

        {/* Column 3 - Scrolls Down */}
        <div className="loading-column scroll-down">
          {column3Images.map((img, index) => (
            <div key={`col3-${index}`} className="image-wrapper">
              <img src={img} alt={`Loading ${index}`} />
            </div>
          ))}
        </div>

        {/* Column 4 - Scrolls Up */}
        {/* <div className="loading-column scroll-up">
          {column4Images.map((img, index) => (
            <div key={`col4-${index}`} className="image-wrapper">
              <img src={img} alt={`Loading ${index}`} />
            </div>
          ))}
        </div> */}
      </div>

      {/* Optional: Loading Text Overlay */}
      {/* <div className="loading-overlay">
        <h1 className="loading-text">Loading...</h1>
      </div> */}
    </div>
  );
};

export default LoadingPage;
