import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h3 className="text-white text-lg mb-4">
            Lifefullness Charitable Trust
          </h3>
          <p className="text-sm leading-relaxed">
            A Bangalore-based non-profit organization committed to compassion,
            emotional well-being, and sustainable community development.
          </p>
        </motion.div>

        {/* Links */}
        <div>
          <h4 className="text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms and conditions</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white mb-4">Contact</h4>
          <p className="text-sm">📍 Bangalore, Karnataka, India</p>
          <p className="text-sm">📞 +91 80956 27860</p>
          <p className="text-sm">✉️ contact@lifefullness.org</p>
        </div>

        {/* Donate */}
        <div>
          <h4 className="text-white mb-4">Support Our Work</h4>
          <p className="text-sm mb-4">
            Your generosity enables education, healing, and hope.
          </p>
          <Link to="/donate" className="btn-primary">
            Donate Now
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Lifefullness Charitable Trust · Transparency & Trust
      </div>
    </footer>
  );
}

export default Footer;
