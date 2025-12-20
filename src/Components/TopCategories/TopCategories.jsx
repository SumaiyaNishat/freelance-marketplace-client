import { motion } from "framer-motion";
import { Code, Megaphone, Palette, Layout, PenTool, Video } from "lucide-react";

const categories = [
  { title: "Web Development", icon: Code },
  { title: "Digital Marketing", icon: Megaphone },
  { title: "Graphic Design", icon: Palette },
  { title: "UI/UX Design", icon: Layout },
  { title: "Content Writing", icon: PenTool },
  { title: "Video Editing", icon: Video },
];

const TopCategories = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-2 text-blue-800">
            Explore Popular Job Categories
          </h2>
          <p className="text-gray-800 text-sm">
            Discover high-demand skills and opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-base-100 shadow-md rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl transition"
              >
                <Icon className="w-10 h-10 mx-auto text-indigo-600 mb-3" />
                <h3 className="font-medium text-sm">{cat.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
