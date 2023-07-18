import { FC } from "react";
import Carousel from "react-multi-carousel";
import { GoDot, GoDotFill } from "react-icons/go";
import product1 from "../../../public/laptop.jpg";
import product2 from "../../../public/tv.jpg";
import product3 from "../../../public/garments.jpg";
import product4 from "../../../public/poster.jpg";
import product5 from "../../../public/trophy.jpg";
import product6 from "../../../public/brochure.jpg";
import product7 from "../../../public/umbrella.jpg";

import Image from "next/image";

interface CustomCarouselProps {}
interface CustomDotProps {
	onClick: Function;
	active: boolean;
}

const CustomDot: FC<CustomDotProps> = ({ onClick, ...rest }) => {
	const {
		active,
		// carouselState: { currentSlide, deviceType },
	} = rest;

	// onMove means if dragging or swiping in progress.
	// active is provided by this lib for checking if the item is active or not.
	return (
		<button onClick={() => onClick()}>
			{active ? <GoDotFill /> : <GoDot />}
		</button>
	);
};

const onClick: FC<CustomDotProps> = () => {
	return 0;
};

const CustomCarousel: FC<CustomCarouselProps> = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 1,
		},
	};

	const data = [
		{ source: product1, name: "Office Equipments" },
		{ source: product2, name: "Appliances" },
		{ source: product3, name: "Garments" },
		{ source: product4, name: "Advertising Goods" },
		{ source: product5, name: "Awards & Citations" },
		{ source: product6, name: "Collaterals" },
		{ source: product7, name: "Corporate Giveaways" },
	];

	return (
		<>
			<Carousel
				className="py-8 z-40"
				responsive={responsive}
				showDots
				autoPlay
				infinite
				partialVisible
				customDot={<CustomDot onClick={onClick} active={false} />}
			>
				{data.map((item) => {
					return (
						<div key={item.name} className="text-center cursor-pointer">
							<Image
								className="relative aspect-square object-cover bg-customPrimary opacity-75 hover:opacity-100 duration-300"
								src={item.source}
								alt={item.name}
								placeholder="blur"
							/>
							<h1 className="absolute w-full bottom-0 left-0 text-center p-4 bg-customPrimary/50 backdrop-brightness-50 backdrop-blur-lg">
								{item.name}
							</h1>
						</div>
					);
				})}
			</Carousel>
		</>
	);
};

export default CustomCarousel;
