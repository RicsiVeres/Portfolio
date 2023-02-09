import React from "react";
import "./header.css";
function Header() {
  return (
    <div>
      <div className="Navbar">
        <h1 id="portfolio">Portfolio</h1>
        <div className="navBtn">
          <a className="active">Home</a>
          <a>Projects</a>
          <a>Resume</a>
        </div>
      </div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="jobs">
              <li>Projects</li>
            </a>
            <a href="th">
              <li>Resume</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
