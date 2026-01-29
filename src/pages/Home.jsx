import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
        "Mental health awareness, emotional healing, stress reduction, and cultivating inner balance.",
    },
    {
      title: "Community Support",
      desc:
        "Compassion-driven initiatives supporting families and individuals through challenging times.",
    },
    {
      title: "Conscious Living",
      desc:
        "Mindful, purposeful, and values-based living for long-term clarity and fulfillment.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya R",
      text:
        "I found emotional clarity and inner strength when I needed it the most.",
    },
    {
      name: "Rahul S",
      text:
        "The guidance here helped me live with balance, purpose, and confidence.",
    },
    {
      name: "Meera K",
      text:
        "A place of genuine care that positively transformed my family’s life.",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-dark">
              LtCharitableTrust
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Terms", "Gallery", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-700 hover:text-primary transition"
              >
                {item}
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
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-dark leading-tight">
            <span className="text-emerald-600">Empowering</span> Individuals
            <br />
            <span className="text-emerald-600">Enriching</span> Lives
          </h1>

          <p className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto">
            Holistic education and conscious guidance for a balanced,
            compassionate, and purpose-driven life.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-block"
          >
            <Link to="/register" className="btn-primary px-10 py-3 text-lg">
              Register
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-10"
              >
                <h3 className="text-3xl font-bold text-primary">
                  {item.value}
                </h3>
                <p className="mt-3 text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">What We Focus On</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {focusAreas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.6 }}
                className="bg-light rounded-2xl p-10 text-center shadow-md"
              >
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-light py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-16">Voices of Transformation</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                className="bg-white p-10 rounded-2xl shadow-lg"
              >
                <p className="text-slate-700 italic mb-6">
                  “{t.text}”
                </p>
                <h4 className="font-semibold">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SMALL PREMIUM FOOTER ================= */}
      <footer className="relative bg-dark overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 items-center"
        >
          {/* LEFT EMPTY */}
          <div />

          {/* CENTER EMPTY */}
          <div />

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-end gap-3">
            <img
              src="/logo.jpeg"
              alt="LTCharitableTrust"
              className="h-10 w-auto opacity-90"
            />

            <p className="text-xs text-gray-400 text-right max-w-xs">
              Empowering individuals through emotional well-being and conscious
              living.
            </p>

            <div className="flex gap-4 text-lg mt-2">
              {[
                "instagram",
                "youtube",
                "linkedin",
                "whatsapp",
              ].map((icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.25, y: -2 }}
                  href="#"
                  className="text-gray-400 hover:text-primary transition"
                >
                  <i className={`fa-brands fa-${icon}`} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Home;
