import { motion } from 'motion/react';
import { Wrench, Gamepad2, Building2, CheckCircle2, MessageCircle, Zap, ShieldCheck, Clock, Monitor, Printer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const repairServices = [
  { name: 'Basic Servicing / Cleaning', price: 'From RM50' },
  { name: 'Virus & Malware Removal', price: 'From RM60' },
  { name: 'Windows Reformat / OS Install', price: 'From RM70' },
  { name: 'Hardware Cleaning (Dusting)', price: 'From RM50' },
  { name: 'Screen Replacement', price: 'From RM280' },
  { name: 'Battery Replacement', price: 'From RM180' },
  { name: 'Data Recovery', price: 'Quote via WA' },
  { name: 'Motherboard Repair', price: 'Quote via WA' },
];

export function Services() {
  return (
    <div className="pt-20 bg-tech-black min-h-screen relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      {/* Header */}
      <section className="py-32 bg-white/5 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold mb-6 uppercase tracking-tighter"
          >
            Our <span className="text-accent italic">Services</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Professional computer solutions for students, gamers, and businesses in Tanjong Malim.
          </p>
        </div>
      </section>

      {/* Repair Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-bold mb-6 uppercase tracking-widest text-xs">
                <Wrench className="w-5 h-5" />
                Computer Repair & Troubleshooting
              </div>
              <h2 className="text-5xl font-display font-bold mb-8 uppercase tracking-tight">Fast & Reliable <span className="text-accent italic">Repairs</span></h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Is your laptop slow? Blue screen? Broken hinge? We fix all major brands including Dell, HP, ASUS, Acer, Lenovo, and Apple. Most repairs are completed within 24-48 hours.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {repairServices.map((s, idx) => (
                  <div key={idx} className="glass-card p-5 flex justify-between items-center group hover:border-accent/50 transition-all">
                    <span className="text-sm font-bold text-slate-300">{s.name}</span>
                    <span className="text-accent font-bold text-sm">{s.price}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-accent/10 border border-accent/20 rounded-2xl flex items-center gap-6 tech-glow">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-white text-xl mb-1">Same Day Possible</div>
                  <p className="text-slate-400">Bring your device before 12 PM for a chance at same-day repair.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://picsum.photos/seed/repair1/400/600" alt="Repair" className="rounded-3xl w-full aspect-[3/4] object-cover card-shadow border border-white/10" referrerPolicy="no-referrer" />
                <div className="glass-card p-8 text-center tech-glow">
                  <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Fast Turnaround</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="glass-card p-8 text-center tech-glow">
                  <ShieldCheck className="w-10 h-10 text-accent mx-auto mb-4" />
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Local Warranty</p>
                </div>
                <img src="https://picsum.photos/seed/repair2/400/600" alt="Repair" className="rounded-3xl w-full aspect-[3/4] object-cover card-shadow border border-white/10" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom PC Section */}
      <section className="py-32 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(220,38,38,0.05),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src="https://picsum.photos/seed/gaming/800/600" alt="Gaming PC" className="rounded-[40px] border border-white/10 card-shadow" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 -right-10 glass-card p-8 tech-glow">
                <p className="text-accent font-bold text-2xl mb-1">FPS BOOST</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Optimized for Valorant & PUBG</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-accent font-bold mb-6 uppercase tracking-widest text-xs">
                <Gamepad2 className="w-5 h-5" />
                Custom Gaming PC
              </div>
              <h2 className="text-5xl font-display font-bold mb-8 uppercase tracking-tight">Build Your <span className="text-accent italic">Dream Rig</span></h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                From budget student builds to high-end streaming monsters. We provide expert consultation, professional cable management, and stress testing.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  'Free Consultation & Part Selection',
                  'Professional Assembly & Cable Management',
                  'OS Installation & Driver Updates',
                  'Stress Testing & FPS Benchmarking',
                  'Local Warranty on All Components'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-300 font-medium">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/60163649245?text=Hi, I want to build a custom gaming PC. My budget is around RM..." className="btn-primary tech-glow w-full sm:w-fit">
                <MessageCircle className="w-5 h-5" /> Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-accent font-bold mb-6 uppercase tracking-widest text-xs">
              <Building2 className="w-5 h-5" />
              Office & Business Solutions
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">Helping Local <span className="text-accent italic">Businesses</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Reliable IT support and hardware supply for SMEs, schools, and offices in Tanjong Malim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bulk Purchase', desc: 'Laptops, desktops, and monitors for your team at corporate rates.', icon: Monitor },
              { title: 'Networking', desc: 'Office WiFi setup, LAN cabling, and router configuration.', icon: Zap },
              { title: 'Printer Service', desc: 'Ink supply, maintenance, and repair for office printers.', icon: Printer }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-10 group hover:bg-accent/5 transition-all">
                <item.icon className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{item.desc}</p>
                <Link to="/contact" className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center glass-card p-16 md:p-24 tech-glow border-accent/20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter">Not sure what's wrong with your PC?</h2>
          <p className="text-xl text-slate-400 mb-12">Bring it in for a <span className="text-white font-bold underline decoration-accent underline-offset-8">FREE diagnosis</span>. No fix, no fee.</p>
          <a href="https://wa.me/60163649245?text=Hi, I want to get a free diagnosis for my computer" className="btn-primary mx-auto w-fit px-12 py-6 text-lg">
            <MessageCircle className="w-6 h-6" />
            Message Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
