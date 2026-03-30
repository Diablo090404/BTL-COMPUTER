import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Lock, ArrowRight, Github, Chrome, ShieldCheck, BookOpen, User, Sparkles, ArrowLeft } from "lucide-react";
import { cn } from "../lib/utils";

export function Signup() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-space-dark flex items-center justify-center perspective-1000 overflow-hidden relative">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Branding/Value Prop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block space-y-12"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-2xl galaxy-glow">
              <BookOpen className="text-white w-10 h-10" />
            </div>
            <span className="text-4xl font-display font-bold tracking-tight text-white">COSMIC BOOKS</span>
          </div>
          <h1 className="text-6xl font-display font-bold leading-tight text-white">
            Join the <br /> 
            <span className="text-accent italic">Elite</span> <br />
            Community
          </h1>
          <p className="text-slate-400 text-xl max-w-md leading-relaxed">
            Create an account to unlock exclusive features, track your reading history, and join our global community of book lovers.
          </p>
          <div className="space-y-6">
            {[
              { icon: ShieldCheck, text: "Secure 256-bit SSL encryption" },
              { icon: Chrome, text: "One-tap Google signup" },
              { icon: Sparkles, text: "Exclusive member rewards" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-sm">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: The Flipping Book */}
        <div className="relative w-full max-w-[500px] mx-auto aspect-[3/4] preserve-3d transition-all duration-1000">
          <AnimatePresence mode="wait">
            {!isFlipped ? (
              /* Book Cover */
              <motion.div
                key="cover"
                initial={{ rotateY: 0 }}
                exit={{ rotateY: -180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={() => setIsFlipped(true)}
                className="absolute inset-0 bg-primary rounded-[40px] book-shadow p-12 flex flex-col items-center justify-center text-center cursor-pointer group backface-hidden z-20 border border-white/10"
              >
                <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/seed/nebula/800/1000')] bg-cover mix-blend-overlay rounded-[40px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-[40px]" />
                <div className="relative z-10 space-y-8">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/20 group-hover:scale-110 transition-transform galaxy-glow">
                    <BookOpen className="text-white w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-white text-5xl font-display font-bold mb-4 tracking-tighter">COSMIC <br /> BOOKS</h2>
                    <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Open to Join</p>
                  </div>
                  <div className="pt-12">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="text-white w-8 h-8 mx-auto" />
                    </motion.div>
                  </div>
                </div>
                {/* Book Spine Detail */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/40 rounded-l-[40px] border-r border-white/10" />
              </motion.div>
            ) : (
              /* Login/Signup Form (Inside the Book) */
              <motion.div
                key="form"
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-slate-900 rounded-[40px] book-shadow overflow-hidden flex flex-col backface-hidden z-10 border border-white/10"
              >
                {/* Left Page (Visual/Branding) */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-slate-950/50 z-20 border-r border-white/5" />
                
                <div className="flex-grow p-10 md:p-12 pl-16 overflow-y-auto custom-scrollbar relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8">
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
                      >
                        <ArrowLeft className="w-4 h-4" /> Close
                      </button>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => setIsSignup(false)}
                          className={cn("text-xs font-bold uppercase tracking-widest transition-colors", !isSignup ? "text-accent" : "text-slate-500")}
                        >
                          Login
                        </button>
                        <button 
                          onClick={() => setIsSignup(true)}
                          className={cn("text-xs font-bold uppercase tracking-widest transition-colors", isSignup ? "text-accent" : "text-slate-500")}
                        >
                          Signup
                        </button>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h2 className="text-4xl font-display font-bold mb-2 text-white">{isSignup ? "Create Account" : "Welcome Back"}</h2>
                        <p className="text-slate-400 text-sm">
                          {isSignup ? "Join our cosmic community today." : "Please enter your details to sign in."}
                        </p>
                      </div>

                      <form onSubmit={handleSignup} className="space-y-5">
                        <AnimatePresence mode="wait">
                          {isSignup && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-2"
                            >
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input 
                                  type="text" 
                                  placeholder="John Doe" 
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-sm text-white"
                                  required
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input 
                              type="email" 
                              placeholder="name@example.com" 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-sm text-white"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center ml-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Password</label>
                            {!isSignup && <button type="button" className="text-[10px] font-bold text-accent hover:underline">Forgot?</button>}
                          </div>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input 
                              type="password" 
                              placeholder="••••••••" 
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent transition-colors text-sm text-white"
                              required
                            />
                          </div>
                        </div>

                        <button className="w-full bg-accent text-white py-4 rounded-full font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl mt-4 galaxy-glow">
                          {isSignup ? "Sign Up" : "Login"} <ArrowRight className="w-5 h-5" />
                        </button>
                      </form>

                      <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                          <span className="bg-slate-900 px-4 text-slate-500">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors font-bold text-xs text-white">
                          <Chrome className="w-4 h-4 text-accent" />
                          Google
                        </button>
                        <button className="flex items-center justify-center gap-3 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors font-bold text-xs text-white">
                          <Github className="w-4 h-4" />
                          Github
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
