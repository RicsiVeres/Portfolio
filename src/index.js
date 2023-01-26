import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./components/index.css";
import Header from "./components/navbar/Header";
import Main from "./components/content/Main";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);

reportWebVitals();
