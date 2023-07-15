import Link from "next/link";
import { FC } from "react";

interface PolicyHeaderProps {}

const PolicyHeader: FC<PolicyHeaderProps> = () => {
	return (
		<>
			<p className="text-justify">
				<span className="font-bold">Last updated: 7-12-2023</span> <br /> This
				Privacy Policy governs the manner in which{" "}
				<span className="font-bold">FindX Solutions Philippines</span>{" "}
				(&quot;we&quot; or &quot;our&quot;) collects, uses, maintains, and
				discloses information collected from users (referred to as
				&quot;you&quot; or &quot;your&quot;) of the{" "}
				<Link href="/" className="font-semibold underline">
					findxsolutions.ph
				</Link>{" "}
				website (&quot;Website&quot;).
			</p>
		</>
	);
};

export default PolicyHeader;
