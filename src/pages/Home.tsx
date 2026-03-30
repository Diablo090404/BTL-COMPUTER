import { motion } from "motion/react";
import { ArrowRight, ShoppingCart, Star, Sparkles, Zap, ShieldCheck, Clock, Users, MapPin, Monitor, Cpu, Mouse, Printer, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Custom Gaming PC - RTX 4060 Ti",
      specs: "Ryzen 5 7600X | 16GB DDR5 | 1TB NVMe",
      price: "3,899",
      rating: 4.9,
      image: "https://picsum.photos/seed/gamingpc/400/600",
      category: "Gaming PC"
    },
    {
      id: 2,
      title: "ASUS ROG Zephyrus G14",
      specs: "Ryzen 9 | RTX 4070 | 32GB RAM",
      price: "7,499",
      rating: 4.8,
      image: "https://picsum.photos/seed/laptop/400/600",
      category: "Laptops"
    },
    {
      id: 3,
      title: "Budget Student PC Build",
      specs: "Core i5-12400F | GTX 1650 | 16GB RAM",
      price: "1,850",
      rating: 4.7,
      image: "https://picsum.photos/seed/budgetpc/400/600",
      category: "Budget PC"
    },
    {
      id: 4,
      title: "Logitech G Pro X Superlight",
      specs: "Wireless Gaming Mouse - Black",
      price: "549",
      rating: 4.9,
      image: "https://picsum.photos/seed/mouse/400/600",
      category: "Accessories"
    }
  ];

  const services = [
    { title: "Laptop & PC Sales", icon: Monitor, desc: "Latest models and custom builds available in store today.", path: "/shop" },
    { title: "PC Repair & Upgrade", icon: Cpu, desc: "Fast troubleshooting, hardware replacement, and performance boost.", path: "/services" },
    { title: "Custom Gaming PC", icon: Zap, desc: "Tailored builds for your budget and gaming needs.", path: "/services" },
    { title: "Printer & Accessories", icon: Printer, desc: "Genuine parts, ink, and high-quality peripherals.", path: "/shop" },
  ];

  const stats = [
    { label: "Google Reviews", value: "4.9/5", icon: Star },
    { label: "Years Serving", value: "10+", icon: Clock },
    { label: "Happy Customers", value: "5k+", icon: Users },
    { label: "Repair Turnaround", value: "24h", icon: Zap },
  ];

  return (
    <div className="relative min-h-screen bg-tech-black overflow-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-accent text-[10px] font-bold uppercase tracking-widest mb-8 tech-glow">
                <Sparkles className="w-4 h-4" />
                Your Trusted Computer Shop in Tanjong Malim
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter text-white uppercase">
                SALES • REPAIR <br />
                <span className="text-accent italic">CUSTOM PC</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Professional computer services for students, gamers, and businesses. Fast repair, local warranty, and friendly support.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://wa.me/60163649245" className="btn-primary tech-glow">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us Now
                </a>
                <Link to="/services" className="btn-outline">
                  Get Free Diagnosis
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform tech-glow">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-1 text-white tracking-tight">{stat.value}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-32 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white tracking-tight uppercase">Our <span className="text-accent italic">Services</span></h2>
              <p className="text-slate-500 font-medium">Expert solutions for all your computing needs</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <Link to={service.path} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 h-full group hover:bg-accent/10 transition-all"
                  >
                    <service.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white tracking-tight uppercase">Featured <span className="italic text-accent">Products</span></h2>
                <p className="text-slate-500 font-medium">Available in store today with local warranty</p>
              </div>
              <Link to="/shop" className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-[10px] tech-glow">
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {featuredProducts.map((product, i) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative card-shadow border border-white/10">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <a href={`https://wa.me/60163649245?text=Hi, I want to check availability for ${product.title}`} className="bg-accent text-white p-3 rounded-xl shadow-xl hover:scale-110 transition-transform tech-glow flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/10 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                        {product.category}
                      </span>
                    </div>
                  </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-display font-bold text-xl group-hover:text-accent transition-colors leading-tight text-white tracking-tight">{product.title}</h3>
                        </Link>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{product.specs}</p>
                    <p className="text-2xl font-display font-bold text-white tracking-tight">RM {product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose BHL */}
        <section className="py-32 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight uppercase leading-none">Why Choose <br /><span className="text-accent italic">BHL Computer</span></h2>
                <div className="space-y-8">
                  {[
                    { title: "Physical Shop", desc: "Visit us in Tanjong Malim. No scam risk, real support.", icon: ShieldCheck },
                    { title: "Fast Repair Turnaround", desc: "Most repairs completed within 24-48 hours.", icon: Clock },
                    { title: "Friendly Support", desc: "Expert advice for students, gamers, and businesses.", icon: Users },
                    { title: "Local Warranty", desc: "Hassle-free warranty claims directly at our shop.", icon: ShieldCheck },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0 tech-glow">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[40px] overflow-hidden card-shadow border border-white/10">
                  <img src="https://picsum.photos/seed/shop/800/800" className="w-full h-full object-cover" alt="BHL Shop Interior" />
                </div>
                <div className="absolute -bottom-10 -left-10 glass-card p-8 tech-glow animate-bounce">
                  <p className="text-accent font-bold text-4xl mb-1">10+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card overflow-hidden grid md:grid-cols-2">
              <div className="p-12 md:p-20">
                <h2 className="text-4xl font-display font-bold mb-8 text-white uppercase tracking-tight">Visit Our <span className="text-accent italic">Shop</span></h2>
                <div className="space-y-6 text-slate-300">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0" />
                    <p>No 1, 2&3, Jalan U1, Taman Universiti, 35900 Tanjong Malim, Perak</p>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold text-white mb-2">Opening Hours:</p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex justify-between gap-8"><span>Mon - Sat:</span> <span>9:30 AM - 8:00 PM</span></li>
                        <li className="flex justify-between gap-8 text-red-500"><span>Sunday:</span> <span>Closed</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-8">
                    <a href="https://goo.gl/maps/your-actual-map-link" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 min-h-[400px] relative">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-accent/5 flex items-center justify-center">
                  <MapPin className="w-20 h-20 text-accent/20" />
                </div>
                <iframe 
                  src="https://maps.google.com/maps?q=No%201,%202%263,%20Jalan%20U1,%20Taman%20Universiti,%2035900%20Tanjong%20Malim,%20Perak&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full grayscale invert opacity-50 contrast-125"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Strong CTA Banner */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden group border border-white/10 shadow-2xl bg-gradient-to-r from-red-900 to-black">
            <div className="relative z-10 p-12 md:p-24 text-center">
              <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-none uppercase">
                Need Urgent <br />
                <span className="italic text-accent">Repair?</span>
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Message us now for a free consultation. Get a reply within minutes and same-day repair availability.
              </p>
              <a href="https://wa.me/60163649245?text=Hi, I need urgent repair for my computer" className="bg-white text-black px-16 py-6 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-3 tech-glow">
                WhatsApp Us Now <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
