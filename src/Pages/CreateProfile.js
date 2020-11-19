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
        <h1 className="create-title">Crie o seu proprío Github Profile.</h1>
        <input
          placeholder="Degite o seu ursename do Github"
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
