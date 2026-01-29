import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* LEFT: Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-white mb-4 text-lg">Contact</h4>
          <Link to="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>

        {/* CENTER: Follow Us */}
        <div className="text-center">
          <h4 className="text-white mb-4 text-lg">Follow Us</h4>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              📷
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              📘
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              ▶️
            </a>
          </div>
        </div>

        {/* RIGHT: Register */}
        <div className="text-center md:text-right">
          <h4 className="text-white mb-4 text-lg">
            Register for Transformation
          </h4>
          <Link to="/register" className="btn-primary inline-block">
            Register
          </Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} LTCharitableTrust · Transparency & Trust
      </div>
    </footer>
  );
}

export default Footer;
