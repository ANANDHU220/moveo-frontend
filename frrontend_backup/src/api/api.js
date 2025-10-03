import axios from "axios";

// Create a reusable Axios instance
const API = axios.create({
  baseURL: "http://localhost:4000", // <- backend URL
});

export default API;
