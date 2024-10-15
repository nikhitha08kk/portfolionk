import React, { useEffect, useState } from 'react';
import "./style.css";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    // Show button when page is scrolled down by 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <button onClick={scrollToTop} className="go-top-button">
          &#8679; {/* Upward arrow icon */}
        </button>
      )}
    </div>
  );
}

export default GotoTop;
