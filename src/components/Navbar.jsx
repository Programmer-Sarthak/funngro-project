import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <div className="w-8 h-8 bg-green-500 rounded-lg rotate-12" />
        Funngro <span className="text-xs font-mono text-green-400">DEV</span>
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/" className="hover:text-green-400 transition">Company</Link>
        <Link to="/teen" className="hover:text-green-400 transition">Teen</Link>
        <button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">
          Start Now
        </button>
      </div>
    </nav>
  );
}