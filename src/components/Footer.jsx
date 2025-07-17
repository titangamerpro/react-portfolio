import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <SocialIcon/>
      <p className="copyright">© {year} - DevMarushev</p>
    </footer>
  );
};

export default Footer;
