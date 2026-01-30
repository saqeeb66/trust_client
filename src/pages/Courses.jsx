import { motion } from "framer-motion";

const courses = [
  {
    title: "Swarga Srushti",
    duration: "5-Day Residential Program",
    highlight: "Flagship Transformation Workshop",
    description: [
      "Swarga Srushti is a powerful 5-day residential workshop designed for deep inner and life transformation.",
      "This advanced program focuses on self-mastery, emotional clarity, and conscious living, helping participants understand themselves at a deeper level.",
      "Learn powerful techniques for self-analysis, handling life’s challenges effectively, and creating win-win situations.",
      "Elevate personal and professional relationships while gaining clarity and confidence.",
      "Includes 3 months of recreation and follow-up support to ensure long-lasting transformation.",
    ],
    footer:
      "Ideal for individuals seeking breakthroughs in mindset, relationships, career, and purpose.",
  },
  {
    title: "Life Transformation Workshop",
    duration: "Foundational Program",
    highlight: "Clarity • Mindset • Success",
    description: [
      "The Life Transformation Workshop helps you unlock the core elements of a successful and fulfilling life.",
      "Understand the key drivers of success and identify root causes that influence growth or stagnation.",
      "Dive into guided self-analysis to understand your thoughts, emotions, habits, and patterns.",
      "Overcome self-limiting beliefs and align your mindset toward confidence and clarity.",
      "Develop a success-oriented mindset to take charge of your personal and professional journey.",
    ],
    footer:
      "Perfect for those beginning their transformation journey and seeking direction, confidence, and success.",
  },
  {
    title: "Daily Magic Practice",
    duration: "Ongoing Daily Practice",
    highlight: "Holistic Living • Inner Energy • Joy",
    description: [
      "Daily Magic Practice is a holistic approach designed to transform your everyday life with awareness and joy.",
      "This practice weaves together music meditation, Zumba dance, and pranayama to uplift your energy, mood, and vitality.",
      "Experience gratitude meditation and Ho'oponopono to release emotional blocks and invite positivity into your life.",
      "Dive into chakra meditation to align your inner energies and cultivate balance and harmony.",
      "Use visualization techniques to manifest dreams, desires, and a fulfilling life.",
      "Join group blessings to amplify collective positivity, healing, and mutual support.",
    ],
    footer:
      "A simple yet powerful daily ritual suitable for all levels, nurturing mindfulness, inner peace, and soulful well-being.",
  },
];

function Courses() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Our Transformational Courses
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Conscious programs designed to awaken clarity, confidence, purpose,
            and holistic well-being.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-emerald-100 hover:shadow-2xl transition"
            >
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-emerald-700 mb-2">
                  {course.title}
                </h2>
                <p className="text-sm text-emerald-600 font-medium">
                  {course.duration}
                </p>
                <span className="inline-block mt-3 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm">
                  {course.highlight}
                </span>
              </div>

              {/* Content */}
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                {course.description.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t text-gray-600 italic">
                {course.footer}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-emerald-700 rounded-3xl p-10 text-white text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Supporting Workshops & Practices
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {[
              "Health Workshop",
              "H W L H Magician Workshop",
            ].map((item, idx) => (
              <span
                key={idx}
                className="bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-3xl mx-auto text-emerald-100">
            These workshops complement the core programs by supporting physical
            health, emotional balance, and energetic alignment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Courses;
