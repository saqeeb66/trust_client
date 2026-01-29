import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
       <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="text-4xl md:text-6xl font-semibold leading-tight text-dark"
>
  <span className="text-green-600">Empowering</span> Individuals
  <br />
  <span className="text-green-600">Enriching</span> Lives
</motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto"
        >
          Through holistic education, we guide people towards
          modern spirituality, healthier relationships,
          balanced living, and purposeful careers.     
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/donate" className="btn-primary text-lg px-8 py-3">
            Register
          </Link>

          <Link to="/about" className="btn-outline text-lg px-8 py-3">
            Know Our Mission
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
