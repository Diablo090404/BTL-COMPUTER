import { motion } from "motion/react";
import { ShoppingCart, Trash2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 39.90, quantity: 1, image: "https://picsum.photos/seed/alchemist/200/300" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: 75.00, quantity: 1, image: "https://picsum.photos/seed/habits/200/300" },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10.00;
  const total = subtotal + shipping;

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  return (
    <div className="pt-32 pb-20 px-4 bg-space-dark min-h-screen relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center galaxy-glow">
            <ShoppingCart className="text-white w-6 h-6" />
          </div>
          <h1 className="text-5xl font-display font-bold text-white tracking-tighter">COSMIC CART</h1>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6 flex gap-6 items-center group hover:border-accent/30 transition-colors"
                >
                  <div className="w-24 h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-display font-bold text-xl mb-1 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{item.author}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-white/10 rounded-full overflow-hidden bg-white/5">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-white/10 font-bold text-white transition-colors">-</button>
                        <span className="px-3 py-1 font-bold min-w-[30px] text-center text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-white/10 font-bold text-white transition-colors">+</button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-red-500 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-2xl text-white">RM {(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">RM {item.price} each</p>
                  </div>
                </motion.div>
              ))}

              <Link to="/shop" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all mt-8">
                <ArrowLeft className="w-4 h-4" />
                Return to Archive
              </Link>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="glass-card p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                <h2 className="text-2xl font-display font-bold mb-8 text-white relative z-10">Order Summary</h2>
                <div className="space-y-4 mb-8 relative z-10">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="font-bold text-white">RM {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className="font-bold text-white">RM {shipping.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                    <span className="font-bold text-lg text-slate-300">Total</span>
                    <span className="text-3xl font-display font-bold text-accent galaxy-glow">RM {total.toFixed(2)}</span>
                  </div>
                </div>
                <Link to="/checkout" className="w-full bg-accent text-white py-5 rounded-full text-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl relative z-10 galaxy-glow">
                  Checkout <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="p-8 rounded-[32px] bg-accent/10 border border-accent/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-accent mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Subscribe & Save
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">Join the Cosmic Elite and save 20% on this order and all future purchases.</p>
                  <Link to="/subscriptions" className="text-accent font-bold flex items-center gap-2 group/link">
                    View Plans <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-32 glass-card">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
              <ShoppingCart className="w-12 h-12 text-slate-500" />
            </div>
            <h2 className="text-4xl font-display font-bold mb-4 text-white">Your cart is empty</h2>
            <p className="text-slate-400 mb-10 max-w-md mx-auto">Looks like you haven't added any books to your collection yet. Start exploring our universe of knowledge!</p>
            <Link to="/shop" className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform inline-block galaxy-glow">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
