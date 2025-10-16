import React, { useEffect, useState } from 'react';
import './LoadingPage.css';

import bookThumb from '../../assets/book_thumb.jpeg';
import cupidThumb from '../../assets/cupid_thumb.jpeg';
import hygoThumb from '../../assets/hygo_thumb.jpeg';
import lohitThumb from '../../assets/lohit_thumb.jpeg';
import rareThumb from '../../assets/rare_thumb.jpeg';
import stagedThumb from '../../assets/staged_thumb.jpg';
import stagedThumb2 from '../../assets/staged_thumb2.jpeg';

const LoadingPage = ({ onFinish }) => {
  const images = [bookThumb, cupidThumb, hygoThumb, lohitThumb, rareThumb, stagedThumb, stagedThumb2];
  const columnImages = [...images, ...images];

  const [loadedCols, setLoadedCols] = useState(0);
  const [scrollPhase, setScrollPhase] = useState(false);

  // Delay between column entries
  useEffect(() => {
    const sequence = setInterval(() => {
      setLoadedCols(prev => {
        if (prev < 3) return prev + 1;
        clearInterval(sequence);
        // Trigger scroll effect after a short pause
        setTimeout(() => setScrollPhase(true), 500);
        // Complete loading after scroll phase
        setTimeout(() => onFinish?.(), 4000);
        return prev;
      });
    }, 700);
    return () => clearInterval(sequence);
  }, [onFinish]);

  return (
    <div className={`loading-page ${scrollPhase ? 'reveal-phase' : ''}`}>
      <div className="loading-columns">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className={`loading-column ${i % 2 === 0 ? 'scroll-down' : 'scroll-up'} ${loadedCols > i ? 'visible' : ''}`}
          >
            {columnImages.map((img, index) => (
              <div key={`col${i}-${index}`} className="image-wrapper">
                <img src={img} alt={`Loading ${index}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
