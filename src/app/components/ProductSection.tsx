import CustomCarousel from "./CustomCarousel";
import { FC } from "react";
import { motion } from "framer-motion";

interface ProductSectionProps {}

const ProductSection: FC<ProductSectionProps> = () => {
	return (
		<>
			<section id="products-section" className="bg-customPrimary text-white">
				<div className="max-w-4xl w-11/12 pt-20 pb-20 mx-auto my-auto">
					<motion.h1
						className="text-3xl text-center mb-2"
						initial={{
							opacity: 0,
						}}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						Our Products
					</motion.h1>
					<motion.div
						initial={{
							opacity: 0,
						}}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
					>
						{" "}
						<CustomCarousel />
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default ProductSection;
