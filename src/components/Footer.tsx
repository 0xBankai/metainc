import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-black border-t border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
							Meta Coin
						</h3>
						<p className="text-gray-400">
							Building the future of digital interaction on Solana.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#about"
									className="text-gray-400 hover:text-white transition-colors"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#features"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Socials
								</a>
							</li>
							<li>
								<a
									href="#how-to-buy"
									className="text-gray-400 hover:text-white transition-colors"
								>
									How to Buy
								</a>
							</li>
							<li>
								<a
									href="#risks"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Risks
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
					<p>
						© {new Date().getFullYear()} This is an unofficial community site
						and is not affiliated with Meta Platforms, Inc.
					</p>
				</div>
			</div>
		</footer>
	);
}
