import { FC } from "react";

import { data } from "../data";

interface PolicyListProps {}

const PolicyList: FC<PolicyListProps> = () => {
	return (
		<>
			<ol className="list-decimal text-justify">
				{data.map((items) => {
					return (
						<li className="ml-6" key={items.title}>
							<span className="font-bold">{items.title}</span>
							<br />
							{items.body}
							<ul className="my-4">
								{items.list?.map((item) => (
									<li className="flex flex-col" key={item}>
										&bull; {item}
									</li>
								))}
							</ul>
						</li>
					);
				})}
			</ol>
		</>
	);
};

export default PolicyList;
