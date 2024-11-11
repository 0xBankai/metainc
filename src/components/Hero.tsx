import React from 'react';
import { ArrowRight } from 'lucide-react';
import FloatingStocks from './FloatingStocks';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />

      {/* Floating Stocks */}
      <FloatingStocks />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Join the Future
          </span>
          <br />
          of Digital Interaction on Solana
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Meta Coin is more than just a digital asset; it's a gateway to a new way of connecting
          and collaborating on the Solana blockchain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-all flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}