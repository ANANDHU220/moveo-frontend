import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMsg("✅ Login successful");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setMsg("❌ " + err.response.data.msg);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="w-full border p-2" name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button className="w-full bg-green-600 text-white py-2">Login</button>
      </form>
      <p className="mt-3">{msg}</p>
    </div>
  );
}

export default Login;
