import { FC } from "react";
import ProductCard from "./ProductCard";

interface ProductProps {
	params: { category: string };
}

const Product: FC<ProductProps> = async ({ params }) => {
	const res = await fetch(
		`https://findxsolutions.ph/api/products/category/${params.category}`
	);
	const products = await res.json();
	const { data } = products;
	return (
		<>
			<div className="bg-customPrimary w-full min-h-screen pt-24 pb-10">
				<div className="w-5/6 mx-auto text-white flex flex-col gap-y-6">
					<h1 className="text-3xl text-center">{data[0].category}</h1>
					<ProductCard data={data} />
				</div>
			</div>
		</>
	);
};

export default Product;
