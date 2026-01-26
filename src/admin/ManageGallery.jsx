import { useEffect, useState } from "react";
import {
  getGallery,
  uploadGalleryFile,
  deleteGalleryFile,
} from "../services/galleryService";

function ManageGallery() {
  const [file, setFile] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const data = await getGallery();
    setGallery(data);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select an image or video");

    const formData = new FormData();
    formData.append("file", file);

    await uploadGalleryFile(formData);
    setFile(null);
    fetchGallery();
  };

  const deleteFile = async (id) => {
    if (!confirm("Delete this file?")) return;
    await deleteGalleryFile(id);
    fetchGallery();
  };

  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl mb-6">Manage Gallery</h1>

        {/* Upload */}
        <form onSubmit={uploadFile} className="flex gap-4 mb-8">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="input"
          />
          <button className="btn-primary">Upload</button>
        </form>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((item) => (
            <div
              key={item._id}
              className="relative rounded-xl overflow-hidden bg-white shadow"
            >
              {item.type === "video" ? (
                <video
                  src={item.fileUrl}
                  controls
                  className="h-40 w-full object-cover"
                />
              ) : (
                <img
                  src={item.fileUrl}
                  alt="Gallery"
                  className="h-40 w-full object-cover"
                />
              )}

              <button
                onClick={() => deleteFile(item._id)}
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
