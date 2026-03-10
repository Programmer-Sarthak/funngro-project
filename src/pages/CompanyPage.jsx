import { motion } from "framer-motion";
import { Briefcase, Zap, DollarSign, Globe } from "lucide-react";

const features = [
  { title: "Innovation", desc: "Fresh ideas from the smartest generation.", icon: <Zap /> },
  { title: "Cost Effective", desc: "High quality work at 50% lower costs.", icon: <DollarSign /> },
  { title: "Scalability", desc: "Find talent for 12+ categories instantly.", icon: <Globe /> },
];

export default function CompanyPage() {
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-green-400 font-mono text-sm tracking-widest uppercase"
        >
          For Smart Enterprises
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mt-4"
        >
          Hire the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Top 1%</span> <br/> of Teen Talent
        </motion.h1>
      </section>

      {/* Modern Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 pb-20">
        {features.map((f, i) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={i}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-green-500/50 transition-all"
          >
            <div className="text-green-400 mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}