import Image from "next/image";
import background from "../../../public/background.jpg";
import ButtonPrimary from "./ui/button";

const HeroSection = () => {
	return (
		<section>
			<Image
				className="absolute object-cover bg-center bg-cover bg-no-repeat"
				src={background}
				alt="background"
				placeholder="blur"
				fill
			/>
			<div className="relative bg-customPrimary/60 bg-gradient-to-b from-transparent via-transparent to-customPrimary text-white">
				<div className="w-5/6 mx-auto py-24 h-screen">
					<div className="flex flex-col justify-center gap-y-6 h-full">
						<div className="flex flex-col gap-y-1">
							<h1 className="font-sans font-semibold text-5xl">Welcome to</h1>
							<h1 className="font-sans font-semibold text-5xl">
								Find<span className="text-customSecondary">X</span> Solutions
							</h1>
						</div>
						<div className="text-xl">
							<p>The Philippines’ No.1 Go-To Company</p>
							<p>For Office Equipments & Corporate Giveaways </p>
						</div>
						{/* Button */}
						<div className="inline-block">
							<ButtonPrimary content="Get Started" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
