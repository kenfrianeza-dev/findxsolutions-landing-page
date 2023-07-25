import { FC } from "react";
import Image from "next/image";
import background from "../../../public/background.jpg";
import { motion } from "framer-motion";

import logo1 from "../../../public/client-logo/ched.png";
import logo2 from "../../../public/client-logo/dbp.png";
import logo3 from "../../../public/client-logo/dept-of-agri-central.png";
import logo4 from "../../../public/client-logo/dept-of-agri-region-4.png";
import logo5 from "../../../public/client-logo/dept-of-health-region-4.png";
import logo6 from "../../../public/client-logo/dost.png";
import logo7 from "../../../public/client-logo/dswd.png";
import logo8 from "../../../public/client-logo/gulod-elem-school.png";
import logo9 from "../../../public/client-logo/komisyon-sa-wikang-filipino.png";
import logo10 from "../../../public/client-logo/marina.png";
import logo11 from "../../../public/client-logo/mcwd.png";
import logo12 from "../../../public/client-logo/nlp.png";
import logo13 from "../../../public/client-logo/pmma.png";
import logo14 from "../../../public/client-logo/prc.png";
import logo15 from "../../../public/client-logo/seal-of-vp.png";
import logo16 from "../../../public/client-logo/up.png";

interface ClientSectionProps {}

const ClientSection: FC<ClientSectionProps> = () => {
	const data = [
		{ name: "ched", icon: logo1 },
		{ name: "dbp", icon: logo2 },
		{ name: "dept-of-agri-central", icon: logo3 },
		{ name: "dept-of-agri-region-4", icon: logo4 },
		{ name: "dept-of-health-region-4", icon: logo5 },
		{ name: "dost", icon: logo6 },
		{ name: "dswd", icon: logo7 },
		{ name: "gulod-elem-school", icon: logo8 },
		{ name: "komisyon-sa-wikang-filipino", icon: logo9 },
		{ name: "marina", icon: logo10 },
		{ name: "nlp", icon: logo12 },
		{ name: "pmma", icon: logo13 },
		{ name: "prc", icon: logo14 },
		{ name: "seal-of-vp", icon: logo15 },
		{ name: "up", icon: logo16 },
		// { name: "mcwd", icon: logo11 },
	];

	return (
		<>
			<section className="relative text-white">
				<Image
					className="absolute object-cover bg-center bg-cover bg-no-repeat"
					src={background}
					alt="background"
					placeholder="blur"
					fill
				/>
				<div className="relative bg-customPrimary/60 bg-gradient-to-b from-customPrimary via-transparent to-customPrimary text-white">
					<div className="relative max-w-4xl w-11/12 pt-20 pb-20 mx-auto my-auto">
						<motion.h1
							className="text-3xl text-center mb-2"
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
						>
							Our Regular Clients Since 2022
						</motion.h1>
						{/* Desktop */}
						<div>
							<div className="grid grid-cols-5 gap-4 mt-10">
								{data.map((item) => {
									return (
										<motion.div
											className="flex justify-center items-center"
											key={item.name}
											initial={{
												opacity: 0,
											}}
											whileInView={{ opacity: 1 }}
											transition={{ duration: 1.5 }}
										>
											<Image
												className="w-40"
												src={item.icon}
												alt={item.name}
												placeholder="blur"
											/>
										</motion.div>
									);
								})}
							</div>
							<div className="flex justify-center items-center mt-4">
								<Image
									className="md:w-56 w-40"
									src={logo11}
									alt="mcwd"
									placeholder="blur"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ClientSection;
