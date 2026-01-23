import { useState } from "react";
import api from "../services/api";

function ManageBanners() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      await api.post("/banners", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Banner uploaded successfully");
      setImage(null);
    } catch {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl mb-6">Manage Homepage Banners</h1>

        <form
          onSubmit={handleUpload}
          className="bg-white p-6 rounded-2xl shadow-md space-y-6"
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="input"
          />

          <button className="btn-primary">
            {loading ? "Uploading..." : "Upload Banner"}
          </button>
        </form>

        <p className="text-slate-600 mt-6">
          Uploaded banners will appear dynamically on the homepage.
        </p>
      </div>
    </section>
  );
}

export default ManageBanners;
