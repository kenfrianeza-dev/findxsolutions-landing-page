"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { TbMenu } from "react-icons/tb";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const [color, setColor] = useState(false);

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
					<Link href="/" className="flex items-center justify-center">
						<Image src="/logo2.png" alt="Logo" width={50} height={50} />
					</Link>
					<div className="flex items-center justify-center">
						{/* Mobile Menu */}
						<TbMenu
							className="lg:hidden md:hidden block cursor-pointer"
							size={32}
							// onClick={}
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
		</>
	);
};

export default Navbar;
