import React from "react";
import { menuItems } from "../utils/data";
import { Link } from "react-scroll";



const Nav = ({iconMenu}) => {
  // console.log(iconMenu);
  return (
    <nav className={`nav ${iconMenu ? '' : 'active' }`}>
      <ul className="menu">
        {menuItems &&
          menuItems.map((item, idx) => (
            <li key={idx} className="menu-item">
              <Link to={item.to} className="menu-link">
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
