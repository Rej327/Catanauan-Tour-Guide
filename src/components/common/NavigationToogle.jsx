import React from "react";

const NavigationToggle = () => {
  return (
    <div>
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
          <li>
            <a href="https://www.facebook.com/saldy.resultay.9" target="_blank">
              Reservation
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationToggle;
