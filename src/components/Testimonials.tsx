import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Meta Coin is revolutionizing how we think about digital communities. The integration with Solana's ecosystem is seamless.",
      author: "Sarah Chen",
      title: "Blockchain Developer"
    },
    {
      quote: "The speed and efficiency of Meta Coin on Solana is impressive. This is the future of social tokens.",
      author: "Michael Rodriguez",
      title: "Web3 Investor"
    },
    {
      quote: "As a community member, I'm excited about the possibilities Meta Coin brings to digital interaction.",
      author: "David Park",
      title: "Community Leader"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Community Voices
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our community members have to say about their experience with Meta Coin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}