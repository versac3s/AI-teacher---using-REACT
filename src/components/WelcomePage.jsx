import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; // Import the CSS file

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="headings">
        <h1 className="heading">Welcome to Pi</h1>
      </div>
      <div className="buttons">
        <button className="button1" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
        <button className="button1" onClick={() => navigate("/signin")}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
