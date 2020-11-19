import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/landing.css";

function ErrorPagina() {
  return (
    <div className="create-profile-error">
      <h1 className="create-profile-title-error">
        Esse Repositório não Existe no Github.
      </h1>
    </div>
  );
}

export default ErrorPagina;
