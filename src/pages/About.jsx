import { motion } from "framer-motion";

function About() {
  const sections = [
    {
      title: "Who We Are",
      text:
        "Lifefullness Charitable Trust is a non-profit organization based in Bangalore, India, established with the purpose of nurturing emotional well-being, compassion, and conscious living. We work at the intersection of mental health awareness, community care, and value-based living to support individuals and families across diverse backgrounds.",
    },
    {
      title: "Our Vision",
      text:
        "We envision a society where individuals live with emotional balance, empathy, and purpose, contributing positively to their families, communities, and the wider world. A society where compassion is practiced, not just spoken about.",
    },
    {
      title: "Our Mission",
      text:
        "Our mission is to support emotional well-being, promote mindful and conscious living, and serve communities through empathy-driven initiatives. We aim to create safe spaces for awareness, healing, and personal growth through education, outreach, and community engagement.",
    },
    {
      title: "What We Do",
      text:
        "Through thoughtfully designed programs and initiatives, we address emotional health, social well-being, and conscious lifestyle practices. Our work includes awareness sessions, community outreach, and support activities that encourage resilience, dignity, and self-awareness.",
    },
    {
      title: "Our Values",
      text:
        "Our work is guided by core values that shape every initiative we undertake: compassion in action, integrity in our processes, transparency in our operations, respect for all individuals, and a deep commitment to service with purpose.",
    },
  ];

  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-4">
            About Lifefullness Charitable Trust
          </h1>
          <p className="text-slate-700 max-w-3xl mx-auto">
            A charitable trust dedicated to compassion, emotional well-being,
            and conscious living, working towards a more empathetic and
            harmonious society.
          </p>
        </motion.div>

        {/* CONTENT SECTIONS */}
        <div className="space-y-12">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="card"
            >
              <h2 className="text-2xl mb-4 text-center">
                {item.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-center">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WHY WE EXIST */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl mb-4">
            Why We Exist
          </h2>
          <p className="text-slate-700 max-w-4xl mx-auto leading-relaxed">
            In today’s fast-paced world, emotional well-being and human
            connection are often overlooked. Lifefullness Charitable Trust
            exists to remind individuals and communities of the importance of
            empathy, self-awareness, and conscious living. By addressing
            emotional and social challenges together, we strive to create
            lasting and meaningful change.
          </p>
        </motion.div>

        {/* TRANSPARENCY NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-14 text-center text-slate-600"
        >
          <p className="max-w-3xl mx-auto">
            We believe that trust is built through transparency and consistent
            action. Every initiative we undertake is guided by ethical
            practices, accountability, and a genuine commitment to the
            well-being of those we serve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
