"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const [color, setColor] = useState(false);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const changeColor = () => {
			window.scrollY >= 90 ? setColor(true) : setColor(false);
		};
		window.addEventListener("scroll", changeColor);
	}, []);

	const data = [
		{ name: "Home", url: "/" },
		{
			name: "Products",
			url: "#products-section",
		},
		{ name: "About Us", url: "/learn-more" },
		{
			name: "Contact",
			url: "#contact-section",
		},
	];

	return (
		<>
			<nav
				className={`fixed w-full text-white z-50 bg-none ${
					color && "bg-customPrimary/50 backdrop-blur-2xl"
				} duration-300`}
			>
				{/* <nav className="fixed w-full text-white z-[999]"> */}
				<div className="w-5/6 py-3 mx-auto flex justify-between">
					<Link
						href="/"
						className="flex items-center justify-center"
						onClick={() => {
							setToggle(false);
						}}
					>
						<Image src="/logo2.png" alt="Logo" width={50} height={50} />
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
									<Link href={item.url}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>

			{/* Mobile Navmenu */}

			<motion.div
				initial={{ right: "-500px" }}
				animate={{ right: toggle ? "0px" : "-500px" }}
				transition={{ ease: "easeInOut" }}
				className={`fixed flex flex-col md:hidden border-l border-l-white/10 bg-customPrimary/90 backdrop-blur-md text-white h-screen w-2/3 z-[1000]`}
			>
				<div className="p-3 mt-2">
					<HiXMark
						size={32}
						onClick={() => {
							setToggle(false);
						}}
					/>
				</div>
				<div className="flex flex-col gap-4 mx-4">
					{data.map((item) => (
						<Link
							key={item.name}
							className="text-1xl px-4 py-3 text-right hover:bg-white/10 duration-300 rounded-sm border border-white/10"
							href={item.url}
							onClick={() => {
								setToggle(false);
							}}
						>
							{item.name}
						</Link>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default Navbar;
