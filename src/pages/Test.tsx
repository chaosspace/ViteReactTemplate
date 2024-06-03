import { useLongPress, useScrolledIndex, useScrollProgress } from "@/hooks";
import { useRef, useState } from "react";
import { TestComp } from "@/components/TestComp";
import { NestComp } from "@/components/NestComp";

export const Test = () => {
	const pressRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const progress = useScrollProgress(scrollRef, { direction: "x" });
	const [isPressed] = useLongPress(pressRef);
	const [index] = useScrolledIndex(scrollRef);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div onClick={() => setIsOpen((pre) => !pre)}>open</div>
			{isOpen && (
				<>
					<NestComp>
						<TestComp id="1"></TestComp>
					</NestComp>
					<TestComp id="2"></TestComp>
				</>
			)}
			{progress}
			<div ref={pressRef}>press: {isPressed && "true"}</div>
			<div>{index}</div>
			<div
				className="noScrollbar"
				ref={scrollRef}
				style={{
					display: "flex",
					gap: "20px",
					width: 500,
					overflowX: "scroll",
					scrollSnapType: "x mandatory"
				}}
			>
				<div
					style={{
						width: 500,
						height: "500px",
						backgroundColor: "aqua",
						scrollSnapAlign: "center",
						scrollSnapStop: "always",
						flexShrink: 0
					}}
				></div>
				<div
					style={{
						width: "500px",
						height: "500px",
						backgroundColor: "aqua",
						scrollSnapAlign: "center",
						flexShrink: 0
					}}
				></div>
				<div
					style={{
						width: "500px",
						height: "500px",
						backgroundColor: "aqua",
						scrollSnapAlign: "center",
						flexShrink: 0
					}}
				></div>
				<div
					style={{
						width: "500px",
						height: "500px",
						backgroundColor: "aqua",
						scrollSnapAlign: "center",
						scrollSnapStop: "always",
						flexShrink: 0
					}}
				></div>
			</div>
		</div>
	);
};
