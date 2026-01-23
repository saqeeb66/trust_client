import API from "./api";

// Submit contact form
export const submitContactForm = (data) => {
  return API.post("/contact", data);
};

// Admin: get all contact messages
export const getContacts = () => {
  return API.get("/contact");
};
