import { Link } from 'react-router-dom';
import { Laptop, Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter uppercase">
                BHL<span className="text-primary">Computer</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your trusted computer shop in Tanjong Malim since 2015. We provide expert repairs, custom gaming PCs, and the latest laptops.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-neutral-300" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-neutral-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-neutral-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Laptop Repair', 'Custom PC Build', 'Virus Removal', 'Hardware Upgrade', 'Printer Service'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-6">Visit Us</h3>
            <div className="flex items-start gap-3 text-sm text-neutral-400">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>No 1, 2&3, Jalan U1, Taman Universiti, 35900 Tanjong Malim, Perak</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>016-364 9245</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <span>Mon - Sat: 9:30 AM - 8:00 PM</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© 2026 BHL Computer Tanjong Malim. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
