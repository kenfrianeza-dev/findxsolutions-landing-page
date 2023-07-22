"use client";

import { FC } from "react";
import Image from "next/image";
import background from "../../../public/background.jpg";
import { motion } from "framer-motion";

interface LearnMoreProps {}

const LearnMore: FC<LearnMoreProps> = () => {
	const data = [
		"Integrity",
		"Efficiency",
		"Humility",
		"Honesty",
		"Transparency",
	];

	return (
		<>
			<section className="bg-customPrimary">
				<Image
					className="absolute object-cover bg-center bg-cover bg-no-repeat"
					src={background}
					alt="background"
					placeholder="blur"
					fill
				/>
				<div className="relative flex w-full min-h-screen bg-customPrimary/60 bg-gradient-to-b from-transparent via-transparent to-customPrimary text-white">
					<div className="mt-15 w-5/6 mx-auto text-white flex flex-col justify-center items-center gap-y-6">
						<motion.h1
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
							className="text-4xl text-center font-bold"
						>
							LEARN MORE ABOUT US
						</motion.h1>
						<motion.p
							className="text-justify"
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
						>
							A NEW PLAYER IN THE INDUSTRY, FindX Solutions Philippines is
							anchored in providing you with everything you need for a
							reasonable price while maintaining first-class customer service at
							the same time. If in Algebra, we solve for X, in this case, we
							will solve the X for you! From A to Z, everything you need, just
							call or email us and we will deliver them right at your doorstep.
						</motion.p>

						<motion.p
							className="text-justify"
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
						>
							We also offer flexible payment arrangements* to meet our
							client&apos;s requirement and make their FindX experience better
							and create more positive rapport between us and our beloved
							customers. Be one of our first clients! Have us as your supplier
							and we will make you feel the FindX&apos;s great customer service
							like you&apos;ve never experienced before!
						</motion.p>

						<div className="border-b border-b-white/25 w-full"></div>

						<div className="grid grid-cols-3 gap-4">
							<div className="flex flex-col gap-4 ">
								<motion.h1
									initial={{
										opacity: 0,
									}}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 1.5 }}
									className="text-4xl text-center font-bold"
								>
									THE 3-POINT VISION
								</motion.h1>
								<motion.p
									className="text-justify"
									initial={{
										opacity: 0,
									}}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 1 }}
								>
									To provide solution to every Filipinos&apos; needs, invade the
									global market, and be one of the top players in the global
									economy.
								</motion.p>
							</div>

							<div className="flex flex-col gap-4 border-l border-l-white/25 border-r border-r-white/25">
								<motion.h1
									initial={{
										opacity: 0,
									}}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 1.5 }}
									className="text-4xl text-center font-bold"
								>
									CORE VALUES
								</motion.h1>
								<ul className="text-center">
									{data.map((item) => {
										return (
											<li key={item}>
												<motion.p
													initial={{
														opacity: 0,
													}}
													whileInView={{ opacity: 1 }}
													transition={{ duration: 1 }}
												>
													{item}
												</motion.p>
											</li>
										);
									})}
								</ul>
							</div>

							<div className="flex flex-col gap-4 ">
								<motion.h1
									initial={{
										opacity: 0,
									}}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 1.5 }}
									className="text-4xl text-center font-bold"
								>
									MISSION
								</motion.h1>
								<motion.p
									className="text-justify"
									initial={{
										opacity: 0,
									}}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 1 }}
								>
									To deliver goods to our consumers as efficient and as fast as
									possible, while as the same time, maintaining high-quality
									customer service to our clients.
								</motion.p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LearnMore;
