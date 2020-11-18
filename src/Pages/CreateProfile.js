import { useState } from "react";
import { useHistory } from "react-router-dom";

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
    <div className="Search">
      <input value={userName} name="userName" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Montar Perfil</button>
    </div>
  );
}

export default CreateProfile;
