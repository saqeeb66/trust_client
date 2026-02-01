import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const courseLinks = [
    { name: "Life Transformation Workshop", slug: "life-transformation" },
    { name: "Swarga Srushti", slug: "swarga-srushti" },
    { name: "Health Workshop", slug: "health-workshop" },
    { name: "Daily Magic Practice", slug: "daily-magic-practice" },
    { name: "HWLH Workshop", slug: "hwlh-workshop" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Logo" className="h-10" />
          <span className="text-xl font-semibold text-dark">
            L T Charitable Trust
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/about" className="nav-link">About</NavLink>

          {/* Courses Dropdown */}
          <div className="relative group">
            <NavLink to="/courses" className="nav-link">
              Courses
            </NavLink>

            <div className="absolute left-0 mt-3 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {courseLinks.map((course) => (
                <NavLink
                  key={course.slug}
                  to={`/courses/${course.slug}`}
                  className="block px-5 py-3 text-sm hover:bg-emerald-50"
                >
                  {course.name}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/terms" className="nav-link">Terms</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>

          <Link to="/donate" className="btn-primary">Register</Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>

          {courseLinks.map((course) => (
            <Link
              key={course.slug}
              to={`/courses/${course.slug}`}
              onClick={() => setOpen(false)}
              className="block pl-4 text-sm text-slate-600"
            >
              • {course.name}
            </Link>
          ))}

          <Link to="/terms" onClick={() => setOpen(false)}>Terms</Link>
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/donate" onClick={() => setOpen(false)} className="btn-primary block text-center">
            Register
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
