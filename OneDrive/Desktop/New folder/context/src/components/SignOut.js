import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useCreateAuthDispatchContext } from "../ContextApi/AuthProvider";

function SignOut() {
  const { handleAuthChange } = useCreateAuthDispatchContext();
  const navigate = useNavigate();

  const handleClick = () => {
    handleAuthChange(false);

    navigate("/");
  };
  return (
    <>
      <button className="btn" onClick={handleClick}>
        SignOut
      </button>
    </>
  );
}
export default SignOut;
