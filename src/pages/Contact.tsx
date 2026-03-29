import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-neutral-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Contact <span className="text-primary">Us</span></h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Have a question? Need a repair quote? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Call / WhatsApp</div>
                      <p className="text-neutral-400">016-364 9245</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Email</div>
                      <p className="text-neutral-400">info@bhlcomputer.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Visit Us</div>
                      <p className="text-neutral-400">No 1, 2&3, Jalan U1, Taman Universiti, 35900 Tanjong Malim, Perak</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Opening Hours</div>
                      <p className="text-neutral-400">Mon - Sat: 9:30 AM - 8:00 PM<br/>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="btn-outline px-4 py-2">
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                  <a href="#" className="btn-outline px-4 py-2">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form (Simulated) */}
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-400">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-primary" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-400">Phone Number</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-primary" placeholder="012-3456789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400">Service Needed</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-primary">
                    <option>Computer Repair</option>
                    <option>Custom PC Build</option>
                    <option>Buy Laptop</option>
                    <option>Accessories</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-primary" placeholder="How can we help you?"></textarea>
                </div>
                <button className="btn-primary w-full py-4 text-lg">
                  Send Message
                </button>
                <p className="text-center text-neutral-500 text-sm">
                  Or for faster reply, use the WhatsApp button below.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] w-full border-t border-white/10 grayscale hover:grayscale-0 transition-all">
        <iframe 
          src="https://www.google.com/maps?q=No%201,%202%263,%20Jalan%20U1,%20Taman%20Universiti,%2035900%20Tanjong%20Malim,%20Perak&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Shop Location"
        />
      </section>
    </div>
  );
}
