import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import "./navbar.css";
import { menuItems } from "./menuItems";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="logo" className="navbar_logo" />
        <div className="navbar_right">
          <div className="navbar_menu">
            {menuItems.map((item, index) => (
              <a href={item} key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="menu_icon" onClick={() => setIsOpen(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={search} alt="search" className="search_icon" />
        </div>
      </div>
      <div
        className={
          isOpen === false ? "mobile_menu display_none" : "mobile_menu"
        }
        onClick={() => setIsOpen(false)}
      >
        <div className="menu_close_icon">
          <div></div>
          <div></div>
        </div>
        <div className="mobile_menu_items">
          {menuItems.map((item, index) => (
            <a href={item} key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
