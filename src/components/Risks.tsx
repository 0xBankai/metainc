import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Risks() {
  const risks = [
    {
      title: "Market Volatility",
      description: "Cryptocurrency markets can be highly volatile, with significant price fluctuations."
    },
    {
      title: "Regulatory Changes",
      description: "The regulatory landscape for cryptocurrencies is evolving and may impact Meta Coin."
    },
    {
      title: "Technical Risks",
      description: "While Solana is secure, all blockchain technologies carry inherent technical risks."
    }
  ];

  return (
    <section id="risks" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Understanding the Risks
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            While we believe in the potential of Meta Coin, it's important to understand
            the risks involved in cryptocurrency investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-colors"
            >
              <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{risk.title}</h3>
              <p className="text-gray-400">{risk.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20">
          <p className="text-center text-gray-400">
            Always conduct your own research and never invest more than you can afford to lose.
            Cryptocurrency investments carry high risk and past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </section>
  );
}