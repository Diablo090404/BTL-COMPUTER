import { motion } from "motion/react";
import { ArrowRight, ShoppingCart, BookOpen, Star, Sparkles, Zap, Globe, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 39.90,
      rating: 4.8,
      image: "https://picsum.photos/seed/alchemist/400/600",
      category: "Fiction"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 75.00,
      rating: 4.9,
      image: "https://picsum.photos/seed/habits/400/600",
      category: "Self-Help"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 42.00,
      rating: 4.7,
      image: "https://picsum.photos/seed/1984/400/600",
      category: "Fiction"
    },
    {
      id: 4,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 68.00,
      rating: 4.8,
      image: "https://picsum.photos/seed/money/400/600",
      category: "Business"
    }
  ];

  const stats = [
    { label: "Active Readers", value: "50k+", icon: Globe },
    { label: "Books Delivered", value: "1.2M", icon: Rocket },
    { label: "Expert Curators", value: "150+", icon: Sparkles },
    { label: "Fast Delivery", value: "24h", icon: Zap },
  ];

  return (
    <div className="relative min-h-screen bg-space-dark overflow-hidden">
      {/* Dynamic Starfield Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-purple/20 via-space-dark to-space-dark" />
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
        {/* Animated Nebula Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cosmic-purple/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cosmic-blue/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-accent text-[10px] font-bold uppercase tracking-widest mb-8 galaxy-glow">
                <Sparkles className="w-4 h-4" />
                The Universe of Knowledge Awaits
              </div>
              <h1 className="text-7xl md:text-9xl font-display font-bold leading-[0.85] mb-8 tracking-tighter text-white">
                READ BEYOND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cosmic-blue to-accent bg-[length:200%_auto] animate-gradient italic">THE STARS</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Embark on a journey through the most curated collection of literature in the galaxy. From physical masterpieces to digital wonders.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/shop" className="bg-accent hover:bg-accent/80 text-white px-12 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all hover:scale-105 galaxy-glow flex items-center gap-2">
                  Explore Library <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/subscriptions" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-12 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all">
                  Join The Elite
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
                className="glass-card p-8 text-center group hover:bg-white/10 transition-all border border-white/10 rounded-[32px]"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform galaxy-glow">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-1 text-white tracking-tight">{stat.value}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white tracking-tight">Cosmic <span className="italic text-accent">Selections</span></h2>
                <p className="text-slate-500 font-medium">Handpicked masterpieces from across the universe</p>
              </div>
              <Link to="/shop" className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-[10px] galaxy-glow">
                View Full Archive <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {featuredBooks.map((book, i) => (
                <motion.div 
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 relative book-shadow border border-white/10">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <button className="bg-accent text-white p-3 rounded-2xl shadow-xl hover:scale-110 transition-transform galaxy-glow">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/10 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                        {book.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display font-bold text-xl group-hover:text-accent transition-colors leading-tight text-white tracking-tight">{book.title}</h3>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-bold">{book.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{book.author}</p>
                    <p className="text-2xl font-display font-bold text-white tracking-tight">RM {book.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Immersive CTA */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto relative rounded-[60px] overflow-hidden group border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/80 to-cosmic-blue/80 opacity-90" />
            <img src="https://picsum.photos/seed/galaxy/1920/1080" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
            
            <div className="relative z-10 p-12 md:p-24 text-center">
              <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
                JOIN THE <br />
                <span className="italic text-accent">COSMIC ELITE</span>
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Unlock the ultimate reading experience with our premium subscription. Unlimited digital access, monthly physical deliveries, and more.
              </p>
              <Link to="/subscriptions" className="bg-white text-space-dark px-16 py-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-3 galaxy-glow">
                Start Your Journey <Sparkles className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
