import { motion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 items-center"
      >
        {/* LEFT (empty for balance) */}
        <div />

        {/* CENTER (empty intentionally) */}
        <div />

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-end gap-3">
          {/* Logo */}
          <img
            src="/logo.jpeg"
            alt="LTCharitableTrust"
            className="h-10 w-auto opacity-90"
          />

          {/* Small description */}
          <p className="text-xs text-gray-400 text-right max-w-xs leading-relaxed">
            Empowering individuals through emotional well-being and conscious
            living.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg mt-2">
            <motion.a
              whileHover={{ scale: 1.3, y: -3 }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3, y: -3 }}
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <FaYoutube />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3, y: -3 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3, y: -3 }}
              href="https://wa.me/917019980314"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
