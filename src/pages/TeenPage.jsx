import { motion } from "framer-motion";
import { Laptop, Music, Palette, PenTool } from "lucide-react";

const gigs = [
  { name: "Web Dev", reward: "₹5000+", icon: <Laptop /> },
  { name: "Voice Over", reward: "₹2000+", icon: <Music /> },
  { name: "Design", reward: "₹3500+", icon: <Palette /> },
  { name: "Content", reward: "₹1500+", icon: <PenTool /> },
];

export default function TeenPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black mb-4">Earn. Learn. <span className="text-green-500">Repeat.</span></h1>
        <p className="text-gray-400 text-lg">Stop scrolling, start earning. Real projects from real brands.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {gigs.map((gig, i) => (
          <motion.div 
            key={i} whileHover={{ scale: 1.05 }}
            className="glass-card p-6 flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-green-500/10 rounded-full text-green-400 mb-4 group-hover:bg-green-500 group-hover:text-black transition-all">
              {gig.icon}
            </div>
            <h3 className="font-bold text-xl">{gig.name}</h3>
            <p className="text-green-400 font-mono mt-2">{gig.reward}</p>
          </motion.div>
        ))}
      </div>

      {/* SEO Content Section */}
      <section className="mt-20 p-10 bg-green-500/5 rounded-3xl border border-green-500/20">
        <h2 className="text-3xl font-bold mb-4">Why India's Smartest Teens Choose Funngro</h2>
        <p className="text-gray-400 leading-relaxed">
          As a specialized platform for **Teenlancers in India**, Funngro bridge the gap between education and professional earning. 
          Gain **experiential learning**, build a **professional portfolio**, and secure **certified internships** while managing 
          your studies. It's the ultimate hub for financial independence.
        </p>
      </section>
    </div>
  );
}