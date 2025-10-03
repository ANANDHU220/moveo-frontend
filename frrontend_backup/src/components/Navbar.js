import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">🚄 Moveo</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/search">Search Trains</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
