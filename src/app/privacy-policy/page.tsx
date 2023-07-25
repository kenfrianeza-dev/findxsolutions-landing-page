"use client";

import { FC } from "react";
import PolicyList from "./components/PolicyList";
import PolicyHeader from "./components/PolicyHeader";
import PolicyFooter from "./components/PolicyFooter";

interface PrivacyPolicyProps {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
	return (
		<div className="bg-customPrimary w-full min-h-screen pt-24 pb-10">
			<div className="w-11/12 mx-auto text-white flex flex-col gap-y-6">
				<h1 className="text-4xl text-center font-bold">Privacy Policy</h1>
				<div className="flex flex-col gap-y-4">
					<PolicyHeader />
					<PolicyList />
					<PolicyFooter />
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
