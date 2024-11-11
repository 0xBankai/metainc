import React from "react";
import { Shield, Zap, Users } from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: <Users className="w-12 h-12 text-purple-400" />,
			title: "Dex Screener",
			description:
				"Catch the latest Meta Coin trends on Dex Screener! Hit the rockets and stay on top of our performance!",
		},
		{
			icon: <Zap className="w-12 h-12 text-blue-400" />,
			title: "Telegram",
			description:
				"Join our vibrant Telegram community! Be part of the conversation and connect with fellow Meta Coin enthusiasts.",
		},
		{
			icon: <Shield className="w-12 h-12 text-green-400" />,
			title: "Twitter",
			description:
				"Follow us on Twitter for updates, insights, and more! Stay connected with everything Meta Coin!",
		},
	];

	return (
		<section
			id="features"
			className="py-20 bg-gradient-to-b from-black to-gray-900"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Join Our Community
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Connect with us and be part of the future of digital interaction!
						Follow our journey on Solana’s high-performance blockchain and stay
						updated with all things Meta Coin.
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
