import axios from "axios";

const API = axios.create({
  baseURL: "https://server-w3zp.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken"); // ✅ FIX HERE
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
