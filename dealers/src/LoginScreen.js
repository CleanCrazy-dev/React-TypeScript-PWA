import React from "react";
import loginImage from "./LoginImage.png";

export const LoginScreen = () => {
  return (
    <div className="login-container">
      <div>
        <img src={loginImage} />
      </div>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};
