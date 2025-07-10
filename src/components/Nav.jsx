import React from "react";
import { menuItems } from "../utils/data";
import { Link } from "react-scroll";


const Nav = () => {
  return (
    <nav className="nav">
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
