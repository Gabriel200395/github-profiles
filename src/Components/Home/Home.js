import React, { useState, useEffect } from "react";
import githubApi from "../../services/githubApi";
import ErrorPagina from "../ErrorPagina/ErrorPagina";

export default function Home({ userName }) {
  const [user, setUser] = useState({
    avatarUrl: "",
    name: "",
    description: "",
    userName: "",
    publicReposCount: "",
    followersCount: "",
    createdAt: "",
    createDistance: "",
  });

  const [erro, setError] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await githubApi.fetchUserData(userName);
        setUser(response);
      } catch {
        setError(true);
      }
    }

    fetchUserData();
  }, []);

  if (erro) {
    return <ErrorPagina />;
  }

  return (
    <div className="landing-container-user">
      <img className="imagem" src={user.avatarUrl} alt={user.name} />
      <h3 className="titulo-name">{user.name}</h3>
      <h1 className="titulo">{user.description}</h1>
      <ul>
        <li>Username : {user.userName}</li>
        <li>Repositório : {user.publicReposCount}</li>
      </ul>
      <ul>
        <li>Seguidores : {user.followersCount}</li>
        <li>Criado {user.createDistance}</li>
      </ul>
    </div>
  );
}
