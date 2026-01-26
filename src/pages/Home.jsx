import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Hero />

      {/* IMPACT */}
      <section className="section bg-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl mb-6"
          >
            Compassion in Action
          </motion.h2>

          <p className="text-slate-700 max-w-3xl mx-auto mb-12">
            LTCharitableTrust is a Bangalore-based non-profit
            organization working to uplift individuals and communities through
            emotional well-being, compassion, and conscious living.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Lives Impacted" },
              { value: "50+", label: "Community Initiatives" },
              { value: "10+", label: "Years of Dedicated Service" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <h3 className="text-4xl text-primary mb-2">{item.value}</h3>
                <p className="text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What We Focus On</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Our initiatives are designed to nurture the mind, support the
              heart, and strengthen communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Emotional Well-being",
                desc: "Mental health awareness, emotional healing, and inner balance.",
              },
              {
                title: "Community Support",
                desc: "Compassion-led programs for families and individuals in need.",
              },
              {
                title: "Conscious Living",
                desc: "Encouraging mindful, purposeful, and value-driven lifestyles.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="card text-center"
              >
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white text-center">
        <h2 className="text-3xl md:text-4xl mb-6">
          Be a Part of Positive Change
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Your support enables healing, hope, and dignity for those who need it
          most.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/donate"
            className="bg-white text-primary px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Donate Now
          </Link>

          <Link
            to="/contact"
            className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-primary transition"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
