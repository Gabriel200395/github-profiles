import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "../../Styles/landing.css";

export default function Repositorios() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      const response = await api.fetchRepositories("Gabriel200395");
      setRepositorios(response);
    }
    fetchRepositories();
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
              <li>atualizado {repositorio.updatedDistance}</li>
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
