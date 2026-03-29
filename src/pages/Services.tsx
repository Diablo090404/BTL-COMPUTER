import { motion } from 'motion/react';
import { Wrench, Gamepad2, Building2, CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const repairServices = [
  { name: 'Virus & Malware Removal', price: 'From RM50' },
  { name: 'Windows Reformat / OS Install', price: 'From RM60' },
  { name: 'Hardware Cleaning (Dusting)', price: 'From RM40' },
  { name: 'Screen Replacement', price: 'From RM250' },
  { name: 'Battery Replacement', price: 'From RM150' },
  { name: 'Data Recovery', price: 'Quote via WA' },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-neutral-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Professional computer solutions for individuals and businesses in Tanjong Malim.
          </p>
        </div>
      </section>

      {/* Repair Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
                <Wrench className="w-6 h-6" />
                Computer Repair & Troubleshooting
              </div>
              <h2 className="text-4xl mb-8">Fast & Reliable Repairs</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Is your laptop slow? Blue screen? Broken hinge? We fix all major brands including Dell, HP, ASUS, Acer, Lenovo, and Apple. Most repairs are completed within 24-48 hours.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repairServices.map((s, idx) => (
                  <div key={idx} className="glass-card p-4 flex justify-between items-center">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-primary font-bold text-xs">{s.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-accent/10 border border-accent/20 rounded-2xl flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-bold text-white">Same Day Possible</div>
                  <p className="text-sm text-neutral-400">Bring your device before 12 PM for a chance at same-day repair.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/repair1/400/500" alt="Repair" className="rounded-2xl w-full h-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/repair2/400/500" alt="Repair" className="rounded-2xl w-full h-full object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Custom PC Section */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://picsum.photos/seed/gaming/800/600" alt="Gaming PC" className="rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
                <Gamepad2 className="w-6 h-6" />
                Custom Gaming PC
              </div>
              <h2 className="text-4xl mb-8">Build Your Dream Rig</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                From budget student builds to high-end streaming monsters. We provide expert consultation, professional cable management, and stress testing.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Free Consultation & Part Selection',
                  'Professional Assembly & Cable Management',
                  'OS Installation & Driver Updates',
                  'Stress Testing & Benchmarking',
                  'Local Warranty on All Components'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/60123456789?text=Hi,%20I%20want%20to%20build%20a%20custom%20gaming%20PC." className="btn-primary">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
              <Building2 className="w-6 h-6" />
              Office & Business Solutions
            </div>
            <h2 className="text-4xl mb-4">Helping Local Businesses Grow</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Reliable IT support and hardware supply for SMEs, schools, and offices in Tanjong Malim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bulk Purchase', desc: 'Laptops, desktops, and monitors for your team at corporate rates.' },
              { title: 'Networking', desc: 'Office WiFi setup, LAN cabling, and router configuration.' },
              { title: 'Printer Service', desc: 'Ink supply, maintenance, and repair for office printers.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-8">
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-neutral-400 text-sm mb-6">{item.desc}</p>
                <Link to="/contact" className="text-primary font-bold text-sm">Inquire Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-8">Not sure what's wrong with your PC?</h2>
          <p className="text-xl text-neutral-400 mb-12">Bring it in for a <span className="text-white font-bold underline decoration-primary">FREE diagnosis</span>. No fix, no fee.</p>
          <a href="https://wa.me/60163649245" className="btn-primary mx-auto w-fit">
            <MessageCircle className="w-6 h-6" />
            Message Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
