import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

export function Contact() {
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
            Contact Us
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-white tracking-tighter">WE'RE HERE TO <br /> <span className="italic text-accent galaxy-glow">LISTEN</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Have a question about a book, a subscription, or just want to talk about your favorite read? We're all ears across the galaxy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h2 className="text-5xl font-display font-bold leading-tight text-white tracking-tight">GET IN <br /> <span className="text-accent italic galaxy-glow">TOUCH</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our team of literary experts is available 24/7 to help you navigate the universe of Cosmic Books.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: "Email", value: "hello@cosmicbooks.com" },
                { icon: Phone, label: "Phone", value: "+60 16-364 9245" },
                { icon: MapPin, label: "Address", value: "Tanjong Malim, Perak, Malaysia" },
                { icon: MessageSquare, label: "Support", value: "Chat with us 24/7" }
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 space-y-4 group hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                    <p className="font-bold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Email Address</label>
                  <input type="email" placeholder="name@example.com" className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Message</label>
                <textarea rows={5} placeholder="Tell us more..." className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-accent text-white py-6 rounded-full text-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl galaxy-glow">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-accent text-white p-12 md:p-24 rounded-[60px] relative overflow-hidden text-center galaxy-glow">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-8 tracking-tight">QUICK ANSWERS</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Check out our frequently asked questions for instant answers to common queries about shipping, returns, and subscriptions.
            </p>
            <button className="bg-white text-accent px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto shadow-2xl">
              View FAQ <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-white/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
