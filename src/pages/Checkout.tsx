import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, ArrowLeft, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "Malaysia"
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="pt-32 pb-20 px-4 bg-tech-black min-h-screen relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Checkout Steps */}
          <div className="lg:col-span-2 w-full space-y-12">
            <div className="flex items-center gap-8 mb-12 overflow-x-auto no-scrollbar pb-4">
              {[
                { step: 1, label: "Shipping", icon: Truck },
                { step: 2, label: "Payment", icon: CreditCard },
                { step: 3, label: "Confirmation", icon: CheckCircle2 }
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 shrink-0">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border",
                    step >= s.step ? "bg-accent text-white border-accent shadow-lg tech-glow" : "bg-white/5 text-slate-500 border-white/10"
                  )}>
                    {step > s.step ? <CheckCircle2 className="w-6 h-6" /> : s.step}
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest hidden md:inline",
                    step >= s.step ? "text-white" : "text-slate-500"
                  )}>{s.label}</span>
                  {i < 2 && <div className={cn("w-12 h-px", step > s.step ? "bg-accent" : "bg-white/10")} />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                <h2 className="text-4xl font-display font-bold text-white tracking-tight">Shipping Details</h2>
                <form onSubmit={handleNext} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Address</label>
                    <input 
                      type="text" 
                      placeholder="No. 12, Jalan Universiti" 
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">City</label>
                      <input 
                        type="text" 
                        placeholder="Kuala Lumpur" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Postcode</label>
                      <input 
                        type="text" 
                        placeholder="50088" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Country</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-white appearance-none">
                        <option className="bg-tech-black">Malaysia</option>
                        <option className="bg-tech-black">Singapore</option>
                        <option className="bg-tech-black">Indonesia</option>
                        <option className="bg-tech-black">Thailand</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-accent text-white py-5 rounded-full text-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl tech-glow">
                    Continue to Payment <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                <h2 className="text-4xl font-display font-bold text-white tracking-tight">Payment Method</h2>
                <div className="glass-card p-10 space-y-8">
                  <div className="flex items-center gap-4 p-6 rounded-2xl border-2 border-accent bg-accent/5">
                    <CreditCard className="w-8 h-8 text-accent" />
                    <div className="flex-grow">
                      <p className="font-bold text-white">Credit or Debit Card</p>
                      <p className="text-xs text-slate-500">Secure payment via Stripe</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-5 bg-white/10 rounded" />
                      <div className="w-8 h-5 bg-white/10 rounded" />
                      <div className="w-8 h-5 bg-white/10 rounded" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Card Information</label>
                      <div className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-600 italic">
                        Stripe Element Placeholder
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Your payment is secured with 256-bit encryption
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 border border-white/10 py-5 rounded-full text-xl font-bold hover:bg-white/5 transition-colors text-white">
                    Back
                  </button>
                  <button onClick={() => setStep(3)} className="flex-2 bg-accent text-white py-5 rounded-full text-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl tech-glow">
                    Complete Purchase <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 glass-card">
                <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <p className="text-5xl font-display font-bold mb-4 text-white tracking-tight">Order Confirmed!</p>
                <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">Thank you for your purchase. We have sent a confirmation email to your inbox. Your tech is on its way!</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/dashboard" className="bg-accent text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform tech-glow">
                    View Order
                  </Link>
                  <Link to="/shop" className="border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-colors text-white">
                    Return to Shop
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          {step < 3 && (
            <div className="lg:w-96 w-full space-y-6">
              <div className="glass-card p-10">
                <h2 className="text-2xl font-display font-bold mb-8 text-white tracking-tight">Summary</h2>
                <div className="space-y-6 mb-8">
                  {[
                    { title: "RTX 4060 Ti Gaming PC", price: 3599.00, qty: 1 },
                    { title: "Mechanical Keyboard", price: 299.00, qty: 1 }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <div className="flex-grow">
                        <p className="font-bold text-sm leading-tight text-white">{item.title}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Qty: {item.qty}</p>
                      </div>
                      <span className="font-bold text-sm text-white">RM {item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 pt-8 border-t border-white/10">
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold text-white">RM 3898.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Shipping</span>
                    <span className="font-bold text-white">RM 20.00</span>
                  </div>
                  <div className="pt-4 flex justify-between items-end">
                    <span className="font-bold text-lg text-white">Total</span>
                    <span className="text-3xl font-display font-bold text-accent tech-glow">RM 3918.00</span>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 text-center group">
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-2 group-hover:text-slate-400 transition-colors">Need Help?</p>
                <p className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">bhlcomputer@gmail.com</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
