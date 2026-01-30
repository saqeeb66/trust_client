import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../services/contactService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await submitContactForm(formData);
      setSuccess(
        "Thank you for contacting LTCharitableTrust. Our team will reach out to you shortly."
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      alert("Unable to submit your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-secondary">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-slate-700 max-w-3xl mx-auto">
            We welcome your questions, collaboration requests, and interest in
            supporting LTCharitableTrust.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-xl mb-2">Our Office</h3>
              <p className="text-slate-600 leading-relaxed">
                LTCharitableTrust<br />
                NO 153, 6TH CROSS, VYALI KAVAL LAYOUT, BANGALORE NORTH, VIJAYANAGAR, BANGALORE, 560040 KARNATAKA INDIA
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl mb-2">Contact Details</h3>
              <p className="text-slate-600">📞 +91 9901814446</p>
              <p className="text-slate-600">✉️ ltcharitabletrustblr@gmail.com</p>
            </div>

            <div className="card">
              <h3 className="text-xl mb-2">Working Hours</h3>
              <p className="text-slate-600">
                Monday – Saturday<br />
                10:00 AM – 6:00 PM
              </p>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed px-1">
              Your information is kept confidential and used only to respond to
              your enquiry.
            </p>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-md p-10"
          >
            <h2 className="text-2xl mb-2">Send Us a Message</h2>
            <p className="text-slate-600 mb-8">
              Please fill in the form below. We usually respond within 24–48 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* FULL NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input w-full"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input w-full"
              />

              {/* PHONE */}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="input w-full"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                rows="5"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                className="input w-full resize-none"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="btn-primary w-full py-3"
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>

              {success && (
                <p className="text-green-600 text-center mt-4">
                  {success}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
