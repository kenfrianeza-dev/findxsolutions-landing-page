import CustomCarousel from "./CustomCarousel";
import { FC } from "react";

interface ProductSectionProps {}

const ProductSection: FC<ProductSectionProps> = () => {
	return (
		<>
			<section className="bg-customPrimary text-white">
				<div className="w-5/6 pt-20 pb-20 mx-auto my-auto">
					<h1 className="text-3xl text-center mb-2">OUR PRODUCTS</h1>
					<CustomCarousel />
				</div>
			</section>
		</>
	);
};

export default ProductSection;
