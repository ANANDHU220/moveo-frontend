import { useEffect, useState } from "react";
import API from "../api/api";

function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    API.get("/auth/test")
      .then(() => setMsg("✅ Backend Connected"))
      .catch(() => setMsg("❌ Cannot reach backend"));
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">🚄 Moveo – Moving You Faster</h1>
      <p className="mt-6 text-lg">{msg}</p>
    </div>
  );
}

export default Home;
