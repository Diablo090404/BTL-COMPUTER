import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, Check, Info, MessageSquare, Cpu, Monitor, Award, ShieldCheck, Zap } from "lucide-react";
import { cn } from "../lib/utils";

export function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Mock data for the product (In a real app, fetch based on ID)
  const product = {
    id: 1,
    title: "ASUS ROG Strix G16 (2024)",
    brand: "ASUS",
    price: 6499.00,
    rating: 4.9,
    reviews: 124,
    image: "https://picsum.photos/seed/rog/600/900",
    category: "Laptops",
    description: "Power your play with the brand new Strix G16. Featuring an Intel® Core™ i7-13650HX processor and an NVIDIA® GeForce RTX™ 4060 Laptop GPU with a TGP of up to 140W with Dynamic Boost, be ready to dominate the competition in all of the latest games. Backed by a dedicated MUX Switch and NVIDIA Advanced Optimus, the Strix G16 unlocks the true potential of its hardware.",
    details: {
      processor: "Intel Core i7-13650HX",
      graphics: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      memory: "16GB DDR5-4800 SO-DIMM",
      storage: "512GB PCIe 4.0 NVMe M.2 SSD",
      display: "16-inch FHD+ 16:10 (1920 x 1200, WUXGA) 165Hz",
      warranty: "2 Years Local Manufacturer Warranty"
    },
    userReviews: [
      { id: 1, user: "Ahmad F.", rating: 5, comment: "Best gaming laptop I've ever owned. Performance is top-notch and the cooling is amazing.", date: "2 days ago" },
      { id: 2, user: "Jason L.", rating: 4, comment: "Powerful machine. Only downside is the weight, but that's expected for a gaming beast.", date: "1 week ago" }
    ]
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(`Hi BHL Computer! I'm interested in the ${product.title} (RM ${product.price}). Is it available in stock?`);
    return `https://wa.me/60163649245?text=${message}`;
  };

  return (
    <div className="pt-32 pb-20 px-4 bg-tech-black min-h-screen relative overflow-hidden">
      {/* Tech Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent font-bold mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Product Preview Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-white/5"
              >
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </motion.div>
              
              <div className="flex gap-4 mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 hover:border-accent cursor-pointer transition-colors bg-white/5">
                    <img src={`https://picsum.photos/seed/tech${i}/200/200`} alt="preview" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-accent/20 tech-glow">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-sm font-bold text-white">
                <Star className="w-4 h-4 fill-accent text-accent" />
                {product.rating} <span className="text-slate-500 font-normal">({product.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="text-6xl font-display font-bold mb-4 leading-tight text-white tracking-tighter uppercase">{product.title}</h1>
            <p className="text-2xl text-slate-400 mb-8">by <span className="text-white font-medium hover:text-accent cursor-pointer transition-colors">{product.brand}</span></p>

            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-5xl font-display font-bold text-accent tech-glow">RM {product.price.toLocaleString()}</span>
              <span className="text-slate-600 line-through text-xl">RM 6,999.00</span>
              <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-500/20">Save 7%</span>
            </div>

            <div className="glass-card p-8 mb-10 relative overflow-hidden group border border-white/10 rounded-[32px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent border border-accent/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">BHL Protection Plan</h4>
                  <p className="text-sm text-slate-400">Extended warranty & free cleaning for 1 year.</p>
                </div>
                <button className="ml-auto bg-white/10 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-accent transition-all border border-white/10">
                  Add RM 199
                </button>
              </div>
              <div className="h-px bg-white/10 mb-6 relative z-10" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-tech-black overflow-hidden shadow-xl">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="user" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-500">12 people bought this in the last 24 hours</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl tech-glow"
              >
                <MessageSquare className="w-6 h-6" /> Check Availability via WhatsApp
              </a>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                  "p-5 rounded-2xl border border-white/10 transition-all hover:bg-accent/10 hover:text-accent bg-white/5",
                  isWishlisted && "bg-accent/20 text-accent border-accent/50"
                )}
              >
                <Heart className={cn("w-6 h-6", isWishlisted && "fill-accent")} />
              </button>
              <button className="p-5 rounded-2xl border border-white/10 transition-all hover:bg-white/10 bg-white/5 text-slate-400">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-white/10 flex gap-10 mb-8 overflow-x-auto no-scrollbar">
              {[
                { id: "description", label: "Description", icon: Info },
                { id: "details", label: "Technical Specs", icon: Cpu },
                { id: "reviews", label: "Reviews", icon: MessageSquare }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative flex items-center gap-2",
                    activeTab === tab.id ? "text-accent" : "text-slate-500 hover:text-white"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent tech-glow" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                {activeTab === "description" && (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-slate-400 leading-relaxed text-lg"
                  >
                    {product.description}
                  </motion.div>
                )}

                {activeTab === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                  >
                    {Object.entries(product.details).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{key}</p>
                        <p className="font-medium text-white">{value}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    {product.userReviews.map((review) => (
                      <div key={review.id} className="glass-card p-6 border border-white/10 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-bold mb-1 text-white">{review.user}</p>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={cn("w-3 h-3", i < review.rating ? "fill-accent text-accent" : "text-slate-700")} />
                              ))}
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-widest">{review.date}</span>
                        </div>
                        <p className="text-slate-400">{review.comment}</p>
                      </div>
                    ))}
                    <button className="w-full py-4 rounded-2xl border border-dashed border-white/10 text-slate-500 font-bold hover:border-accent hover:text-accent transition-all bg-white/5">
                      Write a Review
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/10 mt-12">
              {[
                { icon: Zap, text: "Fast Setup" },
                { icon: Monitor, text: "Benchmarked" },
                { icon: Award, text: "Genuine Parts" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-colors">
                    <item.icon className="w-6 h-6 text-slate-500 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
