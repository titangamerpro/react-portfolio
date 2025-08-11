import React from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export const SlickNextArrow = ({ onClick,activeButton }) => {
    return (
      <button 
        className={`prev btn slick-btn ${activeButton === 'prev' ? 'active' : ''}`} 
        onClick={onClick}
      >
        
          <FaArrowLeft className="" />
      </button>
    );
  };

  export const SlickPrevArrow = ({ onClick, activeButton }) => {
    return (
      <button className={`btn next slick-btn ${activeButton === 'next' ? 'active' : ''}`} onClick={onClick}>
        <FaArrowRight className="" />
      </button>
    );
  };
  
  

