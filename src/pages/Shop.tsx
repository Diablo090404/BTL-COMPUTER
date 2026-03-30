import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ShoppingCart, Star, ArrowRight, X, Eye, Heart, Cpu, Monitor, MousePointer2, Printer, Wifi, Laptop, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);

  const categories = ["All", "Laptops", "Gaming PC", "Components", "Accessories", "Printers", "Networking"];

  const allProducts = [
    { 
      id: 1, 
      title: "ASUS ROG Strix G16", 
      brand: "ASUS", 
      price: 6499.00, 
      rating: 4.9, 
      image: "https://picsum.photos/seed/rog/400/600", 
      category: "Laptops", 
      description: "Intel Core i7-13650HX, 16GB RAM, 512GB SSD, RTX 4060 8GB. The ultimate gaming powerhouse for students and pro gamers." 
    },
    { 
      id: 2, 
      title: "BHL Custom Gaming PC - Tier 1", 
      brand: "BHL Custom", 
      price: 3299.00, 
      rating: 4.8, 
      image: "https://picsum.photos/seed/custompc/400/600", 
      category: "Gaming PC", 
      description: "Ryzen 5 5600, 16GB RGB RAM, 500GB NVMe, RTX 3060. Built for 1080p Ultra gaming. Free assembly and stress testing." 
    },
    { 
      id: 3, 
      title: "Logitech G502 X Plus", 
      brand: "Logitech", 
      price: 549.00, 
      rating: 4.9, 
      image: "https://picsum.photos/seed/mouse/400/600", 
      category: "Accessories", 
      description: "Wireless RGB Gaming Mouse with LIGHTFORCE hybrid switches and LIGHTSPEED wireless technology." 
    },
    { 
      id: 4, 
      title: "Samsung Odyssey G5 27\"", 
      brand: "Samsung", 
      price: 1299.00, 
      rating: 4.7, 
      image: "https://picsum.photos/seed/monitor/400/600", 
      category: "Accessories", 
      description: "144Hz, 1ms, QHD Curved Gaming Monitor. Immersive visuals for your gaming setup." 
    },
    { 
      id: 5, 
      title: "Kingston FURY Beast 16GB DDR4", 
      brand: "Kingston", 
      price: 245.00, 
      rating: 4.8, 
      image: "https://picsum.photos/seed/ram/400/600", 
      category: "Components", 
      description: "3200MHz Desktop Memory. High-performance upgrade for your PC." 
    },
    { 
      id: 6, 
      title: "TP-Link Archer AX73", 
      brand: "TP-Link", 
      price: 499.00, 
      rating: 4.6, 
      image: "https://picsum.photos/seed/router/400/600", 
      category: "Networking", 
      description: "AX5400 Dual-Band Gigabit Wi-Fi 6 Router. Perfect for high-speed home internet." 
    },
    { 
      id: 7, 
      title: "Canon PIXMA G3010", 
      brand: "Canon", 
      price: 650.00, 
      rating: 4.5, 
      image: "https://picsum.photos/seed/printer/400/600", 
      category: "Printers", 
      description: "Refillable Ink Tank Wireless All-In-One for High Volume Printing. Ideal for students and small offices." 
    },
    { 
      id: 8, 
      title: "Crucial P3 1TB NVMe SSD", 
      brand: "Crucial", 
      price: 380.00, 
      rating: 4.8, 
      image: "https://picsum.photos/seed/ssd/400/600", 
      category: "Components", 
      description: "PCIe Gen3 x4 NVMe M.2 SSD. Fast boot times and quick file transfers." 
    },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi BHL Computer! I'm interested in checking the availability of: ${productTitle}. Do you have it in stock?`);
    return `https://wa.me/60163649245?text=${message}`;
  };

  return (
    <div className="relative min-h-screen bg-tech-black pt-32 pb-20 px-4 overflow-hidden">
      {/* Tech Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 tracking-tighter text-white">BHL <span className="text-accent italic">TECH SHOP</span></h1>
            <p className="text-slate-400 font-medium">Premium hardware, components, and accessories in Tanjong Malim.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search hardware..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white focus:outline-none focus:border-accent transition-all shadow-sm focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "p-4 rounded-2xl border transition-all flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest tech-glow",
                isFilterOpen ? "bg-accent text-white border-accent" : "bg-white/5 border-white/10 text-white hover:border-accent"
              )}
            >
              <Filter className="w-5 h-5" />
              <span className="hidden md:inline">Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {(isFilterOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
              <motion.aside 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={cn(
                  "lg:w-64 space-y-10",
                  !isFilterOpen && "hidden lg:block"
                )}
              >
                <div className="glass-card p-8 border border-white/10 rounded-[32px]">
                  <h3 className="font-display font-bold text-lg mb-6 flex items-center justify-between text-white tracking-tight">
                    Categories
                    <button onClick={() => setIsFilterOpen(false)} className="lg:hidden p-1 text-slate-400">
                      <X className="w-4 h-4" />
                    </button>
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-xl transition-all font-bold text-[10px] uppercase tracking-widest",
                          selectedCategory === cat 
                            ? "bg-accent text-white shadow-lg shadow-accent/20 tech-glow" 
                            : "hover:bg-white/5 text-slate-400 hover:text-white"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[32px] bg-gradient-to-br from-red-900 to-black text-white relative overflow-hidden group border border-white/10 shadow-xl">
                  <div className="relative z-10">
                    <h4 className="font-display font-bold text-2xl mb-4 tracking-tight">Custom PC Build</h4>
                    <p className="text-white/60 text-xs mb-6 leading-relaxed font-medium">Get a personalized quote for your dream gaming or workstation setup.</p>
                    <a href="https://wa.me/60163649245?text=Hi!%20I%20want%20to%20build%20a%20custom%20PC." target="_blank" rel="noopener noreferrer" className="text-white font-bold flex items-center gap-2 group/link text-[10px] uppercase tracking-widest">
                      Get Quote <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 relative tech-shadow border border-white/10 bg-white/5">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button 
                          onClick={() => setQuickViewProduct(product)}
                          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all transform scale-0 group-hover:scale-100 duration-300 tech-glow"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <a 
                          href={getWhatsAppLink(product.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all transform scale-0 group-hover:scale-100 duration-300 delay-75 tech-glow"
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </a>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-black/40 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors leading-tight text-white tracking-tight">{product.title}</h3>
                      </Link>
                      <div className="flex items-center gap-1 text-xs font-bold text-accent">
                        <Star className="w-3 h-3 fill-current" />
                        {product.rating}
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">{product.brand}</p>
                    <p className="font-display font-bold text-xl text-white tracking-tight">RM {product.price.toLocaleString()}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 glass-card border border-white/10 rounded-[48px]">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                  <Search className="w-10 h-10 text-slate-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 text-white tracking-tight">No products found</h3>
                <p className="text-slate-500 mb-8 font-medium">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="bg-accent text-white px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest tech-glow"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-tech-black rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
            >
              <button 
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="md:w-1/2 aspect-[3/4] md:aspect-auto">
                <img src={quickViewProduct.image} alt={quickViewProduct.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {quickViewProduct.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-accent">
                    <Star className="w-3 h-3 fill-current" />
                    {quickViewProduct.rating}
                  </div>
                </div>
                <h2 className="text-4xl font-display font-bold mb-2 leading-tight text-white">{quickViewProduct.title}</h2>
                <p className="text-lg text-slate-400 mb-6">by {quickViewProduct.brand}</p>
                <p className="text-slate-500 leading-relaxed mb-8">{quickViewProduct.description}</p>
                <div className="flex items-center justify-between mb-10">
                  <span className="text-3xl font-bold text-white">RM {quickViewProduct.price.toLocaleString()}</span>
                  <div className="flex gap-2">
                    <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-accent/10 hover:text-accent transition-all">
                      <Heart className="w-6 h-6 text-white" />
                    </button>
                    <a 
                      href={getWhatsAppLink(quickViewProduct.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 tech-glow"
                    >
                      <ShoppingCart className="w-5 h-5" /> Check Availability
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-500">
                  <div className="flex items-center gap-1">
                    <Cpu className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Genuine Parts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Monitor className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Local Warranty</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
