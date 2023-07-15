import { FC } from "react";

interface PolicyFooterProps {}

const PolicyFooter: FC<PolicyFooterProps> = () => {
	return (
		<>
			<div>
				<span className="text-left">
					If you have questions or comments about this notice, you may email us
					at
				</span>{" "}
				<span className="underline font-semibold">findxtrading@gmail.com</span>{" "}
				or contact us by post at:
			</div>
			<div>
				<span className="font-bold">FindX Solutions Philippines</span>
				<br />
				<div className="flex flex-col">
					<span>Unit 116 Ground Floor The Manila Residences Tower I 2320 </span>
					<span>Taft Avenue</span>
					<span>Malate Manila, </span>
					<span>Metro Manila 1004</span>
					<span>Philippines</span>
				</div>
			</div>
		</>
	);
};

export default PolicyFooter;
