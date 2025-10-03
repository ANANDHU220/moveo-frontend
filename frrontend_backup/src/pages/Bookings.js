import { useEffect, useState } from "react";
import API from "../api/api";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const userId = 1; // replace with logged-in user ID

  useEffect(() => {
    API.get(`/bookings/${userId}`).then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <ul>
        {bookings.map(b=>(
          <li key={b.booking_id}>PNR: {b.PNR} | Status: {b.status}</li>
        ))}
      </ul>
    </div>
  );
}
