import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, Check, Info, MessageSquare, BookOpen, Sparkles, Award } from "lucide-react";
import { cn } from "../lib/utils";

export function BookDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Mock data for the book
  const book = {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 39.90,
    rating: 4.8,
    reviews: 1240,
    image: "https://picsum.photos/seed/alchemist/600/900",
    category: "Fiction",
    description: "A global phenomenon, The Alchemist has been read and loved by over sixty-two million readers, becoming one of the best-selling books in history. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.",
    details: {
      pages: 208,
      publisher: "HarperOne",
      language: "English",
      isbn: "978-0062315007",
      dimensions: "5.3 x 0.5 x 8 inches"
    },
    userReviews: [
      { id: 1, user: "Sarah J.", rating: 5, comment: "A beautiful, life-affirming book. It really makes you think about your choices.", date: "2 days ago" },
      { id: 2, user: "Michael R.", rating: 4, comment: "Great concept, though some parts felt a bit repetitive. Overall a solid read.", date: "1 week ago" }
    ]
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

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
        <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent font-bold mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Archive
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Book Preview Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <div className="perspective-1000 group">
                <motion.div 
                  initial={{ rotateY: -20, rotateX: 10 }}
                  whileHover={{ rotateY: 0, rotateX: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="preserve-3d relative aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-y-0 left-0 w-8 book-spine z-10" />
                </motion.div>
              </div>
              
              <div className="flex gap-4 mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 hover:border-accent cursor-pointer transition-colors bg-white/5">
                    <img src={`https://picsum.photos/seed/book${i}/200/200`} alt="preview" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Book Info Section */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-accent/20 galaxy-glow">
                {book.category}
              </span>
              <div className="flex items-center gap-1 text-sm font-bold text-white">
                <Star className="w-4 h-4 fill-accent text-accent" />
                {book.rating} <span className="text-slate-500 font-normal">({book.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="text-6xl font-display font-bold mb-4 leading-tight text-white tracking-tighter">{book.title}</h1>
            <p className="text-2xl text-slate-400 mb-8">by <span className="text-white font-medium hover:text-accent cursor-pointer transition-colors">{book.author}</span></p>

            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-5xl font-display font-bold text-accent galaxy-glow">RM {book.price}</span>
              <span className="text-slate-600 line-through text-xl">RM 55.00</span>
              <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-500/20">Save 27%</span>
            </div>

            <div className="glass-card p-8 mb-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white galaxy-glow">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Subscribe & Save</h4>
                  <p className="text-sm text-slate-400">Get this book + 2 more monthly for RM 60/mo</p>
                </div>
                <Link to="/subscriptions" className="ml-auto bg-white/10 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-accent transition-all border border-white/10">
                  View Plans
                </Link>
              </div>
              <div className="h-px bg-white/10 mb-6 relative z-10" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-space-dark overflow-hidden shadow-xl">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-500">500+ people subscribed to this book this month</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-6 py-5 hover:bg-white/10 transition-colors font-bold text-xl text-white"
                >
                  -
                </button>
                <span className="px-6 py-5 font-bold text-xl min-w-[60px] text-center text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-6 py-5 hover:bg-white/10 transition-colors font-bold text-xl text-white"
                >
                  +
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className={cn(
                  "flex-grow md:flex-grow-0 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl galaxy-glow",
                  isAdded && "bg-green-600"
                )}
              >
                {isAdded ? <Check className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />}
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </button>
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
                { id: "details", label: "Product Details", icon: BookOpen },
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
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent galaxy-glow" />
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
                    {book.description}
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
                    {Object.entries(book.details).map(([key, value]) => (
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
                    {book.userReviews.map((review) => (
                      <div key={review.id} className="glass-card p-6">
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
                { icon: Check, text: "Fast Shipping" },
                { icon: BookOpen, text: "Digital Copy" },
                { icon: Award, text: "Top Quality" }
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
