import React from "react";
import "../../Styles/landing.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="landing-navbar">
      <Link to="/" className="Logo">
        Github Projects
      </Link>
      <ul>
        <li>
          <a
            target="blank"
            href="https://www.linkedin.com/in/gabriel-souza-408451196/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a target="blank" href="https://github.com/Gabriel200395">
            GitHub
          </a>
        </li>
        <li>
          <a target="blank" href="https://gabriel200395.github.io/Portfolio/">
            Portfolio
          </a>
        </li>
        <li>
          <Link to="/create-profile">Criar Perfil </Link>
        </li>
      </ul>
    </div>
  );
}
