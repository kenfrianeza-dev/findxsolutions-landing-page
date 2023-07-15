import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ButtonPrimaryProps {
	content: any;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ content }) => {
	return (
		<Button className="text-base bg-transparent hover:bg-white hover:text-customPrimary text-white border border-white">
			{content}
		</Button>
	);
};

export default ButtonPrimary;
