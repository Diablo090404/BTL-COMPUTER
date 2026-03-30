import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ShoppingCart, Star, ArrowRight, X, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [quickViewBook, setQuickViewBook] = useState<any>(null);

  const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography", "History", "Business", "Self-Help"];

  const allBooks = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 39.90, rating: 4.8, image: "https://picsum.photos/seed/alchemist/400/600", category: "Fiction", description: "A global phenomenon, The Alchemist has been read and loved by over sixty-two million readers, becoming one of the best-selling books in history." },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: 75.00, rating: 4.9, image: "https://picsum.photos/seed/habits/400/600", category: "Self-Help", description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day." },
    { id: 3, title: "1984", author: "George Orwell", price: 42.00, rating: 4.7, image: "https://picsum.photos/seed/1984/400/600", category: "Fiction", description: "Winston Smith reins in his rebellion in a world where Big Brother is always watching." },
    { id: 4, title: "The Psychology of Money", author: "Morgan Housel", price: 68.00, rating: 4.8, image: "https://picsum.photos/seed/money/400/600", category: "Business", description: "Doing well with money isn’t necessarily about what you know. It’s about how you behave." },
    { id: 5, title: "Dune", author: "Frank Herbert", price: 59.90, rating: 4.9, image: "https://picsum.photos/seed/book5/400/600", category: "Sci-Fi", description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world." },
    { id: 6, title: "The Silent Patient", author: "Alex Michaelides", price: 42.00, rating: 4.6, image: "https://picsum.photos/seed/book6/400/600", category: "Mystery", description: "Alicia Berenson’s life is seemingly perfect until she shoots her husband five times in the face." },
    { id: 7, title: "Sapiens", author: "Yuval Noah Harari", price: 85.00, rating: 4.8, image: "https://picsum.photos/seed/book7/400/600", category: "History", description: "Destined to become a modern classic, Sapiens is a bold, wide-ranging and provocative history of humanity." },
    { id: 8, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 75.00, rating: 4.7, image: "https://picsum.photos/seed/book8/400/600", category: "Non-Fiction", description: "Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think." },
  ];

  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-space-dark pt-32 pb-20 px-4 overflow-hidden">
      {/* Dynamic Starfield Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-purple/10 via-space-dark to-space-dark" />
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 tracking-tighter text-white">COSMIC <span className="text-accent italic">ARCHIVE</span></h1>
            <p className="text-slate-400 font-medium">Discover your next favorite read from our curated collection.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search the galaxy..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white focus:outline-none focus:border-accent transition-all shadow-sm focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "p-4 rounded-2xl border transition-all flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest galaxy-glow",
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
            {(isFilterOpen || window.innerWidth >= 1024) && (
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
                            ? "bg-accent text-white shadow-lg shadow-accent/20 galaxy-glow" 
                            : "hover:bg-white/5 text-slate-400 hover:text-white"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[32px] bg-gradient-to-br from-cosmic-purple to-cosmic-blue text-white relative overflow-hidden group border border-white/10 shadow-xl">
                  <div className="relative z-10">
                    <h4 className="font-display font-bold text-2xl mb-4 tracking-tight">Elite Access</h4>
                    <p className="text-white/60 text-xs mb-6 leading-relaxed font-medium">Get unlimited access to all digital books for just RM 80/mo.</p>
                    <Link to="/subscriptions" className="text-white font-bold flex items-center gap-2 group/link text-[10px] uppercase tracking-widest">
                      Join Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Book Grid */}
          <div className="flex-grow">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredBooks.map((book) => (
                  <motion.div 
                    key={book.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 relative book-shadow border border-white/10">
                      <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-space-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button 
                          onClick={() => setQuickViewBook(book)}
                          className="w-12 h-12 bg-white text-space-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all transform scale-0 group-hover:scale-100 duration-300 galaxy-glow"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white text-space-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all transform scale-0 group-hover:scale-100 duration-300 delay-75 galaxy-glow">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/10 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                          {book.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <Link to={`/book/${book.id}`}>
                        <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors leading-tight text-white tracking-tight">{book.title}</h3>
                      </Link>
                      <div className="flex items-center gap-1 text-xs font-bold text-accent">
                        <Star className="w-3 h-3 fill-current" />
                        {book.rating}
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">{book.author}</p>
                    <p className="font-display font-bold text-xl text-white tracking-tight">RM {book.price}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 glass-card border border-white/10 rounded-[48px]">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                  <Search className="w-10 h-10 text-slate-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 text-white tracking-tight">No books found</h3>
                <p className="text-slate-500 mb-8 font-medium">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="bg-accent text-white px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest galaxy-glow"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewBook && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewBook(null)}
              className="absolute inset-0 bg-space-dark/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-space-dark rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
            >
              <button 
                onClick={() => setQuickViewBook(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="md:w-1/2 aspect-[3/4] md:aspect-auto">
                <img src={quickViewBook.image} alt={quickViewBook.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {quickViewBook.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-accent">
                    <Star className="w-3 h-3 fill-current" />
                    {quickViewBook.rating}
                  </div>
                </div>
                <h2 className="text-4xl font-display font-bold mb-2 leading-tight">{quickViewBook.title}</h2>
                <p className="text-lg text-slate-400 mb-6">by {quickViewBook.author}</p>
                <p className="text-slate-500 leading-relaxed mb-8">{quickViewBook.description}</p>
                <div className="flex items-center justify-between mb-10">
                  <span className="text-3xl font-bold text-white">RM {quickViewBook.price}</span>
                  <div className="flex gap-2">
                    <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-accent/10 hover:text-accent transition-all">
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="bg-accent text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </button>
                  </div>
                </div>
                <Link 
                  to={`/book/${quickViewBook.id}`}
                  onClick={() => setQuickViewBook(null)}
                  className="text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-2"
                >
                  View Full Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
