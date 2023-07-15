"use client";

import React from "react";

import HeroSection from "./components/HeroSection";
import "react-multi-carousel/lib/styles.css";
import CustomCarousel from "./components/CustomCarousel";

export default function Home() {
	return (
		<main>
			<HeroSection />
			{/* ProductSection */}
			<section className="bg-customPrimary text-white">
				<div className="w-5/6 pt-20 pb-20 mx-auto my-auto">
					<h1 className="text-3xl text-center mb-2">OUR PRODUCTS</h1>
					<CustomCarousel />
				</div>
			</section>

			<section className="bg-customPrimary text-white">
				<div className="w-5/6 pt-20 pb-20 mx-auto my-auto">
					<h1 className="text-3xl text-center mb-2">OUR PRODUCTS</h1>
					<CustomCarousel />
				</div>
			</section>
		</main>
	);
}
