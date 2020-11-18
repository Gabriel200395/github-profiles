import React from "react";
import "../../Styles/landing.css";

export default function Navbar() {
  return (
    <div className="landing-navbar">
      <h1 className="Logo">Github Projects</h1>
      <ul>
        <li>
          <a>Linkdin</a>
        </li>
        <li>
          <a>GitHub</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
      </ul>
    </div>
  );
}
