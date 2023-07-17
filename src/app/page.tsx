"use client";

import "react-multi-carousel/lib/styles.css";
import {
	HeroSection,
	ProductSection,
	ClientSection,
	AboutSection,
} from "./components";

export default function Home() {
	return (
		<main>
			{/* Hero Section */}
			<HeroSection />
			{/* ProductSection */}
			<ProductSection />
			{/* Clients Section */}
			<ClientSection />
			{/* About Section */}
			<AboutSection />
		</main>
	);
}
