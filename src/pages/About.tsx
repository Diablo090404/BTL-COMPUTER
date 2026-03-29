import { motion } from 'motion/react';
import { Star, Users, History, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl mb-8">Helping Tanjong Malim Stay <span className="text-primary">Connected</span></h1>
              <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                BHL Computer started with a simple mission: to provide reliable, honest, and affordable computer services to our local community.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-widest">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-1">5k+</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-widest">Happy Customers</div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img src="https://picsum.photos/seed/team/800/600" alt="Our Team" className="rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs">
                <p className="text-sm italic text-neutral-300">"We don't just fix computers, we build relationships with our customers."</p>
                <div className="mt-4 font-bold text-primary">— BHL Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Our Core Values</h2>
            <p className="text-neutral-400">What makes BHL Computer different from others.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Trust', desc: 'We are a physical shop. No hidden charges, no fake parts.' },
              { icon: Users, title: 'Community', desc: 'Supporting UPSI students and local businesses since day one.' },
              { icon: History, title: 'Speed', desc: 'We value your time. Fast diagnosis and quick turnaround.' },
              { icon: Heart, title: 'Passion', desc: 'We love tech. We stay updated with the latest hardware trends.' }
            ].map((v, idx) => (
              <div key={idx} className="glass-card p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-4">{v.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-8">Our Story</h2>
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed text-left">
            <p>
              Founded in 2015, BHL Computer began as a small repair kiosk in Tanjong Malim. We noticed that many students and locals struggled to find a place they could trust for their computer needs, often having to travel all the way to KL or Ipoh.
            </p>
            <p>
              We decided to change that. By focusing on transparency and fast service, we quickly became the go-to spot for UPSI students and local SMEs. Today, we are proud to be one of the most trusted computer shops in the region, offering everything from basic repairs to high-end custom gaming builds.
            </p>
            <p>
              Whether you're a student needing a laptop for assignments, a gamer looking for more FPS, or a business owner needing IT solutions, we are here to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
