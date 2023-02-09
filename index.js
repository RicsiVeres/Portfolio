import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./components/index.css";
import Header from "./components/navbar/Header";
import Main from "./components/content/Main";
import Project from "./components/Projects/Project";
import Technologies from "./components/technologies/technologies";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <div className="cimke">
      <h1>Projects</h1>
    </div>
    <div className="centered" id="jobs">
      <Project
        name="Project 1"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when"
        img="https://images.pexels.com/photos/972220/pexels-photo-972220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        link="#"
      />
      <Project
        name="Project 2"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when"
        img="https://images.pexels.com/photos/972220/pexels-photo-972220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        link="#"
      />
      <Project
        name="Project 3"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when"
        img="https://images.pexels.com/photos/972220/pexels-photo-972220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        link="#"
      />
      <Project
        name="Project 4"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when"
        img="https://images.pexels.com/photos/972220/pexels-photo-972220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        link="#"
      />
    </div>
    <div className="tech" id="th">
      <div className="cimke">
        <h1>Technologies</h1>
      </div>
      <Technologies lang="Html" lvl="Advanced" value="95" />
      <Technologies lang="CSS" lvl="Advanced" value="75" />
      <Technologies lang="Javascript" lvl="Beginner" value="60" />
      <Technologies lang="React" lvl="I learn" value="34" />
    </div>
  </React.StrictMode>
);

reportWebVitals();
