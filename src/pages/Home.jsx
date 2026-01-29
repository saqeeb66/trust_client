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
        "Programs for mental-health awareness, emotional healing, stress reduction, and achieving inner balance.",
    },
    {
      title: "Community Support",
      desc:
        "Compassion-driven services that assist families and individuals facing emotional and social challenges.",
    },
    {
      title: "Conscious Living",
      desc:
        "Guidance for mindful, purposeful, and values-based lifestyles rooted in clarity and balance.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya R",
      text:
        "This trust helped me rediscover clarity and emotional strength during one of the toughest phases of my life.",
    },
    {
      name: "Rahul S",
      text:
        "The programs are deeply meaningful and practical. I feel more balanced and focused than ever before.",
    },
    {
      name: "Meera K",
      text:
        "A place of genuine compassion. Their guidance helped my family heal and grow together.",
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
                className="text-sm font-medium text-slate-700 hover:text-primary"
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
            Through holistic education and conscious guidance, we help
            individuals lead balanced, compassionate, and purpose-driven lives.
          </p>

          <div className="mt-10">
            <Link to="/register" className="btn-primary px-8 py-3 text-lg">
              Register
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <h2 className="text-3xl mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              To empower individuals with timeless wisdom and contemporary
              insights, fostering a more compassionate, balanced, and
              enlightened society.
            </p>
          </motion.div>

          <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <h2 className="text-3xl mb-4">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              A world where every individual discovers their true potential,
              lives with purpose, and contributes meaningfully to the greater
              good.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

      {/* ================= FOCUS AREAS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">What We Focus On</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {focusAreas.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-light rounded-xl p-8 text-center shadow"
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
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow"
              >
                <p className="text-slate-700 italic mb-4">
                  “{t.text}”
                </p>
                <h4 className="font-semibold">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-primary text-white text-center">
        <h2 className="text-4xl mb-6">Begin Your Transformation</h2>
        <p className="max-w-2xl mx-auto mb-10 text-white/90">
          Join us in building a compassionate, conscious, and emotionally
          balanced society.
        </p>
        <Link
          to="/register"
          className="bg-white text-primary px-10 py-4 rounded-xl font-medium"
        >
          Register Now
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-dark text-gray-300">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              LTCharitableTrust
            </h3>
            <p className="text-sm text-gray-400">
              Empowering individuals through emotional well-being and conscious
              living.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <p className="text-sm">Bangalore, Karnataka</p>
            <p className="text-sm">+91 70199 80314</p>
          </div>

          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4 text-xl">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-700 text-center text-xs py-5 text-gray-400">
          © {new Date().getFullYear()} LTCharitableTrust · Transparency & Trust
        </div>
      </footer>
    </>
  );
}

export default Home;
