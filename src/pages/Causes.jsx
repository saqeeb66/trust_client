import { motion } from "framer-motion";

function TermsAndConditions() {
  const sections = [
    {
      title: "Terms & Conditions",
      desc:
        "Welcome to Lifefullness Charitable Trust. By accessing or using our website, you agree to comply with the following terms and conditions. These terms govern your use of our website and services.",
      points: [
        "This website is intended to share information about our charitable activities and initiatives.",
        "Users agree to use this website only for lawful and ethical purposes.",
        "All content including text, images, logos, and materials belong to Lifefullness Charitable Trust.",
        "Unauthorized use or duplication of website content is prohibited.",
        "The Trust reserves the right to modify website content or policies at any time.",
      ],
    },
    {
      title: "Privacy Policy",
      desc:
        "Lifefullness Charitable Trust respects your privacy and is committed to protecting your personal information shared with us.",
      points: [
        "We may collect basic personal details such as name, email address, phone number, and donation information.",
        "Personal information is collected only for communication, donation processing, and service improvement.",
        "We do not sell, trade, or share your personal data with third parties.",
        "Appropriate security measures are implemented to safeguard user data.",
        "By using our website, you consent to our privacy practices.",
      ],
    },
    {
      title: "Refund & Cancellation Policy",
      desc:
        "As a charitable organization, all donations made to Lifefullness Charitable Trust are voluntary and used to support our initiatives.",
      points: [
        "Donations once made are generally non-refundable.",
        "In case of a genuine error or duplicate transaction, donors may request a refund within 7 days.",
        "Refund requests must be submitted via email with transaction details.",
        "Approved refunds will be processed within 7–10 working days.",
        "Refunds will be credited to the original payment method used.",
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
          <h1 className="text-4xl md:text-5xl mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-700 max-w-3xl mx-auto">
            Please read the following terms, privacy policy, and refund
            guidelines carefully before using our website or making a donation.
          </p>
        </motion.div>

        {/* CONTENT SECTIONS */}
        <div className="space-y-14">
          {sections.map((item, i) => (
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

              <ul className="max-w-3xl mx-auto space-y-3 text-slate-600 list-disc pl-6">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FOOTER INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-700">
            <b>Contact:</b> contact@lifefullness.org
          </p>
          <p className="text-slate-600 mt-2">
            Lifefullness Charitable Trust, India
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Last Updated: January 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default TermsAndConditions;
