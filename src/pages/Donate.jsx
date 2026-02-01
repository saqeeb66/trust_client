import { motion } from "framer-motion";

function Donate() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex justify-center">
        {/* Center Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white w-full max-w-4xl rounded-3xl shadow-xl p-10 border border-emerald-100"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-8 text-center">
            JOIN OUR TRIBE
          </h1>

          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
            Your contribution helps us continue our mission of emotional healing,
            conscious living, and community well-being.  
            Please use the bank details below to support our initiatives.
          </p>

          {/* Bank Details Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-emerald-200 rounded-xl overflow-hidden">
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 font-medium bg-emerald-50">
                    Name of the Account
                  </td>
                  <td className="p-4">LT CHARITABLE TRUST</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-medium bg-emerald-50">
                    Type of Account
                  </td>
                  <td className="p-4">Saving Account</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-medium bg-emerald-50">
                    Account Number
                  </td>
                  <td className="p-4">926010003347942</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-medium bg-emerald-50">
                    Name of the Bank
                  </td>
                  <td className="p-4">AXIS BANK LIMITED</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-medium bg-emerald-50">
                    Name of the Branch
                  </td>
                  <td className="p-4">Kumaraswamy Layout Branch</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-medium bg-emerald-50">
                    Address of the Branch
                  </td>
                  <td className="p-4">Axis Bank Ltd.</td>
                </tr>

                <tr>
                  <td className="p-4 font-medium bg-emerald-50">
                    IFSC Code
                  </td>
                  <td className="p-4 font-semibold text-emerald-700">
                    UTIB0004455
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <p className="mt-10 text-center text-gray-600 italic">
            Join Our Tribe and get part of us .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Donate;
