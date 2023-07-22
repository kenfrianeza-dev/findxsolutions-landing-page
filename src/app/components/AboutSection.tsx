import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = () => {
	return (
		<>
			<section id="about-us" className="bg-customPrimary text-white">
				<div className="w-5/6 pt-20 pb-20 mx-auto my-auto flex flex-col justify-center items-center gap-8">
					<motion.h1
						className="text-3xl text-center"
						initial={{
							opacity: 0,
						}}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						About Us
					</motion.h1>
					<div className="text-center">
						<motion.p
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
						>
							Founded in 2022, inside a tiny room,{" "}
							<span className="font-bold">FindX Solutions Philippines</span> was
							born. With a mission to give happiness to our clients by providing
							solutions to their needs at an affordable rate, fast and
							efficient, with flexible payment options*, we grew from one client
							to more than 70 clients in just a span of year!
						</motion.p>
						<br />
						<motion.p
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
						>
							Some of our clients note that{" "}
							<span className="font-bold">FindX Solutions Philippines</span> is
							the best company to go for urgent requirements, or even non-urgent
							requirements, but needs to be delivered fast to their offices. And
							as we expand our ever-growing clientele, JOIN US, and we will be
							more than glad to be your partner in providing{" "}
							<span className="font-bold">SOLUTIONS to your X!</span>
						</motion.p>
					</div>
					<motion.div
						initial={{
							opacity: 0,
						}}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
					>
						<Link href="/learn-more" className="text-center  text-xl">
							<span className="hover:underline">Learn More</span> ➤
						</Link>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default AboutSection;
