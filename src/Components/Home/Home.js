import React, { useState, useEffect } from "react";
import Axios from "axios";
import api from "../../services/api";
import { set } from "date-fns";

export default function Home() {
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

  useEffect(() => {
    async function fetchUserData() {
      const response = await api.fetchUserData("Gabriel200395");
      setUser(response);
    }

    fetchUserData();
  }, []);

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
