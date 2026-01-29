import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/* =======================
   HOME PAGE
======================= */

function Home() {
  const [open, setOpen] = useState(false);

  const stats = [
    { value: "30000+", label: "Lives Impacted" },
    { value: "8+", label: "Years of Dedicated Service" },
    { value: "10000+", label: "Lives Transformed" },
  ];

  const focusAreas = [
    {
      title: "Emotional Well-being",
      desc:
        "Through awareness sessions and supportive initiatives, we have helped individuals understand emotional health, reduce stress, and build inner resilience.",
    },
    {
      title: "Community Support",
      desc:
        "Our outreach programs focus on compassion-driven care for families and individuals facing emotional and social challenges.",
    },
    {
      title: "Conscious Living",
      desc:
        "We promote mindful and value-based living practices that help people lead balanced and purpose-driven lives.",
    },
  ];

  return (
    <>
      {/* =======================
          NAVBAR
      ======================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-dark hover:text-primary transition">
              LtCharitableTrust
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "About", path: "/about" },
              { name: "Terms", path: "/terms" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-primary"
                      : "text-slate-700 hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/donate" className="btn-primary">
              Donate
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </nav>

        {open && (
          <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
            {[
              { name: "About", path: "/about" },
              { name: "Terms", path: "/terms" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block text-slate-700 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate" className="block text-center btn-primary">
              Donate
            </Link>
          </div>
        )}
      </header>

      {/* =======================
          HERO
      ======================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')",
          }}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-dark">
            <span className="text-emerald-600">Empowering</span> Individuals
            <br />
            <span className="text-emerald-600">Enriching</span> Lives
          </h1>

          <p className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto">
            Through holistic education, we guide people towards modern
            spirituality, healthier relationships, balanced living, and
            purposeful careers.
          </p>

          <div className="mt-10">
            <Link to="/register" className="btn-primary px-8 py-3 text-lg">
              Register
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =======================
          IMPACT
      ======================= */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6">Our Impact</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-3xl font-bold text-primary">
                  {item.value}
                </h3>
                <p className="mt-2 text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          FOOTER
      ======================= */}
      <footer className="bg-dark text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="text-center md:text-left">
            <h4 className="text-white mb-4">Contact</h4>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="text-center">
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex justify-center gap-6 text-2xl">
              📷 📘 ▶️
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-white mb-4">
              Register for Transformation
            </h4>
            <Link to="/register" className="btn-primary">
              Register
            </Link>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-700">
          © {new Date().getFullYear()} LTCharitableTrust · Transparency & Trust
        </div>
      </footer>
    </>
  );
}

export default Home;
