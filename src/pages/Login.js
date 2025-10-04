// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 👉 fake login just for now
    if (email === "test@test.com" && password === "1234") {
      localStorage.setItem("auth", "true"); // mark as logged in
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔑 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>

      {/* Signup link at bottom-right */}
      <div style={{ position: "absolute", bottom: "20px", right: "20px" }}>
        <Link to="/signup">Don’t have an account? Signup</Link>
      </div>
    </div>
  );
}

export default Login;
