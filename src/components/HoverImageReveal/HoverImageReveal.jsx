import React, { useState, useEffect, useRef } from 'react';
import './HoverImageReveal.css';

const HoverImageReveal = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    let animationFrameId = null;

    const updateActiveItem = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(viewportCenter - itemCenter);

        // Only consider items that are at least 30% visible
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / rect.height;

        if (visibilityRatio >= 0.3 && distanceFromCenter < closestDistance) {
          closestDistance = distanceFromCenter;
          closestIndex = index;
        }
      });

      if (closestIndex !== -1 && closestIndex !== activeItem) {
        setActiveItem(closestIndex);
      }
    };

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateActiveItem);
    };

    // Initial check
    updateActiveItem();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, items.length, activeItem]);

  // Desktop hover detection based on mouse position
  useEffect(() => {
    if (isMobile) return;

    let lastMouseX = null;
    let lastMouseY = null;

    const checkHover = (x, y) => {
      let foundHover = null;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        
        // Check if mouse is within the bounds of this item
        if (
          x >= rect.left &&
          x <= rect.right &&
          y >= rect.top &&
          y <= rect.bottom
        ) {
          foundHover = index;
        }
      });

      setHoveredItem(foundHover);
    };

    const handleMouseMove = (e) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      checkHover(lastMouseX, lastMouseY);
    };

    const handleScroll = () => {
      // Recheck hover state on scroll using last known mouse position
      if (lastMouseX !== null && lastMouseY !== null) {
        checkHover(lastMouseX, lastMouseY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, items.length]);

  return (
    <div className="hover-image-reveal-container">
      <div className="menu-items">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`menu-item ${hoveredItem === index ? 'hovered' : ''} ${isMobile && activeItem === index ? 'active' : ''}`}
          >
            <div className="menu-item-content">
                {/* <div className='menu-item-index-div'>
                    <span className="menu-item-index">{`0${index + 1}`}</span>
                </div> */}
                <div className='menu-item-left-div'>
                    <span className="menu-item-title">{item.title}</span>
                    <div className="menu-item-tags">
                        {item.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='menu-item-right-div menu-item-description'>
                    {/* <div className="menu-item-description"> */}
                        {Array.isArray(item.description) ? (
                            item.description.map((line, lineIndex) => (
                                <p key={lineIndex} className="description-line">{line}</p>
                            ))
                        ) : (
                            <p className="description-line">{item.description}</p>
                        )}
                    {/* </div> */}
                </div>
            </div>
            {!isMobile && hoveredItem === index && item.image && (
              <div
                className="hover-image"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              />
            )}
            {isMobile && item.image && (
              <div className={`mobile-accordion-image ${activeItem === index ? 'expanded' : ''}`}>
                <img src={item.image} alt={item.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImageReveal;