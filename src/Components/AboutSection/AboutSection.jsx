import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Freelance MarketPlace?</h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Freelance Marketplace is a trusted freelance marketplace where businesses
            connect with skilled professionals. Post jobs, accept tasks, and
            collaborate seamlessly in a secure environment.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              Verified job postings
            </li>

            <li className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-indigo-600" />
              Secure & transparent workflow
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
              Easy job acceptance system
            </li>

            <li className="flex items-center gap-3">
              <Users className="w-5 h-5 text-indigo-600" />
              Built for freelancers & employers
            </li>
          </ul>
        </motion.div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-10 text-white shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Work Smarter. Hire Faster.
          </h3>

          <p className="text-sm opacity-90">
            Join thousands of users using FreelanceMP to grow their business and
            career with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
