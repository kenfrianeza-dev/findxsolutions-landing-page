"use client";

import { FC, useId, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProductMenuProps {}

const ProductMenu: FC<ProductMenuProps> = () => {
	const id = useId();
	const path = usePathname();
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	const baseUrl = "/products";
	const categoryMenuData = [
		{ name: "All Products", url: `${baseUrl}` },
		{ name: "Office Equipments", url: `${baseUrl}/office-equipments` },
		{
			name: "Office Furnitures",
			url: `${baseUrl}/office-furnitures`,
			hasSub: true,
			sub_category: [
				{
					name: "Office Chairs",
					url: `${baseUrl}/office-furnitures/office-chairs`,
				},
				{
					name: "Office Tables",
					url: `${baseUrl}/office-furnitures/office-tables`,
				},
				{
					name: "Filing Cabinets",
					url: `${baseUrl}/office-furnitures/filing-cabinets`,
				},
			],
		},
		{ name: "Garments", url: `${baseUrl}/garments` },
		{ name: "Corporate Giveaways", url: `${baseUrl}/corporate-giveaways` },
		{ name: "Collaterals", url: `${baseUrl}/collaterals` },
		{ name: "Awards & Citations", url: `${baseUrl}/awards-citations` },
		{ name: "Appliances", url: `${baseUrl}/appliances` },
		{ name: "Advertising Goods", url: `${baseUrl}/advertising-goods` },
		{
			name: "Audio-Visual Equipments",
			url: `${baseUrl}/audio-visual-equipments`,
		},
	];

	return (
		<div className="hidden md:block min-w-[180px] w-full">
			<div className="gap-1 flex flex-col text-sm">
				<div className="font-bold">PRODUCT CATEGORIES</div>
				<div className="border-b-4 w-[25px] mb-4"></div>
				<div className="flex flex-col gap-1">
					{categoryMenuData.map((category) => (
						<div
							key={id + category.name}
							className={`font-semibold border-b-white/10 border-b`}
						>
							<div className="flex justify-between items-center">
								<Link
									className={`w-full ${
										category.url === path ? "text-white" : "text-white/50"
									} hover:text-white duration-200 ${
										category.hasSub && "mr-2"
									}  my-2 mb-2 rounded-md`}
									href={category.url}
								>
									{category.name}
								</Link>
								{category.hasSub && (
									<span onClick={handleClick} className="cursor-pointer mr-2">
										{toggle ? <BsChevronUp /> : <BsChevronDown />}
									</span>
								)}
							</div>
							{category.hasSub && toggle && (
								<div className="flex flex-col gap-2 border-l-white/25 border-l pl-4 ml-4 mb-2">
									{category.sub_category.map((item) => {
										return (
											<Link
												key={id + item.name}
												href={item.url}
												className={`${
													item.url === path ? "text-white" : "text-white/50"
												} hover:text-white duration-200 font-normal rounded-md`}
											>
												{item.name}
											</Link>
										);
									})}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductMenu;
