import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/search" style={{ margin: "10px" }}>Search</Link>
      <Link to="/login" style={{ margin: "10px" }}>Login</Link>
      <Link to="/signup" style={{ margin: "10px" }}>Signup</Link>
      <Link to="/dashboard" style={{ margin: "10px" }}>Dashboard</Link>
    </nav>
  );
}
