import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, ShoppingBag, Star, Heart, Settings, LogOut, ArrowRight, BookOpen, Sparkles, Clock, MapPin, CreditCard, ShoppingCart } from "lucide-react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function Dashboard() {
  const location = useLocation();

  const sidebarLinks = [
    { name: "Profile", path: "/dashboard", icon: User },
    { name: "Orders", path: "/dashboard/orders", icon: ShoppingBag },
    { name: "Support", path: "/dashboard/support", icon: Sparkles },
    { name: "Wishlist", path: "/dashboard/wishlist", icon: Heart },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="pt-32 pb-20 px-4 bg-tech-black min-h-screen relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Sidebar */}
        <aside className="lg:w-80 space-y-8">
          <div className="glass-card p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            <div className="relative inline-block mb-6">
              <img src="https://i.pravatar.cc/150?u=johndoe" className="w-24 h-24 rounded-full border-4 border-accent/20 p-1 shadow-2xl" />
              <div className="absolute bottom-0 right-0 bg-accent text-white p-2 rounded-full shadow-lg tech-glow">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-2xl font-display font-bold mb-1 text-white">John Doe</h2>
            <p className="text-[10px] text-accent font-bold uppercase tracking-widest mb-6">BHL Tech Member</p>
            <button className="w-full bg-white/5 text-slate-300 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <nav className="glass-card p-6 space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all",
                  location.pathname === link.path 
                    ? "bg-accent text-white shadow-lg tech-glow" 
                    : "text-slate-400 hover:bg-white/5 hover:text-accent"
                )}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow space-y-12">
          <Routes>
            <Route path="/" element={<ProfileOverview />} />
            <Route path="/orders" element={<OrdersList />} />
            <Route path="/support" element={<SupportView />} />
            <Route path="/wishlist" element={<WishlistGrid />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function ProfileOverview() {
  const repairStatus = [
    { title: "Gaming PC Cleanup", status: "In Progress", progress: 65, image: "https://picsum.photos/seed/pc/100/150" },
    { title: "Laptop Screen Replacement", status: "Pending Parts", progress: 30, image: "https://picsum.photos/seed/laptop/100/150" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { label: "Tech Items", value: "24", icon: ShoppingCart },
          { label: "Active Repairs", value: "2", icon: Settings },
          { label: "Total Orders", value: "12", icon: ShoppingBag }
        ].map((stat, i) => (
          <div key={i} className="glass-card p-10 text-center group hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:bg-accent/10 transition-colors">
              <stat.icon className="w-6 h-6 text-slate-400 group-hover:text-accent transition-colors" />
            </div>
            <p className="text-4xl font-display font-bold mb-2 text-white">{stat.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-display font-bold text-white tracking-tight">ACTIVE REPAIRS</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {repairStatus.map((repair, i) => (
            <div key={i} className="glass-card p-8 flex gap-6 items-center group">
              <img src={repair.image} alt={repair.title} className="w-20 h-28 rounded-xl object-cover shadow-2xl border border-white/10 group-hover:scale-105 transition-transform" />
              <div className="flex-grow">
                <h4 className="font-display font-bold text-lg mb-1 text-white">{repair.title}</h4>
                <p className="text-sm text-slate-400 mb-4">{repair.status}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-slate-500">Progress</span>
                    <span className="text-accent">{repair.progress}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${repair.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-accent tech-glow" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-display font-bold text-white tracking-tight">RECENT ACTIVITY</h3>
        <div className="space-y-4">
          {[
            { action: "Purchased 'RTX 4060 Ti'", time: "2 days ago", icon: ShoppingBag },
            { action: "Added 'Gaming Mouse' to wishlist", time: "5 days ago", icon: Heart },
            { action: "Repair ticket updated", time: "1 week ago", icon: Settings }
          ].map((activity, i) => (
            <div key={i} className="glass-card p-6 flex items-center gap-6 group hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-colors">
                <activity.icon className="w-5 h-5 text-slate-400 group-hover:text-accent transition-colors" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-white">{activity.action}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
              <Clock className="w-4 h-4 text-slate-600" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function OrdersList() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="text-4xl font-display font-bold text-white tracking-tight">ORDER HISTORY</h2>
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Order #BHL-1234{i}</p>
                <p className="font-bold text-white">Placed on March {20 - i}, 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 bg-green-500/10 text-green-500 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-500/20">Delivered</span>
                <p className="text-2xl font-display font-bold text-white">RM 39.90</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2].map(j => (
                  <img key={j} src={`https://picsum.photos/seed/tech${j}/100/150`} className="w-12 h-16 rounded-lg border-2 border-space-dark object-cover shadow-xl" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-400">2 items in this order</p>
              <button className="ml-auto text-accent font-bold text-sm hover:underline">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SupportView() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="text-4xl font-display font-bold text-white tracking-tight">TECH SUPPORT</h2>
      <div className="p-12 rounded-[60px] bg-accent text-white relative overflow-hidden shadow-2xl tech-glow">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20">
            <Sparkles className="w-3 h-3" />
            BHL Priority
          </div>
          <h3 className="text-5xl font-display font-bold mb-4">BHL VIP Support</h3>
          <p className="text-white/80 text-lg mb-10 max-w-md leading-relaxed">You have active priority support for your custom gaming PC. Your next scheduled maintenance is April 15, 2026.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-accent px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              Contact Tech
            </button>
            <button className="bg-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-colors border border-white/20">
              View Tickets
            </button>
          </div>
        </div>
        <Sparkles className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10 rotate-12" />
      </div>
    </motion.div>
  );
}

function WishlistGrid() {
  const wishlistItems = [
    { id: 5, title: "Gaming Mouse G502", brand: "Logitech", price: 199.00, image: "https://picsum.photos/seed/mouse/400/600", category: "Peripherals" },
    { id: 6, title: "27\" 144Hz Monitor", brand: "Samsung", price: 899.00, image: "https://picsum.photos/seed/monitor/400/600", category: "Display" },
    { id: 7, title: "1TB NVMe SSD", brand: "Samsung", price: 450.00, image: "https://picsum.photos/seed/ssd/400/600", category: "Storage" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex justify-between items-end">
        <h2 className="text-4xl font-display font-bold text-white tracking-tight">YOUR WISHLIST</h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{wishlistItems.length} Items</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="group">
            <div className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 relative border border-white/10 shadow-2xl">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4">
                <button className="bg-white/10 backdrop-blur-md p-2 rounded-full shadow-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors border border-white/10">
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full tech-glow">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="font-display font-bold text-accent">RM {item.price}</p>
            </div>
            <p className="text-sm text-slate-400 mb-6">{item.brand}</p>
            <button className="w-full py-4 rounded-2xl bg-white/5 text-white font-bold text-sm hover:bg-accent hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-accent/50">
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SettingsForm() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
      <h2 className="text-4xl font-display font-bold text-white tracking-tight">ACCOUNT SETTINGS</h2>
      
      <div className="space-y-10">
        <section className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
            <User className="w-4 h-4" /> Personal Information
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors shadow-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Email Address</label>
              <input type="email" defaultValue="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors shadow-sm" />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Shipping Address
          </h4>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-4">Address</label>
            <input type="text" defaultValue="Tanjong Malim, Perak, Malaysia" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors shadow-sm" />
          </div>
        </section>

        <section className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Payment Methods
          </h4>
          <div className="glass-card p-6 flex items-center justify-between group hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-white/10 rounded border border-white/10" />
              <div>
                <p className="font-bold text-white">•••• •••• •••• 4242</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Expires 12/28</p>
              </div>
            </div>
            <button className="text-accent font-bold text-sm hover:underline">Edit</button>
          </div>
        </section>

        <button className="bg-accent text-white px-12 py-5 rounded-full font-bold hover:scale-[1.02] transition-transform shadow-xl tech-glow">
          Save Changes
        </button>
      </div>
    </motion.div>
  );
}
