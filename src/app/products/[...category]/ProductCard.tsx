"use client";

import { FC, useId } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
	data: [];
}

interface ItemProps {
	category: string;
	name: string;
	image_path: string;
	slug: string;
}

const ProductCard: FC<ProductCardProps> = (props) => {
	const id = useId();
	return (
		<>
			{props.data.map((item: ItemProps, index: number) => (
				<div className="cursor-pointer " key={id}>
					<Image
						className="rounded-t-sm relative aspect-square object-cover bg-customPrimary opacity-75 hover:opacity-100 duration-300"
						src={item.image_path}
						alt={item.name}
						width={1024}
						height={1024}
					/>
					<div className="hover:bg-white/5 duration-300 rounded-b-sm flex justify-between items-center gap-4 p-4 border border-t-0 border-l-white/10 border-b-white/10 border-r-white/10">
						<h1 className="text-center font-semibold">{item.name}</h1>
						<Button variant={"secondary"} className="text-center border">
							Request a Quote
						</Button>
					</div>
				</div>
			))}
		</>
	);
};

export default ProductCard;
