import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../ContextApi/AuthProvider";

function SignIn() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const { handleAuthChange } = useCreateAuthDispatchContext();

  const navigate = useNavigate();

  const handleClick = () => {
    if (userName !== "admin" || password !== "admin123") {
      return;
    }
    handleAuthChange(true);
    navigate("/cart");
  };
  return (
    <>
      <div className="App">
        <h2>SignIn</h2>
        <label>UserName</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn-sign-in" onClick={handleClick}>
          Signin
        </button>
      </div>
    </>
  );
}

export default SignIn;
