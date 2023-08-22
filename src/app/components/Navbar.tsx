"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useId, useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const path = usePathname();
	const id = useId();
	const [color, setColor] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [toggleProducts, setToggleProducts] = useState(false);

	const handleClick = () => {
		setToggleProducts(!toggleProducts);
	};

	useEffect(() => {
		const changeColor = () => {
			window.scrollY >= 90 ? setColor(true) : setColor(false);
		};
		window.addEventListener("scroll", changeColor);
	}, []);

	const baseUrl = "/products";
	const data = [
		{ name: "Home", url: "/" },
		{
			name: "Products",
			url: `${baseUrl}`,
			hasSub: true,
			sub_category: [
				{ name: "All Products", url: `${baseUrl}` },
				{ name: "Office Equipments", url: `${baseUrl}/office-equipments` },
				{
					name: "Office Furnitures",
					url: `${baseUrl}/office-furnitures`,
				},
				{
					name: "Office Chairs",
					sub_category: "office-furnitures",
					url: `${baseUrl}/office-furnitures/office-chairs`,
				},
				{
					name: "Office Tables",
					sub_category: "office-furnitures",
					url: `${baseUrl}/office-furnitures/office-tables`,
				},
				{
					name: "Filing Cabinets",
					sub_category: "office-furnitures",
					url: `${baseUrl}/office-furnitures/filing-cabinets`,
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
			],
		},
		{ name: "About Us", url: "/learn-more" },
		{
			name: "Contact",
			url: "#contact-section",
		},
	];

	return (
		<div>
			<nav
				className={`fixed w-full text-white z-50 bg-none ${
					color && "bg-customPrimary/50 backdrop-blur-2xl"
				} duration-300`}
			>
				{/* <nav className="fixed w-full text-white z-[999]"> */}
				<div className="w-11/12 py-3 mx-auto flex justify-between">
					<Link
						href="/"
						className="flex items-center justify-center"
						onClick={() => {
							setToggle(false);
						}}
					>
						<Image src="/logo-white.png" alt="Logo" width={50} height={50} />
					</Link>
					<div className="flex items-center justify-center">
						{/* Mobile Menu */}
						<HiBars2
							className="lg:hidden md:hidden block cursor-pointer"
							size={32}
							onClick={() => {
								setToggle(!toggle);
							}}
						/>

						{/* Desktop Menu */}
						<ul className="lg:flex md:flex hidden gap-x-6 font-light">
							{data.map((item) => (
								<li key={item.name}>
									<Link
										href={item.url}
										className={`${
											path === item.url && "border-b-2"
										} hover:border-b-2 duration-75`}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>

			{/* Mobile Navmenu */}
			{/* Backdrop */}
			{toggle && (
				<div
					onClick={() => {
						setToggle(!toggle);
					}}
					className="fixed backdrop-blur-sm backdrop-brightness-50 w-full h-screen z-[60] cursor-pointer"
				></div>
			)}
			<motion.div
				initial={{ right: "-500px" }}
				animate={{ right: toggle ? "0px" : "-500px" }}
				transition={{ ease: "easeInOut" }}
				className={`fixed flex flex-col md:hidden bg-customPrimary/90 backdrop-blur-md text-white h-screen w-2/3 z-[1000]`}
			>
				<div className="p-3 mt-2 ml-2">
					<HiXMark
						className="cursor-pointer"
						size={32}
						onClick={() => {
							setToggle(false);
						}}
					/>
				</div>
				<div className="flex flex-col gap-1 mx-4">
					{/* Categories */}
					{data.map((item) => (
						<React.Fragment key={id + item.name}>
							<div className="flex flex-col gap-2 text-xl font-bold hover:bg-white/10 duration-300 rounded-sm">
								<div className="flex items-center text-end pl-2 pt-2 pb-2">
									{item.hasSub && (
										<span onClick={handleClick} className="cursor-pointer">
											{toggleProducts ? (
												<BsChevronUp size={25} />
											) : (
												<BsChevronDown size={25} />
											)}
										</span>
									)}
									<Link
										key={item.name}
										href={item.url}
										onClick={() => {
											setToggle(false);
										}}
										className={`w-full pr-4 ${
											item.url === path && "border-r-4 border-r-white/100"
										} border-r-4 border-r-white/10`}
									>
										{item.name}
									</Link>
								</div>
								{/* First Sub Category */}
								{item.hasSub && toggleProducts && (
									<div className="flex flex-col text-base text-end pl-4 ml-4 mb-2 pr-4 border-r-white/10 border-r">
										{item.sub_category.map((item2) => {
											return (
												<Link
													key={id + item2.name}
													href={item2.url}
													className={`${
														item2.url === path ? "text-white" : "text-white/50"
													} hover:text-white duration-200 font-normal
													${
														item2.sub_category === "office-furnitures" &&
														"pr-4 border-r border-r-white/10"
													}
													`}
													onClick={() => {
														setToggle(false);
													}}
												>
													{item2.name}
												</Link>
											);
										})}
									</div>
								)}
							</div>
						</React.Fragment>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Navbar;
