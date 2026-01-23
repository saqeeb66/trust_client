import { useEffect, useState } from "react";
import api from "../services/api";

function ManageContent() {
  const [content, setContent] = useState({
    about: "",
    vision: "",
    mission: "",
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const res = await api.get("/content");
    setContent(res.data);
  };

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const saveContent = async (e) => {
    e.preventDefault();
    await api.put("/content", content);
    alert("Content updated successfully");
  };

  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl mb-6">Manage Website Content</h1>

        <form onSubmit={saveContent} className="space-y-6 bg-white p-8 rounded-2xl shadow-md">

          <textarea
            name="about"
            placeholder="About Trust"
            value={content.about}
            onChange={handleChange}
            className="input h-32 resize-none"
          />

          <textarea
            name="vision"
            placeholder="Vision"
            value={content.vision}
            onChange={handleChange}
            className="input h-24 resize-none"
          />

          <textarea
            name="mission"
            placeholder="Mission"
            value={content.mission}
            onChange={handleChange}
            className="input h-24 resize-none"
          />

          <button className="btn-primary">Save Changes</button>
        </form>

      </div>
    </section>
  );
}

export default ManageContent;
