"use client";

import { FC, useId } from "react";
import Image from "next/image";
import ProductDialogue from "./ProductDialogue";
import { motion } from "framer-motion";

interface ProductCardProps {
	data: Array<ItemType>;
}

interface ItemType {
	category: string;
	sub_category: string;
	name: string;
	image_path: string;
	slug: string;
	sub_slug: string;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
	const id = useId();

	return (
		<motion.div
			layout
			className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
		>
			{data.map((item) => (
				<motion.div
					key={id + item.name}
					initial={{
						opacity: 0,
					}}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<Image
						className="cursor-pointer rounded-t-sm relative aspect-square object-cover bg-customPrimary opacity-75 hover:opacity-100 duration-300"
						src={item.image_path}
						alt={item.name}
						width={1024}
						height={1024}
					/>
					<div className="cursor-pointer hover:bg-white/5 duration-300 rounded-b-sm border border-t-0 border-l-white/10 border-b-white/10 border-r-white/10">
						<div className="flex flex-col justify-center items-center gap-2 pt-2 pb-4">
							<h1 className="font-semibold">{item.name}</h1>
							<ProductDialogue product={item.name} />
						</div>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default ProductCard;
