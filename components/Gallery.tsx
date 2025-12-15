import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductItem } from '../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Geometric' | 'Wave' | 'Classic'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-semibold tracking-wider uppercase mb-2 block">Our Collection</span>
          <h2 className="text-4xl font-bold text-luxury-dark mb-4">Explore Our Designs</h2>
          <p className="text-gray-600">Discover the perfect texture for your interior.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Geometric', 'Wave', 'Classic'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-luxury-dark text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title.en} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="bg-gold-500 w-12 h-1 mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h3 className="text-2xl font-bold mb-1">{product.title.en}</h3>
        <p className="text-gold-300 font-medium mb-2">{product.title.am}</p>
        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
            <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 delay-100">
            {product.description.en} <br/> {product.description.am}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;