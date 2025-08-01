import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isActive, setIsActive] = useState( () => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') return true
    if (saved === 'light') return false
  });

  const [iconMenu, setIconMenu] = useState(true)

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   const usePreferDark = window.matchMedia("prefers-color-scheme:dark").matches
  //   const dark = savedTheme === "dark" || (!savedTheme && usePreferDark)
  //   setIsActive(dark)
  // },[])

  useEffect(() => {
    const root = document.body
    if (isActive){
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    else{
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isActive])

  const toggleTheme = () => setIsActive(prev => !prev)

  const handleMenu = () => {
    setIconMenu(!iconMenu)
  }
  

  return (
    <header className="header">
      <div className="header-fixed">
        <div className="container header-wrapper">
          <div className="burger" onClick={handleMenu} >
            {iconMenu ? <IoIosMenu/> : <FaXmark/> }
          </div>
          <a href="" className="header-logo">
            Michel
          </a>
          <Nav iconMenu={iconMenu} />
          <div className="header-block">
            <button className="btn swich" onClick={toggleTheme}>
              {isActive ? <IoSunnyOutline/> : <FaMoon/>}
            </button>
            <a href="" className="header-link">
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
