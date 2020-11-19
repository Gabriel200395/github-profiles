import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Styles/landing.css";

function CreateProfile() {
  const [userName, setUserName] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/profiles/${userName}`);
  };

  return (
    <div className="create-profile">
      <form className="create-profile-form" onSubmit={handleSubmit}>
        <h1 className="create-title">Crie seu Repositório do GitHub.</h1>
        <input
          placeholder="Escreva seu userName"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          required
        />
        <button>Montar Perfil</button>
      </form>
    </div>
  );
}

export default CreateProfile;
