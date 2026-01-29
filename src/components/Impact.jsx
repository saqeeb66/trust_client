import { motion } from "framer-motion";

function Impact() {
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
    <section className="section bg-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl mb-4">
            Our Impact
          </h1>
          <p className="text-slate-700 max-w-3xl mx-auto">
            At Lifefullness Charitable Trust, impact is measured not just in
            numbers, but in transformed lives, renewed hope, and strengthened
            communities.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-md rounded-xl p-8 text-center"
            >
              <h3 className="text-3xl font-bold text-primary">
                {item.value}
              </h3>
              <p className="mt-2 text-slate-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* STORY SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl mb-6">
            Stories Behind the Numbers
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Every number represents a human story — a person who felt heard,
            supported, and empowered. From individuals gaining emotional
            clarity to families finding renewed strength, our work touches
            lives in deeply meaningful ways. These stories motivate us to
            continue our mission with compassion and responsibility.
          </p>
        </motion.div>

        {/* FOCUS AREAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
          {focusAreas.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.1 }}
              className="card text-center"
            >
              <h3 className="text-2xl mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TRANSPARENCY */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl mb-6">
            Our Commitment to Transparency
          </h2>
          <p className="text-slate-700 leading-relaxed">
            We believe trust is built through honesty and accountability.
            Lifefullness Charitable Trust ensures that all contributions are
            used responsibly and aligned with our mission. Transparency is not
            just a promise—it is a practice embedded in every initiative we
            undertake.
          </p>
        </motion.div>

        {/* FUTURE VISION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center mb-28"
        >
          <h2 className="text-3xl mb-6">
            Looking Ahead
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Our journey continues as we strive to reach more individuals,
            expand our community programs, and deepen our impact. With your
            support, we aim to create a future rooted in compassion, emotional
            balance, and conscious living.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-primary text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl mb-4">
            Be Part of Our Impact
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Your contribution helps us extend our reach and transform more
            lives. Together, we can build a compassionate and conscious
            society.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-primary px-10 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Support Our Work
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Impact;
