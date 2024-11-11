import React from "react";
import {
	ArrowRight,
	Wallet,
	Shield,
	Zap,
	Users,
	Globe2,
	ChevronDown,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowToBuy from "./components/HowToBuy";
import Risks from "./components/Risks";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Features />
				<HowToBuy />
				<Risks />
			</main>
			<Footer />
		</div>
	);
}

export default App;
