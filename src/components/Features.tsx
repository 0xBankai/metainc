import React from "react";
import Telegram from "./Telegram-1.png";
import X from "./X.png";
import Dex from "./Dex.png";

export default function Features() {
	const features = [
		{
			icon: <img src={Dex} alt="Dex Screener" className="w-12 h-12" />,
			title: "Dex Screener",
			description: "Hit the rockets and stay on top of our performance!",
			link: "https://www.dextools.io/",
		},
		{
			icon: <img src={Telegram} alt="Telegram" className="w-12 h-12" />,
			title: "Telegram",
			description:
				"Join our vibrant Telegram community! Be part of the conversation and connect with fellow Meta on Sol enthusiasts.",
			link: "https://t.me/MetaIncOnSol",
		},
		{
			icon: <img src={X} alt="Twitter" className="w-12 h-12" />,
			title: "Twitter",
			description:
				"Join our Twitter community for updates, insights, and more! Stay up to date with Meta on Sol!",
			link: "https://twitter.com/your-twitter-handle",
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
						<a
							href={feature.link}
							key={index}
							target="_blank"
							rel="noopener noreferrer"
							className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1 block"
						>
							<div className="mb-6">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
							<p className="text-gray-400">{feature.description}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
