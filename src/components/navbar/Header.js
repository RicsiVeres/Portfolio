import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="Navbar">
      <h1 id="portfolio">Portfolio</h1>
      <div className="navBtn">
        <a className="active">Home</a>
        <a>Projects</a>
        <a>Resume</a>
      </div>
    </div>
  );
}
export default Header;
