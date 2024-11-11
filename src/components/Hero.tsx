import React from "react";
import { ArrowRight } from "lucide-react";
import FloatingStocks from "./FloatingStocks";

export default function Hero() {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80")',
					backgroundSize: "cover",
					backgroundPosition: "center",
					filter: "brightness(0.3)",
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
						Join the Unofficial
					</span>
					<br />
					Meta Coin Community on Solana
				</h1>

				<p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
					Meta Coin is the bridge between today’s social media giants and
					tomorrow’s decentralized communities. This unofficial site celebrates
					Meta Coin’s role on Solana, encouraging community members to explore,
					connect, and shape the future of digital interaction on Web3. As an
					unofficial platform, we’re here to share insights, tutorials, and
					resources to make Meta Coin accessible to all.
				</p>

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
