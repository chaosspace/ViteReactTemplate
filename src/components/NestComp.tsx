import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

export const NestComp = ({ children }: { children: ReactNode }) => {
	const [num, setNum] = useState(0);

	useLayoutEffect(() => {
		console.log("nest comp layout mount");
		setNum(3);

		return () => {
			console.log("nest comp layout unmount");
		};
	}, []);

	console.log("nest");

	useEffect(() => {
		console.log("nest comp mount");
		setNum(1);

		return () => {
			console.log("nest comp unmount");
		};
	}, []);

	useEffect(() => {
		console.log(num);
	}, [num]);

	return (
		<div>
			NestComp
			<div>{children}</div>
		</div>
	);
};
