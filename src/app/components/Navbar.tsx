"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { TbMenu } from "react-icons/tb";
// import { Link as SmoothLink } from "react-scroll";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const [color, setColor] = useState(false);
	const [toggle, setToggle] = useState(false);

	const changeColor = () => {
		window.scrollY >= 90 ? setColor(true) : setColor(false);
	};

	window.addEventListener("scroll", changeColor);

	// const toggleMobileMenu = () => {

	// };

	const data = [
		{ name: "Home", url: "/", offset: 0, id: "hero-section" },
		{
			name: "Products",
			url: "#products-section",
			offset: 0,
			id: "products-section",
		},
		{ name: "About Us", url: "/learn-more", offset: -125, id: "about-us" },
		{
			name: "Contact",
			url: "#contact-section",
			offset: -85,
			id: "contact-section",
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
						// to="hero-section"
						// spy={true}
						// smooth={true}
						// duration={500}
						className="flex items-center justify-center"
					>
						<Image src="/logo2.png" alt="Logo" width={50} height={50} />
					</Link>
					<div className="flex items-center justify-center">
						{/* Mobile Menu */}
						<TbMenu
							className="lg:hidden md:hidden block cursor-pointer"
							size={32}
							onClick={}
						/>
						{/* Desktop Menu */}
						<ul className="lg:flex md:flex hidden gap-x-6 font-light">
							{data.map((item) => (
								<li key={item.name}>
									<Link
										href={item.url}
										// to={item.id}
										// spy={true}
										// smooth={true}
										// offset={item.offset}
										// duration={500}
									>
										{item.name}
									</Link>
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
