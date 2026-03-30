import { Link } from "react-router-dom";
import { BookOpen, Twitter, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-space-dark pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Animated Stars Background for Footer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center galaxy-glow">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">COSMIC BOOKS</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              We believe in the power of stories to change the universe. Our mission is to connect readers with the books that will inspire their next big discovery.
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
              <li><Link to="/subscriptions" className="hover:text-accent transition-colors">Subscription Plans</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-8 text-white uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-accent" /> hello@cosmicbooks.com</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-accent" /> +60 16-364 9245</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-accent" /> Tanjong Malim, Perak, Malaysia</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 Cosmic Books. Established in Orbit.</p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
