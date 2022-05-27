import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import "./navbar.css";
import { menuItems } from "./menuItems";

export const Navbar = () => {
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
          {/* <div>
            <p>ENGLISH</p>
          </div> */}
          <img src={search} alt="search" className="search_icon" />
        </div>
      </div>
    </section>
  );
};
