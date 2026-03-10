import { motion } from "framer-motion";
import { Laptop, Music, Palette, PenTool, Award, TrendingUp, DollarSign } from "lucide-react";

export default function TeenPage() {
  const handleEarn = (job) => alert(`Setting up your workspace for ${job}... Success!`);

  return (
    <div className="bg-[#050816] text-white pt-32">
      {/* 1. HERO */}
      <section className="py-20 text-center px-6">
        <h1 className="text-7xl md:text-9xl font-black mb-6">Earn your <br/> first <span className="text-green-500">Income.</span></h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10">Smart India's #1 platform for Teenlancers to learn, earn, and grow.</p>
        <button onClick={() => handleEarn("Onboarding")} className="bg-green-500 text-black px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition">Register Now</button>
      </section>

      {/* 2. REWARDS / STATS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {l: "Active Gigs", v: "2,500+", i: <Laptop/>},
          {l: "Total Earned", v: "₹1.5Cr+", i: <DollarSign/>},
          {l: "Certified Teens", v: "10K+", i: <Award/>},
          {l: "Companies Hiring", v: "500+", i: <TrendingUp/>}
        ].map(s => (
          <div key={s.l} className="p-8 glass-card border-white/5 text-center">
            <div className="text-green-500 flex justify-center mb-4">{s.i}</div>
            <h3 className="text-3xl font-bold">{s.v}</h3>
            <p className="text-gray-500 text-xs mt-2 uppercase">{s.l}</p>
          </div>
        ))}
      </section>

      {/* 3. CATEGORIES (Visual Icons) */}
      <section className="py-32 bg-[#020617] px-6">
        <h2 className="text-center text-4xl font-bold mb-20">What can you do?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {t: "Creative Arts", d: "Design logos, edit videos, and create memes.", i: <Palette/>},
            {t: "Tech & Code", d: "Build websites, test apps, and fix bugs.", i: <Laptop/>},
            {t: "Voice & Audio", d: "Do voice overs, podcasts, and sound design.", i: <Music/>}
          ].map(c => (
            <div key={c.t} onClick={() => handleEarn(c.t)} className="p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-green-500/10 transition-all cursor-pointer group">
              <div className="w-14 h-14 bg-green-500/20 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-black transition">{c.i}</div>
              <h4 className="text-2xl font-bold mb-4">{c.t}</h4>
              <p className="text-gray-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MENTORSHIP / CERTIFICATION (New Section) */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1">
          <h2 className="text-5xl font-black mb-6">The name says it all. <br/> "Its <span className="text-green-500">Fun</span> to <span className="text-green-500">Grow</span>"</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">Funngro is built by educators, IIM alumni, and tech enthusiasts. We help teenagers become financially empowered and responsible citizens.</p>
          <div className="flex gap-4">
             <div className="p-4 glass-card"><strong>Payal Jain</strong><br/><span className="text-xs text-gray-500">CEO</span></div>
             <div className="p-4 glass-card"><strong>Anik Jain</strong><br/><span className="text-xs text-gray-500">CGO</span></div>
          </div>
        </div>
        <div className="flex-1 w-full bg-gradient-to-br from-green-500/20 to-blue-500/20 p-1 rounded-3xl">
           <div className="bg-[#050816] rounded-3xl p-10 h-full">
              <h4 className="font-bold mb-4">Certification Program</h4>
              <p className="text-sm text-gray-500 mb-6">Complete gigs to earn your "Pro Teenlancer" badge. Verified by industry leaders.</p>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-8"><div className="h-full w-2/3 bg-green-500"></div></div>
              <button onClick={() => handleEarn("Cert Program")} className="w-full py-4 border border-green-500 text-green-500 rounded-xl font-bold hover:bg-green-500 hover:text-black transition">Start Learning</button>
           </div>
        </div>
      </section>
    </div>
  );
}