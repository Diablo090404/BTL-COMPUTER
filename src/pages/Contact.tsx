import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, ArrowRight, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-32 pb-20 px-4 bg-tech-black min-h-screen relative overflow-hidden">
      {/* Tech Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.05),transparent_50%)]" />
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
            Contact Us
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-white tracking-tighter uppercase">GET IN TOUCH <br /> <span className="italic text-accent tech-glow">WITH BHL</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Expert tech support, custom PC quotes, and sales advice. We're here to help you in Tanjong Malim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h2 className="text-5xl font-display font-bold leading-tight text-white tracking-tight uppercase">VISIT <br /> <span className="text-accent italic tech-glow">OUR SHOP</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our team of technicians is available during business hours to assist with your hardware needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: "Email", value: "bhlcomputer@gmail.com" },
                { icon: Phone, label: "Phone", value: "+60 16-364 9245" },
                { icon: MapPin, label: "Address", value: "Tanjong Malim, Perak, Malaysia" },
                { icon: Clock, label: "Hours", value: "Mon-Sat: 10AM - 8PM" }
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 space-y-4 group hover:border-accent/30 transition-colors border border-white/10 rounded-[32px]">
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

            {/* WhatsApp CTA */}
            <div className="p-10 rounded-[40px] bg-gradient-to-br from-red-900/20 to-black border border-accent/20 tech-glow">
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">Need Urgent Repair?</h3>
              <p className="text-slate-400 mb-8">Message us on WhatsApp for an immediate response and free diagnosis.</p>
              <a 
                href="https://wa.me/60163649245?text=Hi%20BHL%20Computer!%20I%20need%20urgent%20help%20with%20my%20device." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-5 h-5" /> WhatsApp Us Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 relative overflow-hidden border border-white/10 rounded-[48px]"
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
                <select className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option value="repair" className="bg-tech-black">Computer Repair</option>
                  <option value="custom-pc" className="bg-tech-black">Custom PC Quote</option>
                  <option value="sales" className="bg-tech-black">Product Inquiry</option>
                  <option value="business" className="bg-tech-black">Business Solutions</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Message</label>
                <textarea rows={5} placeholder="Tell us more about your tech issue or requirement..." className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-accent text-white py-6 rounded-full text-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl tech-glow">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-5xl font-display font-bold text-white tracking-tight uppercase">FIND US</h2>
            <p className="text-slate-400">Located in the heart of Tanjong Malim, Perak.</p>
          </div>
          <div className="w-full h-[500px] rounded-[60px] overflow-hidden border border-white/10 shadow-2xl tech-glow">
            <iframe 
              src="https://maps.google.com/maps?q=No%201,%202%263,%20Jalan%20U1,%20Taman%20Universiti,%2035900%20Tanjong%20Malim,%20Perak&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
