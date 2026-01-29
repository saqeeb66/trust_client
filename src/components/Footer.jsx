import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Contact */}
        <div>
          <h4 className="text-white mb-4">Contact</h4>
          <p className="text-sm">📍 NO 153, 6TH CROSS, VYALI KAVAL LAYOUT, BANGALORE NORTH, VIJAYANAGAR, BANGALORE, 560040 KARNATAKA INDIA</p>
          <p className="text-sm">📞 +91 9742809955</p>
          <p className="text-sm">✉️ BEVEDHA.MURTHY@GMAIL.COM</p>
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
        © {new Date().getFullYear()} LTCharitableTrust · Transparency & Trust
      </div>
    </footer>
  );
}

export default Footer;
