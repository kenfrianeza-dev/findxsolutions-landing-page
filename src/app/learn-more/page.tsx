import { FC } from "react";
import Image from "next/image";
import background from "../../../public/background.jpg";

interface LearnMoreProps {}

const LearnMore: FC<LearnMoreProps> = () => {
	return (
		<>
			<section>
				<Image
					className="absolute object-cover bg-center bg-cover bg-no-repeat"
					src={background}
					alt="background"
					placeholder="blur"
					fill
				/>
				<div className="relative flex w-full min-h-screen bg-customPrimary/60 bg-gradient-to-b from-transparent via-transparent to-customPrimary text-white">
					<div className="m-20 w-3/4 mx-auto text-white flex flex-col justify-center items-center gap-y-6">
						<h1 className="text-4xl text-center font-bold">About Us</h1>
						<p>
							A NEW PLAYER IN THE INDUSTRY, FindX Solutions Philippines is
							anchored in providing you with everything you need for a
							reasonable price while maintaining first-class customer service at
							the same time. If in Algebra, we solve for X, in this case, we
							will solve the X for you! From A to Z, everything you need, just
							call or email us and we will deliver them right at your doorstep.
						</p>

						<p>
							We also offer flexible payment arrangements* to meet our client’s
							requirement and make their FindX experience better and create more
							positive rapport between us and our beloved customers. Be one of
							our first clients! Have us as your supplier and we will make you
							feel the FindX’s great customer service like you’ve never
							experienced before!
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default LearnMore;
