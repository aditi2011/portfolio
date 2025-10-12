import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.classList.contains('clickable') ||
        target.classList.contains('project-card') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.clickable') ||
        target.closest('.project-card.clickable');
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {isPointer && (
        <div
          className={`custom-cursor-dot ${isPointer ? 'pointer' : ''}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            }}        />
        )}

    </>
  );
};

export default CustomCursor;
