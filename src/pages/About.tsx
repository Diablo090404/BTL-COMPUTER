import { motion } from "motion/react";
import { Cpu, Sparkles, Users, Award, Heart, ShieldCheck, MapPin, Clock } from "lucide-react";

export function About() {
  return (
    <div className="pt-32 pb-20 px-4 bg-tech-black min-h-screen relative overflow-hidden">
      {/* Tech Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-widest border border-accent/20 tech-glow"
          >
            <Sparkles className="w-4 h-4" />
            Our Local Roots
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-white tracking-tighter uppercase">YOUR TRUSTED <br /> <span className="italic text-accent tech-glow">TECH PARTNER</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            BHL Computer was established in Tanjong Malim with a clear goal: to provide high-quality computer sales and reliable repair services to our local community.
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
            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group bg-white/5">
              <img src="https://picsum.photos/seed/shop-front/800/800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rotate-6 hidden md:block tech-glow">
              <p className="text-4xl font-display font-bold text-accent mb-2">2018</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Established in Tanjong Malim</p>
            </div>
          </motion.div>

          <div className="space-y-10">
            <h2 className="text-5xl font-display font-bold leading-tight text-white tracking-tight uppercase">DRIVEN BY <br /> <span className="text-accent italic tech-glow">PERFORMANCE</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We understand that your computer is more than just a machine—it's your gateway to education, work, and entertainment. Whether you're a student at UPSI needing an urgent repair or a gamer looking for a custom-built beast, we treat every device with the precision and care it deserves.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Users, label: "Local Trust", text: "5,000+ Happy Customers" },
                { icon: ShieldCheck, label: "Reliability", text: "Genuine Parts & Warranty" },
                { icon: Award, label: "Expertise", text: "Certified Technicians" },
                { icon: Heart, label: "Service", text: "Customer-First Approach" }
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

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Fast Turnaround", 
              desc: "We know you need your device back quickly. Most repairs are completed within 24-48 hours.",
              icon: Clock 
            },
            { 
              title: "Transparent Pricing", 
              desc: "No hidden fees. We provide a clear quote before starting any repair or assembly.",
              icon: Award 
            },
            { 
              title: "Local Support", 
              desc: "Based in the heart of Tanjong Malim, we're always here when you need us.",
              icon: MapPin 
            }
          ].map((value, i) => (
            <div key={i} className="glass-card p-10 border border-white/10 rounded-[40px] hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white uppercase tracking-tight">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl font-display font-bold mb-4 text-white tracking-tight uppercase">MEET OUR EXPERTS</h2>
            <p className="text-slate-400">The skilled hands behind every repair and custom build.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mr. Lim", role: "Founder & Lead Technician", img: "https://i.pravatar.cc/150?u=lim" },
              { name: "Hafiz", role: "Custom PC Specialist", img: "https://i.pravatar.cc/150?u=hafiz" },
              { name: "Siti", role: "Customer Support", img: "https://i.pravatar.cc/150?u=siti" }
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 text-center group hover:border-accent/30 transition-colors rounded-[40px] border border-white/10"
              >
                <img src={member.img} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white/10 p-1 group-hover:border-accent/30 transition-colors shadow-2xl grayscale hover:grayscale-0" />
                <h3 className="text-2xl font-display font-bold mb-1 text-white uppercase tracking-tight">{member.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
