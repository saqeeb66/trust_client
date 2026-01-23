import { motion } from "framer-motion";

function Causes() {
  const causes = [
    {
      title: "Emotional Well-being",
      desc:
        "We work towards improving mental and emotional health through awareness sessions, one-to-one guidance, and community support programs. Our initiatives focus on reducing stress, anxiety, and emotional isolation.",
      points: [
        "Mental health awareness programs",
        "Emotional support & counseling guidance",
        "Workshops on stress and resilience",
      ],
    },
    {
      title: "Community Care",
      desc:
        "Our community care initiatives are designed to support individuals and families facing social, emotional, or economic challenges. We believe compassion-driven action can restore dignity and hope.",
      points: [
        "Support for underprivileged families",
        "Community welfare initiatives",
        "Compassion-based outreach programs",
      ],
    },
    {
      title: "Mindful Living",
      desc:
        "We encourage conscious living by promoting awareness, balance, and purposeful choices. Through education and practice, we help individuals align their inner well-being with daily life.",
      points: [
        "Mindfulness awareness sessions",
        "Lifestyle balance programs",
        "Value-based living education",
      ],
    },
  ];

  return (
    <section className="section bg-secondary">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-4">Our Causes</h1>
          <p className="text-slate-700 max-w-3xl mx-auto">
            At Lifefullness Charitable Trust, our causes are rooted in compassion,
            emotional balance, and conscious community development.
          </p>
        </motion.div>

        {/* CAUSES */}
        <div className="space-y-14">
          {causes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card"
            >
              <h2 className="text-2xl mb-4 text-center">
                {item.title}
              </h2>

              <p className="text-slate-600 max-w-3xl mx-auto text-center mb-6">
                {item.desc}
              </p>

              <ul className="max-w-2xl mx-auto space-y-3 text-slate-600 list-disc pl-6">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* IMPACT STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl mb-4">
            Why Our Work Matters
          </h2>
          <p className="text-slate-700 max-w-4xl mx-auto">
            Emotional well-being, social care, and mindful living are deeply
            interconnected. By addressing these areas together, we create a
            holistic approach to individual and community transformation.
            Your support helps us extend this impact to more lives.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Causes;
