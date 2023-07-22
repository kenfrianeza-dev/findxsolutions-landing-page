"use client";

import { FC, useId } from "react";
import Image from "next/image";
import ProductDialogue from "./ProductDialogue";
import { motion } from "framer-motion";

interface ProductCardProps {
	data: [];
}

interface ItemProps {
	category: string;
	name: string;
	image_path: string;
	slug: string;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
	const id = useId();

	return (
		<motion.div
			layout
			className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
		>
			{data.map((item: ItemProps) => (
				<motion.div
					className="cursor-pointer"
					key={id}
					initial={{
						opacity: 0,
					}}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<Image
						className="rounded-t-sm relative aspect-square object-cover bg-customPrimary opacity-75 hover:opacity-100 duration-300"
						src={item.image_path}
						alt={item.name}
						width={1024}
						height={1024}
					/>
					<div className="hover:bg-white/5 duration-300 rounded-b-sm flex justify-between items-center gap-4 p-4 border border-t-0 border-l-white/10 border-b-white/10 border-r-white/10">
						<h1 className="text-center font-semibold">{item.name}</h1>
						<div>
							<ProductDialogue product={item.name} />
						</div>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default ProductCard;
