import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const courses = [
  {
    slug: "swarga-srushti",
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
    slug: "life-transformation",
    title: "Life Transformation Workshop",
    duration: "30 Days(1Hr Daily-Online-6:00AM to 7:00AM",
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
    slug: "daily-magic-practice(Free)",
    title: "Daily Magic Practice",
    duration: "(1Hr Daily -( 5:00AM - 6:00AM)Online)",
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
  {
    slug: "health-workshop",
    title: "Health Workshop",
    duration: "1 Full Day (online and offline - 9:00AM TO 5:00PM)",
    highlight: "Disease-Free • Vitality • Self-Healing",
    description: [
      "A Health Workshop for those who love themselves and aspire to live a disease-free, energetic life.",
      "Understand the root causes of diseases and how true health is created from within.",
      "Learn how the human body is naturally designed to heal and thrive.",
      "Discover how to eat, drink, and nourish your body for optimal health and longevity.",
      "Understand the importance of nutrition and lifestyle choices in preventing illness.",
      "Gain insights into living with minimal or no dependence on medicines.",
    ],
    footer:
      "Ideal for individuals seeking holistic health, stronger immunity, and a vibrant, energized life.",
  },
  {
    slug: "hwlh-workshop",
    title: "Health • Wealth • Love • Happiness (Magical) Workshop",
    duration: "8 Days (1HR Daily - 9:00PM - 10:00 PM",
    highlight: "Quantum Science • Manifestation • Chakras",
    description: [
      "The Health Wealth Love & Happiness Workshop unlocks the secrets to holistic success and abundance.",
      "Understand the root causes of success and how to become a magnet for prosperity in all areas of life.",
      "Identify and shift limiting beliefs that block growth and fulfillment.",
      "Learn manifestation techniques rooted in quantum physics to consciously shape your reality.",
      "Discover the role of chakras in amplifying your energy and attracting positivity.",
      "Align mind, body, and spirit to cultivate confidence, clarity, and a success-oriented mindset.",
    ],
    footer:
      "Perfect for those seeking transformation in health, wealth, love, and happiness with purpose and confidence.",
  },
];

function Courses() {
  const { courseSlug } = useParams();

  const visibleCourses = courseSlug
    ? courses.filter((course) => course.slug === courseSlug)
    : courses;

  const isSingle = visibleCourses.length === 1;

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            {courseSlug ? "Course Details" : "Our Transformational Courses"}
          </h1>

          {!courseSlug && (
            <p className="text-gray-700 text-lg">
              Conscious programs designed to awaken clarity, confidence, purpose,
              holistic health, and abundance in life.
            </p>
          )}
        </motion.div>

        {/* Course Cards */}
        <div
          className={`grid gap-10 w-full ${
            isSingle
              ? "grid-cols-1 max-w-4xl"
              : "grid-cols-1 md:grid-cols-2 max-w-6xl"
          }`}
        >
          {visibleCourses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-10 border border-emerald-100 hover:shadow-2xl transition mx-auto"
            >
              {/* Header */}
              <div className="mb-6 text-center">
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
              <div className="mt-6 pt-4 border-t text-gray-600 italic text-center">
                {course.footer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
