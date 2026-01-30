import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20" />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* LEFT: Logo + Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <img
            src="/logo.jpeg"
            alt="LTCharitableTrust"
            className="h-11 w-auto opacity-90"
          />

          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Empowering individuals through emotional well-being,
            conscious living, and compassion-driven initiatives.
          </p>
        </motion.div>

        {/* RIGHT: Reach Us + Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-end gap-4"
        >
          {/* Reach Us Button */}
          <Link
            to="/contact"
            className="btn-primary px-6 py-2 text-sm"
          >
            Reach Us
          </Link>

          {/* Social Icons (Vertical stack) */}
          <div className="flex flex-col gap-3 mt-2 text-lg">
            <motion.a
              whileHover={{ scale: 1.2, x: -4 }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, x: -4 }}
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <FaYoutube />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, x: -4 }}
              href="https://wa.me/917019980314"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM COPYRIGHT (CENTERED) */}
      <div className="border-t border-gray-700">
        <p className="text-center text-xs text-gray-400 py-4">
          © {new Date().getFullYear()} LTCharitableTrust · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
