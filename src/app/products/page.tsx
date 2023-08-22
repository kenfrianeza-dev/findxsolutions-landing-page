import Link from "next/link";
import { FC } from "react";
import ProductCard from "../components/ProductCard";
import ProductMenu from "../components/ProductMenu";
import { URL_DOMAIN } from "../constants/domain";

interface ProductsProps {}

const Products: FC<ProductsProps> = async () => {
	const res = await fetch(`${URL_DOMAIN}/api/products`);
	const products = await res.json();
	const { data } = products;

	return (
		<div className="bg-customPrimary w-full min-h-screen pt-24 pb-8">
			<div className="max-w-6xl w-11/12 mx-auto text-white flex flex-col gap-y-6">
				<h1 className="border-b-white/10 border-b pb-6">
					<Link href="/">Home</Link> /{" "}
					<span className="font-bold cursor-pointer underline">Products</span>
				</h1>
				<div className="flex gap-4">
					<ProductMenu />
					<div className="">
						<ProductCard data={data} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
