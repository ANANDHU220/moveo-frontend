import { useState } from "react";

export default function SearchTrains() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching trains:", { from, to, date });
    // 🔗 Next: connect to backend API
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>🚄 Search Trains</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="From Station"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
        />
        <input
          type="text"
          placeholder="To Station"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
        />
        <button type="submit" style={{ padding: "10px 15px" }}>Search</button>
      </form>
    </div>
  );
}
