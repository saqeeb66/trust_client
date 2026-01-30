import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* ===== NAVBAR (shared component) ===== */}
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/di27vloho/image/upload/v1769799532/DSC07587_muhzfs.jpg')",
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 backdrop-blur-sm" />

        <motion.div
          className="relative z-10 text-center max-w-5xl px-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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

          <motion.div whileHover={{ scale: 1.05 }} className="mt-10 inline-block">
            <Link to="/register" className="btn-primary px-10 py-3 text-lg">
              Register
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <h2 className="text-3xl mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              To empower individuals with timeless wisdom and contemporary
              insights, fostering a more compassionate, balanced, and
              enlightened society.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-3xl mb-4">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              A world where every individual discovers their true potential,
              lives with purpose, and contributes to the greater good.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-16">Our Impact</h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-10"
              >
                <h3 className="text-3xl font-bold text-primary">
                  {s.value}
                </h3>
                <p className="mt-3 text-slate-600">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">What We Focus On</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {focusAreas.map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-light rounded-2xl p-10 text-center shadow-md"
              >
                <h3 className="text-2xl mb-4">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-light py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-16">Voices of Transformation</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-10 rounded-2xl shadow-lg"
              >
                <p className="text-slate-700 italic mb-6">
                  “{t.text}”
                </p>
                <h4 className="font-semibold">{t.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER (shared component) ===== */}
      <Footer />
    </>
  );
}

export default Home;
