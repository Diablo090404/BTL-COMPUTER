import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight, Star, Zap, ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";

export function SubscriptionPlans() {
  const plans = [
    {
      name: "Basic",
      price: 25,
      description: "Perfect for casual readers starting their journey.",
      features: ["1 Free E-book per month", "10% Off all physical books", "Access to reading community", "Digital bookmarking"],
      icon: Zap,
      color: "bg-blue-500",
      popular: false
    },
    {
      name: "Pro",
      price: 45,
      description: "Our most popular plan for dedicated book lovers.",
      features: ["3 Free E-books per month", "15% Off all physical books", "Early access to new releases", "Exclusive author interviews", "Ad-free experience"],
      icon: Star,
      color: "bg-accent",
      popular: true
    },
    {
      name: "Cosmic Elite",
      price: 80,
      description: "The ultimate experience for the true literary explorer.",
      features: ["Unlimited E-books", "1 Monthly physical book delivery", "25% Off all store items", "VIP author events", "Personalized recommendations", "Premium support"],
      icon: Sparkles,
      color: "bg-primary",
      popular: false
    }
  ];

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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-accent/20 galaxy-glow"
          >
            <ShieldCheck className="w-4 h-4" />
            Secure & Flexible Plans
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-white tracking-tight">Choose Your <br /> <span className="italic text-accent">Reading</span> Adventure</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Join thousands of readers who have unlocked a universe of knowledge. Cancel anytime, no hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-10 rounded-[48px] glass-card flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group",
                plan.popular && "border-accent ring-4 ring-accent/10 scale-105 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg galaxy-glow">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center mb-6 text-white shadow-xl galaxy-glow", plan.color)}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2 text-white tracking-tight">{plan.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold text-white">RM {plan.price}</span>
                <span className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">/ month</span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-400 font-medium text-sm group-hover:text-white transition-colors">
                    <div className="w-5 h-5 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-accent/30">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-xl galaxy-glow",
                plan.popular 
                  ? "bg-accent text-white hover:scale-[1.02]" 
                  : "bg-white/10 text-white hover:bg-accent transition-all border border-white/10"
              )}>
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section (Simplified) */}
        <div className="mt-32 p-12 md:p-20 rounded-[60px] bg-accent/10 border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-white tracking-tight">Still Not Sure? <br /> <span className="text-accent italic">Try it Free</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Experience the Cosmic Elite plan for 14 days, no credit card required. Explore our entire digital library and see why readers love us.
              </p>
              <button className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform galaxy-glow shadow-xl">
                Start 14-Day Free Trial
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Active Readers", value: "10k+" },
                { label: "Books Available", value: "50k+" },
                { label: "Countries", value: "120+" },
                { label: "Reviews", value: "4.9/5" }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 text-center hover:border-accent/30 transition-colors">
                  <p className="text-4xl font-display font-bold text-accent mb-2 galaxy-glow">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
