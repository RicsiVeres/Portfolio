import React from "react";
import "./main.css";
import img from "./d.png";
function Main() {
  return (
    <div className="content">
      <div className="left-Side">
        <p>
          Hello, <span id="im">I'm</span>
        </p>
        <h3 id="name">Veres Richard</h3>
        <div className="hero">
          <ul className="dynamic-txts">
            <li>
              <span>Junior</span>
            </li>
            <li>
              <span>Frontend</span>
            </li>
            <li>
              <span>Developer</span>
            </li>
          </ul>
        </div>
        <p id="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <a className="btn">Let's Talk</a>
      </div>
      <div className="right-Side">
        <img src={img} alt="Logo" />
      </div>
      <div id="socialmedia">
        <a
          href="https://www.facebook.com/ricsi.veres.94/"
          className="fa fa-facebook media-btn"
        ></a>
        <a
          href="https://www.instagram.com/ricsiveres/"
          className="fa fa-instagram media-btn"
        ></a>
        <a
          href="https://github.com/RicsiVeres"
          className="fa fa-github media-btn"
        ></a>
      </div>
    </div>
  );
}
export default Main;
