import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Styles/global.css";
import "../Styles/landing.css";

export default function Landing() {
  const [users, setUsers] = useState([]);
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    function loading() {
      Axios.get("https://api.github.com/users/gabriel200395").then((res) => {
        setUsers(res.data);
      });
    }
    loading();
  }, []);

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
    <section className="landing">
      <div className="landing-navbar">
        <h1 className="Logo">Github Projects</h1>
        <ul>
          <li>Linkdin</li>
          <li>GitHub</li>
          <li>Portfolio</li>
        </ul>
      </div>
      <div className="landing-container-user">
        <img className="imagem" src={users.avatar_url} alt={users} />
        <h3 className="titulo-name">{users.name}</h3>
        <h1 className="titulo">{users.bio}</h1>
        <ul>
          <li>Username : {users.login}</li>
          <li>Repositório : {users.public_repos}</li>
        </ul>
        <ul>
          <li>Seguidores : {users.followers}</li>
          <li>Criado : {users.created_at}</li>
        </ul>
      </div>

      {/*Repositorios */}
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

      <footer>
        <p>Developer Gabriel</p>
      </footer>
    </section>
  );
}
