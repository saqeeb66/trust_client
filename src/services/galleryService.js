import API from "./api";

// Public: get gallery images
export const getGalleryImages = () => {
  return API.get("/gallery");
};

// Admin: upload image (Cloudinary)
export const uploadGalleryImage = (formData) => {
  return API.post("/gallery", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Admin: delete image
export const deleteGalleryImage = (id) => {
  return API.delete(`/gallery/${id}`);
};
