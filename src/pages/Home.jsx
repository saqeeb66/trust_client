import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants for better control
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                src="/logo.jpeg"
                alt="Logo"
                className="h-10 w-auto"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-xl font-semibold text-dark">
                LtCharitableTrust
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Terms", "Gallery", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-700 hover:text-primary transition-all duration-300 relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/donate" className="btn-primary">
                Donate
              </Link>
            </motion.div>
          </div>

          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg"
            >
              <div className="flex flex-col items-center gap-6 py-8">
                {["About", "Terms", "Gallery", "Contact"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="text-lg font-medium text-slate-700 hover:text-primary transition"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </NavLink>
                ))}
                <Link to="/donate" className="btn-primary" onClick={() => setOpen(false)}>
                  Donate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')",
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-semibold text-dark leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              className="text-emerald-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Empowering
            </motion.span>{" "}
            Individuals
            <br />
            <motion.span
              className="text-emerald-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Enriching
            </motion.span>{" "}
            Lives
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Holistic education and conscious guidance for a balanced,
            compassionate, and purpose-driven life.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
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
          <motion.h2
            className="text-4xl mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={hoverVariants.hover}
                className="bg-white rounded-2xl shadow-lg p-10 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3
                  className="text-3xl font-bold text-primary relative z-10"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.value}
                </motion.h3>
                <motion.p
                  className="mt-3 text-slate-600 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {item.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What We Focus On
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {focusAreas.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-light rounded-2xl p-10 text-center shadow-md relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3
                  className="text-2xl mb-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-slate-600 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-light py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Voices of Transformation
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white p-10 rounded-2xl shadow-lg relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.p
                  className="text-slate-700 italic mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  “{t.text}”
                </motion.p>
                <motion.h4
                  className="font-semibold relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t.name}
                </motion.h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SMALL PREMIUM FOOTER ================= */}
      <footer className="relative bg-dark overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 items-center"
        >
          {/* LEFT EMPTY */}
          <div />

          {/* CENTER EMPTY */}
          <div />

          {/* RIGHT CONTENT */}
          <motion.div
            className="flex flex-col items-end gap-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/logo.jpeg"
              alt="LTCharitableTrust"
              className="h-10 w-auto opacity-90"
              whileHover={{ rotate: -5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.p
              className="text-xs text-gray-400 text-right max-w-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Empowering individuals through emotional well-being and conscious
              living.
            </motion.p>

            <motion.div
              className="flex gap-4 text-lg mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "instagram",
                "youtube",
                "linkedin",
                "whatsapp",
              ].map((icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.25, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-primary transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <i className={`fa-brands fa-${icon}`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}

export default Home;
