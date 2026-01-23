import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Lifefullness Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold text-dark">
            LtCharitableTrust
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Terms and Conditions", path: "/terms" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-primary"
                    : "text-slate-700 hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Donate CTA */}
          <Link to="/donate" className="btn-primary">
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Terms and Conditions", path: "/terms" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="block text-center btn-primary"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
