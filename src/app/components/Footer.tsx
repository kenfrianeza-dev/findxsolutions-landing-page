import Link from "next/link";
import { FC } from "react";
import { BsFacebook } from "react-icons/bs";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return (
		<>
			<footer className="flex flex-col justify-center items-center bg-customPrimary text-white">
				<div className="max-w-4xl w-11/12 md:flex md:justify-between sm:grid sm:grid-cols-1 gap-y-4 border-t border-white/25 md:px-6">
					<div className="flex flex-col gap-y-4 mt-4">
						<h1 className="text-xl">Navigations</h1>
						<div className="flex flex-col gap-y-1 text-white/75 font-extralight">
							<Link className="w-fit hover:text-white" href="/">
								Home
							</Link>
							<Link className="w-fit hover:text-white" href="#products-section">
								Products
							</Link>
							<Link className="w-fit hover:text-white" href="/learn-more">
								About Us
							</Link>
							<Link className="w-fit hover:text-white" href="#contact-section">
								Contact Us
							</Link>
							<Link className="w-fit hover:text-white" href="/privacy-policy">
								Privacy Policy
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-y-4 mt-4">
						<h1 className="text-xl">Contact Us</h1>
						<div className="flex flex-col gap-y-1 text-white/75 font-extralight">
							<p className="w-fit borde">
								(+63919) 349-1256 <br /> (+63927) 228-8793 <br />
								findxtrading@gmail.com
							</p>
							<br />
							<p>
								Unit 116 Ground Floor, <br /> The Manila Residences Tower I{" "}
								<br /> 2320 Taft Avenue, Malate Manila, <br /> Metro Manila
								Philippines
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-y-4 mt-4">
						<h1 className="text-xl">Social Media</h1>
						<div className="flex flex-col gap-y-1 text-white/75 font-extralight">
							<Link
								className="flex items-center justify-center gap-x-2 w-fit hover:text-white"
								href="https://www.facebook.com/profile.php?id=100082557270572"
							>
								<BsFacebook /> Facebook
							</Link>
							{/* <Link
								className="flex items-center justify-center gap-x-2 w-fit hover:text-white"
								href="/"
							>
								<BsFacebook /> Facebook
							</Link>
							<Link
								className="flex items-center justify-center gap-x-2 w-fit hover:text-white"
								href="/"
							>
								<BsFacebook /> Facebook
							</Link> */}
						</div>
					</div>
				</div>
				<Link
					href="/"
					className="w-11/12 text-white/50 hover:text-white md:text-center sm:text-start my-4"
				>
					Copyright &copy; 2023 FindX Solutions All Rights Reserved
				</Link>
			</footer>
		</>
	);
};

export default Footer;
