import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        Next-Gen Earning for Teens.
      </motion.h1>
      
      <p className="mt-6 text-gray-400 text-xl max-w-2xl text-center">
        Smart India's #1 platform for Teenlancers. Connect with 5000+ companies and start your journey today.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-bold transition">
          Start Earning
        </button>
        <button className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full font-bold transition">
          Hire Talent
        </button>
      </div>
    </div>
  );
}