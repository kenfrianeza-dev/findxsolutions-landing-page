import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: "FindX Solutions Philippines",
	description:
		"The Philippines’ No.1 Go-To Company For Office Equipments & Corporate Giveaways",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
