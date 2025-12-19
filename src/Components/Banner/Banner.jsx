import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#4750ed] to-[#4E26E2]dark:bg-gray-900 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 rounded-lg shadow-lg">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <h1 className="text-4xl md:text-4xl font-bold text-white dark:text-indigo-400 mb-4">
  FreelanceMarketplace – Where Talent Meets Opportunity
</h1>
        <p className=" text-white font-semibold mb-6">
          Explore, post, and accept jobs seamlessly. Connect talented freelancers with exciting projects worldwide.
        </p>
        <div className="flex gap-4">
          <Link 
            to="/addJob" 
            className="bg-indigo-400 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
          >
            Create a Job
          </Link>
          <Link 
            to="/allJobs" 
            className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-50 transition"
          >
            Explore Jobs
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2 }}
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
      >
        <img 
          src="https://i.ibb.co.com/21bN2BSr/job-interview-illustration-concept-modern-flat-illustration-of-a-woman-talking-to-a-man-with-a-lapto.png" 
          className="w-full h-auto rounded-lg  bg-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
