import API from "./api";

// Get all banners
export const getBanners = () => {
  return API.get("/banners");
};

// Add banner (admin)
export const addBanner = (formData) => {
  return API.post("/banners", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete banner
export const deleteBanner = (id) => {
  return API.delete(`/banners/${id}`);
};
