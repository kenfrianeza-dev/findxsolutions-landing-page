import { FC } from "react";
import ProductCard from "../../components/ProductCard";
import ProductMenu from "@/app/components/ProductMenu";
import Link from "next/link";

interface ProductProps {
	params: { category: string };
}

const Product: FC<ProductProps> = async ({ params }) => {
	const API_URL_NO_SUB = `http://localhost:3000/api/products/${params.category[0]}`;
	const API_URL_WITH_SUB = `http://localhost:3000/api/products/${params.category[0]}/${params.category[1]}`;
	const SUB_CATEGORY = params.category.length > 1;
	const res = await fetch(SUB_CATEGORY ? API_URL_WITH_SUB : API_URL_NO_SUB);
	const products = await res.json();
	const { data } = products;
	return (
		<>
			<div className="bg-customPrimary w-full min-h-screen pt-24 pb-8">
				<div className="max-w-6xl w-11/12 mx-auto text-white flex flex-col gap-y-6">
					<h1 className="border-b-white/10 border-b pb-6">
						<Link href="/" className="hover:underline cursor-pointer">
							Home
						</Link>{" "}
						/{" "}
						<Link href="/products" className="hover:underline cursor-pointer">
							Products
						</Link>{" "}
						/{" "}
						{SUB_CATEGORY ? (
							<>
								<Link
									href="/products/office-furnitures"
									className="hover:underline cursor-pointer"
								>
									{data[0].category}
								</Link>{" "}
								/{" "}
								<span className="font-bold cursor-pointer underline">
									{data[1].sub_category}
								</span>
							</>
						) : (
							<span className="font-bold cursor-pointer underline">
								{data[0].category}
							</span>
						)}
					</h1>
					<div className="flex gap-4">
						<ProductMenu />
						<ProductCard data={data} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
