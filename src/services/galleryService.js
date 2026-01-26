import api from "./api";

// Public – fetch gallery (images + videos)
export const getGallery = async () => {
  const res = await api.get("/gallery");
  return res.data;
};

// Admin – upload image or video
export const uploadGalleryFile = async (formData) => {
  const res = await api.post("/gallery", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Admin – delete image or video
export const deleteGalleryFile = async (id) => {
  const res = await api.delete(`/gallery/${id}`);
  return res.data;
};

