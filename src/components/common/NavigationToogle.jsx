import React from "react";

const NavigationToggle = ({ className }) => {
  return (
    <div className={`${className}`}>
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/Contact-us">Contact Us</a>
          </li>
          <li>Reservation</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationToggle;
