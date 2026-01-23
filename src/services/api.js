import axios from "axios";

const API = axios.create({
  baseURL: "https://server-w3zp.onrender.com/api",
});

// Attach token automatically for protected routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
