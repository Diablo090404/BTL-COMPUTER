import { Link } from "react-router-dom";
import { Cpu, Twitter, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-tech-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Tech Grid Background for Footer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center tech-glow">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">BHL COMPUTER</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Your one-stop destination for high-performance gaming PCs, professional workstations, and expert tech services in Tanjong Malim.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all text-slate-400">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-8 text-white uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/shop" className="hover:text-accent transition-colors">Shop All</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-8 text-white uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-accent" /> bhlcomputer@gmail.com</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-accent" /> +60 16-364 9245</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-accent" /> Tanjong Malim, Perak, Malaysia</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 BHL Computer. All Rights Reserved.</p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
