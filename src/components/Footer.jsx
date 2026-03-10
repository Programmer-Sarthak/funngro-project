import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Rocket, Send } from "lucide-react";

export default function Footer() {
  const handleFooterLink = (name) => {
    alert(`Navigating to Funngro's official ${name} page...`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if(email) {
      alert(`Success! Newsletter sent to: ${email}. Welcome to the community!`);
      e.target.reset();
    }
  };

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-lg" />
            <span className="text-2xl font-black italic">FUNNGRO</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Enable Smart Teenagers and Smart Companies to realize their full potentials. It's fun to grow.
          </p>
          <div className="flex gap-5 text-gray-400">
            <Instagram onClick={() => handleFooterLink("Instagram")} className="w-6 h-6 hover:text-green-500 cursor-pointer transition-colors" />
            <Linkedin onClick={() => handleFooterLink("LinkedIn")} className="w-6 h-6 hover:text-green-500 cursor-pointer transition-colors" />
            <Twitter onClick={() => handleFooterLink("Twitter")} className="w-6 h-6 hover:text-green-500 cursor-pointer transition-colors" />
            <Facebook onClick={() => handleFooterLink("Facebook")} className="w-6 h-6 hover:text-green-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-xs tracking-widest">Platform</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li onClick={() => handleFooterLink("Teen Work")} className="hover:text-green-400 cursor-pointer transition-colors">Find Work</li>
            <li onClick={() => handleFooterLink("Hiring")} className="hover:text-green-400 cursor-pointer transition-colors">Hire Talent</li>
            <li onClick={() => handleFooterLink("Shelancer")} className="hover:text-green-400 cursor-pointer transition-colors">Shelancer</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li onClick={() => handleFooterLink("About")} className="hover:text-green-400 cursor-pointer transition-colors">About Us</li>
            <li onClick={() => handleFooterLink("Blogs")} className="hover:text-green-400 cursor-pointer transition-colors">Blogs</li>
            <li onClick={() => handleFooterLink("Careers")} className="hover:text-green-400 cursor-pointer transition-colors">Careers</li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-xs tracking-widest">Get Updates</h4>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="relative">
              <input 
                name="email"
                type="email" 
                required
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 w-full text-sm focus:outline-none focus:border-green-500 transition-colors" 
              />
              <button type="submit" className="absolute right-2 top-2 bg-green-500 p-2 rounded-lg text-black hover:bg-green-400 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 italic">By subscribing, you agree to our Privacy Policy.</p>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
        <p>© 2026 FUNNGRO - WISHBANC TECHNOLOGIES PVT LTD. | DEV: SARTHAK CHOUREY</p>
        <div className="flex gap-8">
          <span onClick={() => handleFooterLink("Privacy")} className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span onClick={() => handleFooterLink("Terms")} className="hover:text-white cursor-pointer">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}