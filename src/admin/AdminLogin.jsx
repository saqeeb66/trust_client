import { useState } from "react";
import { loginAdmin } from "../services/authService";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAdmin({ email, password });

      // ✅ FIX 1: Correct key name
      localStorage.setItem("adminToken", res.data.token);

      // ✅ FIX 2: Correct redirect
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="section max-w-md mx-auto">
      <h1 className="text-2xl mb-6">Admin Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn-primary w-full">Login</button>
      </form>
    </section>
  );
}

export default AdminLogin;
