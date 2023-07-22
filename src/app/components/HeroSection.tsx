import Image from "next/image";
import background from "../../../public/background.jpg";
// import logo from "../../../public/logo2.png";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<>
			<Image
				className="object-cover bg-center bg-cover bg-no-repeat -z-[50]"
				src={background}
				alt="background"
				placeholder="blur"
				fill
			/>
			<section id="hero-section">
				<div className="relative bg-customPrimary/60 bg-gradient-to-b from-transparent via-transparent to-customPrimary text-white">
					<div className="w-5/6 mx-auto py-24 h-screen">
						<div className="flex flex-col justify-center gap-y-6 h-full">
							<div className="flex flex-col gap-y-1">
								<motion.div
									initial={{ opacity: 0, x: "-100vw" }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1 }}
								>
									<h1 className="font-sans font-semibold text-5xl">
										Welcome to
									</h1>
									<h1 className="font-sans font-semibold text-5xl ">
										FIND<span className="text-customSecondary">X</span>{" "}
										SOLUTIONS
									</h1>
								</motion.div>
							</div>
							<motion.div
								className="text-xl"
								initial={{ opacity: 0, x: "-100vw" }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1.5 }}
							>
								<p>The Philippines’ No.1 Go-To Company</p>
								<p>For Office Equipments & Corporate Giveaways </p>
							</motion.div>
							{/* Button */}
							<motion.div
								className="inline-block"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1.5 }}
							>
								<Link
									href="#products-section"
									className="border px-4 py-2 rounded-md hover:bg-white hover:text-customPrimary duration-300"
								>
									Get Started
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
