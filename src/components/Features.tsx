import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: "Thriving Community",
      description: "Join a vibrant ecosystem of digital pioneers shaping the future of online interaction."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: "Lightning Fast",
      description: "Experience near-instant transactions with minimal fees on Solana's powerful network."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Secure & Reliable",
      description: "Built on Solana's battle-tested blockchain technology for maximum security."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Meta Coin?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of digital interaction with our innovative platform
            built on Solana's high-performance blockchain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}