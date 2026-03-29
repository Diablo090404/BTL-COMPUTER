import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Zap, Star, MapPin, Laptop, Gamepad2, MousePointer2, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: 'Laptop & PC Sales',
    desc: 'Latest models from ASUS, HP, Acer & more. Ready stock available.',
    icon: Laptop,
    color: 'text-blue-400'
  },
  {
    title: 'PC Repair',
    desc: 'Fast diagnosis & repair. Virus removal, slow PC fix, hardware replacement.',
    icon: Zap,
    color: 'text-yellow-400'
  },
  {
    title: 'Custom Gaming PC',
    desc: 'Build your dream rig. Budget to high-end with FPS benchmarks.',
    icon: Gamepad2,
    color: 'text-primary'
  },
  {
    title: 'Accessories',
    desc: 'Printers, networking, RAM, SSD, and gaming peripherals.',
    icon: MousePointer2,
    color: 'text-accent'
  }
];

const products = [
  {
    name: 'Budget Gaming Rig',
    price: 'From RM1,899',
    tag: 'Best Seller',
    image: 'https://picsum.photos/seed/pc1/400/300'
  },
  {
    name: 'Student Laptop Pro',
    price: 'From RM2,299',
    tag: 'Student Choice',
    image: 'https://picsum.photos/seed/laptop1/400/300'
  },
  {
    name: 'Office Desktop Set',
    price: 'From RM1,200',
    tag: 'Office Ready',
    image: 'https://picsum.photos/seed/pc2/400/300'
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10" />
          <img 
            src="https://picsum.photos/seed/tech/1920/1080?blur=2" 
            alt="Tech Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-primary" />
              Trusted in Tanjong Malim since 2015
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
              Your Trusted <span className="text-primary">Computer Shop</span> in Tanjong Malim
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
              Sales • Repair • Custom PC • Fast Service. We help students, gamers, and businesses with reliable tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/60163649245" className="btn-primary text-lg px-8 py-4">
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us Now
              </a>
              <Link to="/services" className="btn-outline text-lg px-8 py-4">
                Get Free Diagnosis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-xl">⭐ 4.9/5 Google Reviews</div>
            <div className="flex items-center gap-2 font-bold text-xl">✅ Local Warranty</div>
            <div className="flex items-center gap-2 font-bold text-xl">⚡ Same Day Repair</div>
            <div className="flex items-center gap-2 font-bold text-xl">🏢 Physical Shop</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Professional Tech Services</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Expert solutions for all your computing needs. Fast turnaround and friendly support guaranteed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group cursor-pointer"
              >
                <div className={cn("p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:bg-primary/20 transition-colors", s.color)}>
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <Link to="/services" className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl mb-4">Featured Products</h2>
              <p className="text-neutral-400">Available in store today. Check availability via WhatsApp.</p>
            </div>
            <Link to="/shop" className="btn-outline">View All Products</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, idx) => (
              <div key={idx} className="glass-card overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded mb-4 inline-block">
                    {p.tag}
                  </span>
                  <h3 className="text-xl mb-2">{p.name}</h3>
                  <p className="text-2xl font-display font-bold text-white mb-6">{p.price}</p>
                  <a href={`https://wa.me/60163649245?text=Hi,%20is%20${p.name}%20available?`} className="btn-primary w-full">
                    Check Availability
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <img 
                src="https://picsum.photos/seed/shop/800/600" 
                alt="Our Shop" 
                className="rounded-3xl relative z-10 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6 z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">100% Genuine Parts</div>
                    <div className="text-xs text-neutral-400">Official local warranty provided</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl">Why Tanjong Malim Trusts BHL Computer?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Physical Shop', desc: 'No scam risk. Visit us anytime for support or warranty claims.' },
                  { title: 'Fast Turnaround', desc: 'Most repairs done within 24-48 hours. Urgent cases same day.' },
                  { title: 'Friendly Support', desc: 'We explain technical issues in simple terms. No hidden costs.' },
                  { title: 'Student Friendly', desc: 'Special discounts and budget options for UPSI students.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 text-primary">
                      <Star className="w-5 h-5 fill-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-neutral-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/about" className="btn-primary w-fit">Learn Our Story</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Visit Our Shop Today</h2>
            <p className="text-neutral-400">Conveniently located in the heart of Tanjong Malim.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-white mb-1">Our Address</div>
                    <p className="text-sm text-neutral-400">No 1, 2&3, Jalan U1, Taman Universiti, 35900 Tanjong Malim, Perak</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-white mb-1">Opening Hours</div>
                    <p className="text-sm text-neutral-400">Mon - Sat: 9:30 AM - 8:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline w-full"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 h-[400px] rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
              <iframe 
                src="https://www.google.com/maps?q=No%201,%202%263,%20Jalan%20U1,%20Taman%20Universiti,%2035900%20Tanjong%20Malim,%20Perak&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Shop Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8">Ready to fix your PC or upgrade your setup?</h2>
          <p className="text-xl text-neutral-400 mb-12">Message us now — Get a reply within minutes from our friendly staff.</p>
          <a href="https://wa.me/60163649245" className="btn-primary text-xl px-12 py-6 mx-auto w-fit">
            <MessageCircle className="w-8 h-8" />
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
