import React from "react";
import { socialLinks } from "../utils/data";

const SocialIcon = () => {
  return (
    <div className="social">
      {socialLinks &&
        socialLinks.map((item, idx) => (
          <a href={item.href} className="social-link" key={idx}>
            {item.icon}
          </a>
        ))}
    </div>
  );
};

export default SocialIcon;
