import { useLongPress, useScrolledIndex, useScrollProgress } from "@/hooks";
import { useMemo, useRef, useState } from "react";
import { TestComp } from "@/components/TestComp";
import { NestComp } from "@/components/NestComp";
import { Link } from "react-router-dom";
import styles from "./Test.module.css";

const data = [
	"pink",
	"red",
	"orange",
	"yellow",
	"greenyellow",
	"aqua",
	"black"
];

export const Test = () => {
	const pressRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const progress = useScrollProgress(scrollRef, { direction: "x" });
	const [isPressed] = useLongPress(pressRef);
	const [index] = useScrolledIndex(scrollRef);
	const [isOpen, setIsOpen] = useState(false);

	const [active, setActive] = useState(0);
	const transformedData = useMemo(() => [...data, ...data.slice(0, 3)], [data]);
	const renderData = useMemo(
		() =>
			transformedData.slice(active % data.length, (active % data.length) + 4),
		[active]
	);

	const prevIndex = useMemo(
		() => (active - 1 + renderData.length) % renderData.length,
		[active]
	);

	console.log(transformedData[prevIndex]);
	console.log(transformedData[active]);

	return (
		<div>
			<Link to="/">to home</Link>
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
			<div className={styles.slideList}>
				{/* <div
					className={styles.default}
					style={{ zIndex: 99, backgroundColor: "white" }}
				></div> */}
				{renderData.map((item, index) => {
					const len = data.length;
					return (
						<div
							key={item}
							className={styles.default}
							style={{
								backgroundColor: item,
								zIndex: renderData.length - 1 !== index ? len - index : 0
							}}
							onClick={() => setActive(active + 1)}
						></div>
					);
				})}
			</div>
		</div>
	);
};
