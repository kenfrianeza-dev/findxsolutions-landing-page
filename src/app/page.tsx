"use client";

import "react-multi-carousel/lib/styles.css";
import {
	HeroSection,
	ProductSection,
	ClientSection,
	AboutSection,
	QuoteSection,
} from "./components";
import { Toaster } from "@/components/ui/toaster";

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
			{/* Quote Section */}
			<QuoteSection />
			{/* Toaster */}
			<Toaster />
		</main>
	);
}
