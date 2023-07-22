"use client";

import { FC } from "react";
import Image from "next/image";
import background from "../../../public/background.jpg";
import { motion } from "framer-motion";

interface LearnMoreProps {}

const LearnMore: FC<LearnMoreProps> = () => {
	return (
		<>
			<section>
				<Image
					className="absolute object-cover bg-center bg-cover bg-no-repeat"
					src={background}
					alt="background"
					placeholder="blur"
					fill
				/>
				<div className="relative flex w-full min-h-screen bg-customPrimary/60 bg-gradient-to-b from-transparent via-transparent to-customPrimary text-white">
					<div className="m-20 w-5/6 mx-auto text-white flex flex-col justify-center items-center gap-y-6">
						<motion.h1
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
							className="text-4xl text-center font-bold"
						>
							About Us
						</motion.h1>
						<motion.p
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
					</div>
				</div>
			</section>
		</>
	);
};

export default LearnMore;
