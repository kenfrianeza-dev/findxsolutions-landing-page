"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TbMenu } from "react-icons/tb";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const data = [
		{ name: "Home", url: "/", icon: "" },
		{ name: "About Us", url: "/about", icon: "" },
		{ name: "Contact", url: "/contact", icon: "" },
	];
	return (
		<>
			<nav className="fixed w-full text-white z-50">
				<div className="w-5/6 py-2 mx-auto flex justify-between">
					<Link href="/">
						<Image src="/logo.png" alt="Logo" width={64} height={64} />
					</Link>
					<div className="flex items-center justify-center">
						{/* Mobile Menu */}
						<TbMenu className="lg:hidden md:hidden block" size={32} />
						{/* Desktop Menu */}
						<ul className="lg:flex md:flex hidden gap-x-4">
							{data.map((item) => (
								<li key={item.name}>
									<Link className="" href={item.url}>
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
