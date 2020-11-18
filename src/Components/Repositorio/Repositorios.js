import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../../Styles/landing.css";

export default function Repositorios() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    function repo() {
      Axios.get("https://api.github.com/users/gabriel200395/repos").then(
        (res) => {
          setRepositorios(res.data);
        }
      );
    }
    repo();
  }, []);

  return (
    <section className="repo">
      <h1>Repositórios</h1>
      <div className="landing-container-repo">
        {repositorios.map((repositorio) => (
          <div className="landing-repo-card" key={repositorio.id}>
            <h3>{repositorio.name}</h3>
            <p className="landing-repo-description">
              {repositorio.description}
            </p>
            <ul className="landing-repo-github">
              <li>{repositorio.language}</li>
              <li>{repositorio.updated_at}</li>
            </ul>
            <a className="landing-repo-button" href={repositorio.svn_url}>
              Github
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
