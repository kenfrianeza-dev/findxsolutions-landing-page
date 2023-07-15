import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ButtonPrimaryProps {
	content: any;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ content }) => {
	return (
		<Button className="bg-white hover:bg-gray-200 text-customPrimary">
			{content}
		</Button>
	);
};

export default ButtonPrimary;
