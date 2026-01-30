import axios from "axios";

const api = axios.create({
  baseURL: "https://server-w3zp.onrender.com/api",
});

// Attach admin token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
