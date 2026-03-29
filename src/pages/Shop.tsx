import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, MessageCircle, ShoppingBag } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Laptops', 'Gaming PCs', 'Components', 'Accessories'];

const products = [
  { id: 1, name: 'ASUS ROG Zephyrus G14', category: 'Laptops', price: 'RM6,499', image: 'https://picsum.photos/seed/rog/400/400' },
  { id: 2, name: 'Custom RTX 4060 Build', category: 'Gaming PCs', price: 'RM3,299', image: 'https://picsum.photos/seed/pc3/400/400' },
  { id: 3, name: 'Logitech G502 Hero', category: 'Accessories', price: 'RM199', image: 'https://picsum.photos/seed/mouse/400/400' },
  { id: 4, name: 'Samsung 980 Pro 1TB', category: 'Components', price: 'RM450', image: 'https://picsum.photos/seed/ssd/400/400' },
  { id: 5, name: 'Acer Swift Go 14', category: 'Laptops', price: 'RM3,199', image: 'https://picsum.photos/seed/acer/400/400' },
  { id: 6, name: 'Budget Student PC', category: 'Gaming PCs', price: 'RM1,599', image: 'https://picsum.photos/seed/pc4/400/400' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-neutral-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl mb-2">Our <span className="text-primary">Shop</span></h1>
              <p className="text-neutral-400">Browse our latest stock. Reserve via WhatsApp.</p>
            </div>
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                  activeCategory === cat 
                    ? "bg-primary border-primary text-white" 
                    : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <motion.div 
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-primary border border-primary/20">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-2xl font-display font-bold text-white mb-6">{p.price}</p>
                  <div className="flex gap-2">
                    <a 
                      href={`https://wa.me/60163649245?text=Hi,%20is%20${p.name}%20available?`} 
                      className="btn-primary flex-1"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Check Stock
                    </a>
                    <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                      <ShoppingBag className="w-5 h-5 text-neutral-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-neutral-500 text-xl">No products found matching your search.</p>
              <button 
                onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                className="text-primary font-bold mt-4 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-neutral-400 italic">
            "Prices are subject to change based on market availability. Visit our shop for the best deals!"
          </p>
        </div>
      </section>
    </div>
  );
}
