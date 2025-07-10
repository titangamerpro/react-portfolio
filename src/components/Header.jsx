import React from "react";
import Nav from "./Nav";


const Header = () => {
  return (
    <header className="header">
      <div className="header-fixed">
        <div className="container header-wrapper">
          <div className="burger"></div>
          <a href="" className="header-logo">
            Michel
          </a>
            <Nav/>
          <div className="header-block">
            <button className="btn swich"></button>
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
