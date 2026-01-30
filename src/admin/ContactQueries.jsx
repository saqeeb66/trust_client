import { useEffect, useState } from "react";
import api from "../services/api";

function ContactQueries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const res = await api.get("/contact");
      setQueries(res.data);
    } catch (err) {
      console.error("❌ Contact fetch error:", err);

      if (err.response?.status === 401) {
        setError("Unauthorized. Please login again.");
      } else {
        setError("Failed to load contact queries");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl mb-6">Contact Queries</h1>

        <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Message</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan="5" className="p-6 text-center">
                    Loading...
                  </td>
                </tr>
              )}

              {!loading && error && (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-red-500">
                    {error}
                  </td>
                </tr>
              )}

              {!loading && !error && queries.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-500">
                    No queries found
                  </td>
                </tr>
              )}

              {!loading &&
                !error &&
                queries.map((q) => (
                  <tr key={q._id} className="border-t">
                    <td className="p-4">{q.name}</td>
                    <td className="p-4">{q.email}</td>
                    <td className="p-4">{q.phone}</td>
                    <td className="p-4">{q.message}</td>
                    <td className="p-4">
                      {new Date(q.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ContactQueries;
