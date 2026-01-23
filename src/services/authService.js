import API from "./api";

// Admin Login
export const loginAdmin = (data) => {
  return API.post("/auth/login", data);
};

// Admin Register (if enabled)
export const registerAdmin = (data) => {
  return API.post("/auth/register", data);
};
