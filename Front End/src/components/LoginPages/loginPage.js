import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../student.png";
import "./loginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("login data: ", { username: username, password: password });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/signin`,
        {
          username: username,
          password: password,
        }
      );
      console.log(response.data);
      const token = response.data.data.token;

      // Check is request was a success and token was sent
      if (response.status === 200 && token) {
        // Save the token
        localStorage.setItem("token", token);
        // Redirect user to home page
        navigate("/Home");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="newApp">
      <div className="loginBox">
        <img src={Logo} alt="" />
        <h1>TalkHarmony</h1>
      </div>
      <div className="loginForm">
        <form onSubmit={handleSubmit} action="#">
          <input
            type="text"
            name="emailOrUsername"
            placeholder="Email or Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input className="sub" type="submit" value="Login" />
        </form>
        {error && <div className="error">{error}</div>}
      </div>
      <div className="Questions">
        <Link to="/ForgetPage">Forgot Password?</Link>
        <br />
        <Link to="/SignupPage">New User? SignUp Now</Link>
      </div>
    </div>
  );
}
