import { motion } from "framer-motion";

function Donate() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl mb-6"
        >
          Support Our Cause
        </motion.h1>

        <p className="text-slate-700 max-w-3xl mx-auto mb-12">
          Your generosity enables emotional healing, community care,
          and mindful living initiatives across Bangalore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card text-left">
            <h2 className="text-2xl mb-4">Bank Donation</h2>
            <p><b>Account Name:</b> Lifefullness Charitable Trust</p>
            <p><b>Account Number:</b> XXXXXXXXXXXX</p>
            <p><b>IFSC Code:</b> XXXXXXXX</p>
            <p><b>Bank:</b> XXXXX Bank, Bangalore</p>
          </div>

          <div className="card text-left">
            <h2 className="text-2xl mb-4">UPI Donation</h2>
            <p className="mb-4">Scan QR or use UPI ID</p>
            <p><b>UPI ID:</b> lifefullness@upi</p>

            <div className="mt-6 bg-gray-100 h-48 flex items-center justify-center rounded-xl text-gray-400">
              QR Code Here
            </div>
          </div>
        </div>

        <p className="mt-12 text-slate-600">
          Donations may be eligible for tax benefits under Section 80G.
        </p>
      </div>
    </section>
  );
}

export default Donate;
