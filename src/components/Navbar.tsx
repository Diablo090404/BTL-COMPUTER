import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Monitor, Search, Menu, X, User, Cpu } from "lucide-react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center tech-glow group-hover:scale-110 transition-transform">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter text-white">BHL <span className="text-accent">COMPUTER</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest transition-all hover:text-accent",
                  location.pathname === link.path ? "text-accent" : "text-slate-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="p-2 hover:bg-white/5 rounded-full transition-colors relative text-slate-400 hover:text-white">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[8px] flex items-center justify-center rounded-full tech-glow">2</span>
            </Link>
            <Link to="/login" className="bg-white/5 text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-2 border border-white/10 tech-glow">
              <User className="w-4 h-4" />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex gap-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex-1 bg-accent text-white py-3 rounded-lg font-bold text-center text-[10px] uppercase tracking-widest tech-glow">Login</Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="flex-1 border border-white/10 py-3 rounded-lg font-bold text-center text-[10px] uppercase tracking-widest text-white bg-white/5">Cart (2)</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
