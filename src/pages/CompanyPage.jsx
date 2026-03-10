{/* --- ULTRA HERO SECTION --- */}
<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
  {/* Animated Background Orbs */}
  <div className="absolute top-1/4 -left-20 w-72 h-72 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
  <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="z-10 text-center px-6"
  >
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-8">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      NOW HIRING: 15,000+ TECH-SAVVY TEENS
    </div>
    
    <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter text-white">
      STOP SEARCHING. <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-emerald-600">
        START GROWING.
      </span>
    </h1>
    
    <p className="mt-8 text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
      The most cost-effective way to find <span className="text-white font-semibold">Website Design, Social Media, and Video</span> talent. Built by educators, loved by companies.
    </p>

    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-green-500 transition-colors">
        Hire Talent
      </button>
      <button className="glass-card border-white/10 px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-colors">
        View Portfolio
      </button>
    </div>
  </motion.div>
</section>

import { motion } from "framer-motion";
import { 
  Zap, ShieldCheck, Cpu, Users, BarChart3, Rocket, 
  CheckCircle, Globe, Layers, Star, PlayCircle, HelpCircle 
} from "lucide-react";

export default function CompanyPage() {
  const handleAction = (msg) => alert(msg || "Processing your request...");

  return (
    <div className="text-white bg-[#050816]">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 text-center">
        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-6xl md:text-8xl font-black mb-6">
          Smart Companies find <br/><span className="text-green-500 underline">Smart Talent</span>
        </motion.h1>
        <p className="text-gray-400 text-xl max-w-2xl mb-10">Hire India's top Teenagers to grow your business with innovation and cost-effectiveness.</p>
        <div className="flex gap-4">
          <button onClick={() => handleAction("Opening Company Login")} className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-green-500 transition-all">Company Login</button>
          <button onClick={() => handleAction("Redirecting to Teen Page")} className="bg-green-500 text-black px-10 py-4 rounded-xl font-bold">Earn Now</button>
        </div>
      </section>

      {/* 2. TRUSTED BY (LOGOS) */}
      <section className="py-20 border-y border-white/5 bg-black/20">
        <h2 className="text-center text-gray-500 uppercase tracking-widest text-sm mb-10">We are Featured In</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {["Business News", "Times of India", "Economic Times", "YourStory", "Forbes"].map(logo => (
            <span key={logo} className="text-2xl font-bold italic">{logo}</span>
          ))}
        </div>
      </section>

      {/* 3. WHY WORK WITH TEENS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"></div>
            <div className="relative bg-slate-900 p-8 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold mb-6">Why work with Teens</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">Teenagers are the smarter generations, more clued in to your customer mindset, cost-effective and delivery high quality work.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-center"><CheckCircle className="text-green-500" /><span>Innovation & Fresh Ideas</span></div>
                <div className="flex gap-4 items-center"><CheckCircle className="text-green-500" /><span>Cost Effective (Save up to 50%)</span></div>
              </div>
            </div>
          </div>
          <div>
             <h2 className="text-5xl font-black mb-8 leading-tight">Innovation <br/> no longer <br/> needs a <span className="text-green-500 italic">Suit.</span></h2>
             <button onClick={() => handleAction("Contacting Sales")} className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">Contact Us</button>
          </div>
        </div>
      </section>

      {/* 4. CATEGORY GRID (Reflecting your SS) */}
      <section className="py-32 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Talent for all your needs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Social Media", "Video Creation", "Website Design", "Influencer", "App Dev", "Data Entry", "Content Writing", "Graphics"].map(cat => (
              <div key={cat} onClick={() => handleAction(`Exploring ${cat}`)} className="p-10 glass-card border-white/5 text-center cursor-pointer hover:border-green-500/50 transition-all group">
                <Layers className="mx-auto mb-4 text-green-500 group-hover:scale-110 transition" />
                <h4 className="font-bold">{cat}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20">Simple steps to start</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center relative">
          {[
            {n: "1", t: "Register", d: "Sign up as a company"},
            {n: "2", t: "Add Project", d: "Post your requirements"},
            {n: "3", t: "Get Apps", d: "Curated list of teens"},
            {n: "4", t: "Select", d: "Pick your best match"}
          ].map((step, i) => (
            <div key={i} className="text-center z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 text-black rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-[0_0_20px_rgba(34,197,94,0.5)]">{step.n}</div>
              <h4 className="font-bold mb-2">{step.t}</h4>
              <p className="text-xs text-gray-500">{step.d}</p>
            </div>
          ))}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/5 -z-0"></div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-32 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <h2 className="text-4xl font-bold mb-16 text-center">Happy Members</h2>
          <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide">
            {[1,2,3].map(i => (
              <div key={i} className="min-w-[400px] p-8 glass-card border-white/10">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-700 rounded-full" />
                  <div>
                    <h5 className="font-bold">Director @ TechCorp</h5>
                    <div className="flex text-yellow-500 text-xs"><Star/><Star/><Star/><Star/><Star/></div>
                  </div>
                </div>
                <p className="text-gray-400 italic">"Teens work is excellent. It's cost effective with great quality. Have used their graphic designing and it was top-notch."</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-32 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {["How do we start?", "Is it legal for teens?", "How much does it cost?"].map(q => (
            <div key={q} onClick={() => handleAction("Expanding FAQ...")} className="p-6 glass-card border-white/10 cursor-pointer flex justify-between items-center hover:bg-white/5">
              <span>{q}</span>
              <HelpCircle className="text-green-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}