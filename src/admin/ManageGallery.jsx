import { useEffect, useState } from "react";
import api from "../services/api";

function ManageGallery() {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const res = await api.get("/gallery");
    setGallery(res.data);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    if (!image) return alert("Select an image");

    const formData = new FormData();
    formData.append("image", image);

    await api.post("/gallery", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setImage(null);
    fetchGallery();
  };

  const deleteImage = async (id) => {
    await api.delete(`/gallery/${id}`);
    fetchGallery();
  };

  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl mb-6">Manage Gallery</h1>

        <form onSubmit={uploadImage} className="flex gap-4 mb-8">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="input"
          />
          <button className="btn-primary">Upload</button>
        </form>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((img) => (
            <div key={img._id} className="relative">
              <img
                src={img.imageUrl}
                alt="Gallery"
                className="rounded-xl h-40 w-full object-cover"
              />
              <button
                onClick={() => deleteImage(img._id)}
                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm"
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

export default ManageGallery;
