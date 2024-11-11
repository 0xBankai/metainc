import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./metapngwithnobg.png";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<img src={Logo} alt="Meta Coin Logo" className="h-8 w-auto" />
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<a
								href="#about"
								className="hover:text-purple-400 transition-colors"
							>
								About
							</a>
							<a
								href="#features"
								className="hover:text-purple-400 transition-colors"
							>
								Socials
							</a>
							<a
								href="#how-to-buy"
								className="hover:text-purple-400 transition-colors"
							>
								How to Buy
							</a>
							<a
								href="#risks"
								className="hover:text-purple-400 transition-colors"
							>
								Risks
							</a>
						</div>
					</div>

					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="p-2">
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
						<a href="#about" className="block px-3 py-2 hover:text-purple-400">
							About
						</a>
						<a
							href="#features"
							className="block px-3 py-2 hover:text-purple-400"
						>
							Features
						</a>
						<a
							href="#how-to-buy"
							className="block px-3 py-2 hover:text-purple-400"
						>
							How to Buy
						</a>
						<a href="#risks" className="block px-3 py-2 hover:text-purple-400">
							Risks
						</a>
						<button className="w-full mt-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full font-medium">
							Get Started
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
