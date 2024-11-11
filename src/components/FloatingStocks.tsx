import React from 'react';

const stocks = [
  { symbol: 'AAPL', price: '$182.52' },
  { symbol: 'MSFT', price: '$425.22' },
  { symbol: 'NVDA', price: '$878.36' },
  { symbol: 'GOOGL', price: '$147.68' },
  { symbol: 'AMZN', price: '$178.15' },
  { symbol: 'META', price: '$509.58' },
  { symbol: 'BRK.A', price: '$621,699' },
  { symbol: 'TSLA', price: '$202.64' },
  { symbol: 'LLY', price: '$770.31' },
  { symbol: 'V', price: '$279.87' }
];

export default function FloatingStocks() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
      {stocks.map((stock, index) => (
        <div
          key={stock.symbol}
          className="absolute text-white/50 font-mono text-sm md:text-base animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          {stock.symbol} {stock.price}
        </div>
      ))}
    </div>
  );
}