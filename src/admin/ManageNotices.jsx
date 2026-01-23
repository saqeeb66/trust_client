import { useEffect, useState } from "react";
import api from "../services/api";

function ManageNotices() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    const res = await api.get("/notices");
    setNotices(res.data);
  };

  const addNotice = async (e) => {
    e.preventDefault();
    await api.post("/notices", { title, description });
    setTitle("");
    setDescription("");
    fetchNotices();
  };

  const deleteNotice = async (id) => {
    await api.delete(`/notices/${id}`);
    fetchNotices();
  };

  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl mb-6">Manage Notices</h1>

        <form onSubmit={addNotice} className="bg-white p-6 rounded-2xl shadow-md mb-8 space-y-4">
          <input
            className="input"
            placeholder="Notice Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="input h-24 resize-none"
            placeholder="Notice Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn-primary">Add Notice</button>
        </form>

        <div className="space-y-4">
          {notices.map((n) => (
            <div key={n._id} className="card flex justify-between items-center">
              <div>
                <h3 className="font-medium">{n.title}</h3>
                <p className="text-slate-600">{n.description}</p>
              </div>
              <button
                onClick={() => deleteNotice(n._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ManageNotices;
