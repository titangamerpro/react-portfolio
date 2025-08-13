import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const SlickNextArrow = ({ onClick, activeButton, setActiveButton }) => {
  return (
    <button
      className={`prev btn slick-btn ${
        activeButton === "prev" ? "active" : ""
      }`}
      onClick={(e) => {
        setActiveButton("prev");
        onClick?.(e);
      }}
    >
      <FaArrowRight className="" />
    </button>
  );
};

export const SlickPrevArrow = ({ onClick, activeButton, setActiveButton }) => {
  return (
    <button
      className={`btn next slick-btn ${
        activeButton === "next" ? "active" : ""
      }`}
      onClick={(e) => {
        setActiveButton("next");
        onClick?.(e);
      }}
    >
      <FaArrowLeft className="" />
    </button>
  );
};
