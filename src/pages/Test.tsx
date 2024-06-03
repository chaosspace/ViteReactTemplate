import { useLongPress, useSSEConnect, useScrollProgress } from "@/hooks";
import { useRef } from "react";

export const Test = () => {
	const ref = useRef<HTMLDivElement>(null);
	const pressRef = useRef<HTMLDivElement>(null);
	const progress = useScrollProgress(ref);
	const [isPressed] = useLongPress(pressRef);

	const [close] = useSSEConnect("http://localhost:5001/ssetest/connect", {
		onMessage(evt) {
			console.log(evt);
		}
	});

	return (
		<div>
			Test
			<div ref={ref} style={{ height: "100px", overflow: "auto" }}>
				<div style={{ height: "200px", backgroundColor: "azure" }}>
					sjdfljaslk
				</div>
			</div>
			{progress}
			<div ref={pressRef}>press: {isPressed && "true"}</div>
			<div onClick={close}>close connect to localhost:5001</div>
		</div>
	);
};
