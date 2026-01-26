import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getGallery } from "../services/galleryService";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const data = await getGallery();
      setGallery(data);
    } catch (err) {
      console.error("Failed to fetch gallery", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-secondary">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Our Gallery</h1>
          <p className="text-slate-700 max-w-3xl mx-auto">
            Moments of service, compassion, and community transformation.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-slate-600">
            Loading gallery...
          </p>
        )}

        {/* Empty */}
        {!loading && gallery.length === 0 && (
          <p className="text-center text-slate-600">
            No media available yet.
          </p>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ scale: 1.04 }}
              className="overflow-hidden rounded-2xl shadow-md bg-white"
            >
              {item.type === "video" ? (
                <video
                  src={item.fileUrl}
                  controls
                  className="w-full h-64 object-cover"
                />
              ) : (
                <img
                  src={item.fileUrl}
                  alt="Gallery"
                  className="w-full h-64 object-cover transition duration-500"
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
