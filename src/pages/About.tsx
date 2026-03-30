import { motion } from "motion/react";
import { BookOpen, Sparkles, Users, Award, Heart, Globe } from "lucide-react";

export function About() {
  return (
    <div className="pt-32 pb-20 px-4 bg-space-dark min-h-screen relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-widest border border-accent/20 galaxy-glow"
          >
            <Sparkles className="w-4 h-4" />
            Our Cosmic Origin
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-white tracking-tighter">BEYOND THE <br /> <span className="italic text-accent galaxy-glow">PRINTED</span> GALAXY</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Cosmic Books was founded with a simple mission: to connect every reader with the stories that will define their future across the universe.
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group">
              <img src="https://picsum.photos/seed/vision/800/800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rotate-6 hidden md:block galaxy-glow">
              <p className="text-4xl font-display font-bold text-accent mb-2">2024</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Established in Orbit</p>
            </div>
          </motion.div>

          <div className="space-y-10">
            <h2 className="text-5xl font-display font-bold leading-tight text-white tracking-tight">A UNIVERSE OF <br /> <span className="text-accent italic galaxy-glow">POSSIBILITIES</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We believe that books are more than just paper and ink. They are portals to other worlds, vessels of wisdom, and catalysts for change. Whether you're looking for a physical masterpiece to grace your shelves or a digital companion for your travels, we're here to guide you through the stars.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Users, label: "Community", text: "10k+ Active Readers" },
                { icon: Globe, label: "Global", text: "Shipping to 120+ Systems" },
                { icon: Award, label: "Quality", text: "Curated Selections" },
                { icon: Heart, label: "Passion", text: "Reader-First Approach" }
              ].map((item, i) => (
                <div key={i} className="space-y-3 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="font-bold text-white">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl font-display font-bold mb-4 text-white tracking-tight">MEET THE CURATORS</h2>
            <p className="text-slate-400">The minds behind the universe of Cosmic Books.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Rivera", role: "Founder & CEO", img: "https://i.pravatar.cc/150?u=alex" },
              { name: "Sarah Chen", role: "Head of Curation", img: "https://i.pravatar.cc/150?u=sarah" },
              { name: "Marcus Thorne", role: "Community Lead", img: "https://i.pravatar.cc/150?u=marcus" }
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 text-center group hover:border-accent/30 transition-colors"
              >
                <img src={member.img} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white/10 p-1 group-hover:border-accent/30 transition-colors shadow-2xl" />
                <h3 className="text-2xl font-display font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
