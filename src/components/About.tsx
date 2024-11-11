import React from 'react';
import { Globe2, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Meta Coin and Meta Inc.
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Meta Platforms Inc., originally known as Facebook, has evolved with a commitment to innovation
            and fostering connections. Meta Coin, created on Solana, aims to take this mission into Web3
            by creating a decentralized, empowered community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe2 className="w-8 h-8 text-purple-400" />,
              title: "Building Web3 Community",
              description: "Meta Coin on Solana, designed to encourage and incentivize digital connection within Web3."
            },
            {
              icon: <Zap className="w-8 h-8 text-blue-400" />,
              title: "Leverage Solana's Blockchain",
              description: "Benefit from Solana's low-cost, high-speed transactions, ideal for a thriving community."
            },
            {
              icon: <Users className="w-8 h-8 text-green-400" />,
              title: "Connecting Through Meta",
              description: "Extending Meta's brand into the decentralized space with innovative solutions."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}