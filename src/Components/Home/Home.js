import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function loading() {
      Axios.get("https://api.github.com/users/gabriel200395").then((res) => {
        setUsers(res.data);
      });
    }
    loading();
  }, []);

  return (
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
  );
}
