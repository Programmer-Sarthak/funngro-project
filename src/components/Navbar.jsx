import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Zap } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const handleNavAction = (action) => {
    alert(`${action} system is initializing... Redirecting you to the secure portal.`);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 glass-card px-8 py-4 flex justify-between items-center border-white/20 shadow-2xl"
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
          <Zap className="text-black w-6 h-6 fill-current" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Funngro</span>
      </Link>

      <div className="hidden lg:flex gap-10 items-center font-bold uppercase text-xs tracking-widest">
        <Link to="/" className={`transition-colors ${location.pathname === "/" ? "text-green-400" : "text-gray-400 hover:text-white"}`}>Company</Link>
        <Link to="/teen" className={`transition-colors ${location.pathname === "/teen" ? "text-green-400" : "text-gray-400 hover:text-white"}`}>Teen</Link>
        <button onClick={() => handleNavAction("Shelancer Portal")} className="text-gray-400 hover:text-white transition-colors">Shelancer</button>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => handleNavAction("Company Login")}
          className="hidden sm:block text-sm font-bold text-gray-300 hover:text-white px-4"
        >
          Login
        </button>
        <button 
          onClick={() => handleNavAction("Earn Now Registration")}
          className="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-lg font-black text-sm flex items-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          EARN NOW <Rocket className="w-4 h-4" />
        </button>
      </div>
    </motion.nav>
  );
}