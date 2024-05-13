import { useScrollProgress } from "@/hooks";
import { useRef } from "react";

export const Test = () => {
	const ref = useRef<HTMLDivElement>(null);
	const progress = useScrollProgress(ref);

	return (
		<div>
			Test
			<div ref={ref} style={{ height: "100px", overflow: "auto" }}>
				<div style={{ height: "200px", backgroundColor: "azure" }}>
					sjdfljaslk
				</div>
			</div>
			{progress}
		</div>
	);
};
