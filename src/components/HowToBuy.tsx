import React from 'react';
import { Wallet } from 'lucide-react';

export default function HowToBuy() {
  const steps = [
    {
      number: "01",
      title: "Set Up Phantom Wallet",
      description: "Download and install Phantom Wallet from the official website."
    },
    {
      number: "02",
      title: "Get SOL",
      description: "Purchase SOL from a major exchange and transfer it to your Phantom Wallet."
    },
    {
      number: "03",
      title: "Connect to Jupiter",
      description: "Visit Jupiter Swap and connect your Phantom Wallet."
    },
    {
      number: "04",
      title: "Swap for META",
      description: "Select SOL as your input token and Meta Coin (META) as output."
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How to Buy Meta Coin
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to join the Meta Coin community on Solana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-all inline-flex items-center">
            <Wallet className="mr-2" />
            Start Trading Now
          </button>
        </div>
      </div>
    </section>
  );
}