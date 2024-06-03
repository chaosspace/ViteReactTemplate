import { useEffect, useLayoutEffect } from "react";

export const TestComp = ({ id = "" }: { id?: string }) => {
	useLayoutEffect(() => {
		console.log(`test comp${id} layout mount`);

		return () => {
			console.log(`test comp${id} layout unmount`);
		};
	}, []);

	console.log("test", id);

	useEffect(() => {
		console.log(`test comp${id} mount`);

		return () => {
			console.log(`test comp${id} unmount`);
		};
	}, []);

	return <div>TestComp</div>;
};

export default TestComp;
