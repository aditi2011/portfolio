import React, { useState } from 'react';
import './HoverImageReveal.css';

const HoverImageReveal = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="hover-image-reveal-container">
      <div className="menu-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${hoveredItem === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
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
            {hoveredItem === index && item.image && (
              <div
                className="hover-image"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImageReveal;