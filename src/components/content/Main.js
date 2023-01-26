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
        <h4 id="job">Junior Frontend Developer</h4>
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
          class="gg-facebook media-btn"
        ></a>
        <a
          href="https://www.instagram.com/ricsiveres/"
          class="gg-instagram media-btn"
        ></a>
        <a
          href="https://github.com/RicsiVeres"
          class="gg-git-fork media-btn"
        ></a>
      </div>
    </div>
  );
}
export default Main;
