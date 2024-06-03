import { useEffect, useRef, useState } from "react";
import styles from "./progress.module.css";

const TOTAL = 5;

export const Progress = () => {
	const [index, setIndex] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.style.transition = "none";
			ref.current.style.transform = `scaleX(${index / TOTAL})`;

			setTimeout(() => {
				if (ref.current) {
					ref.current.style.transform = `scaleX(${(index + 1) / TOTAL})`;
					ref.current.style.transition = "transform 5s linear";
				}
			}, 0);

			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			if (index < TOTAL - 1) {
				timerRef.current = setTimeout(() => {
					setIndex(index + 1);
				}, 5000);
			}
		}
	}, [index]);

	return (
		<div>
			index{index}的内容
			<div className={styles.progress}>
				<div ref={ref} style={{ transform: `scaleX(${index / TOTAL})` }}></div>
			</div>
			<div onClick={() => setIndex((pre) => pre + 1)}>continue</div>
			<div onClick={() => setIndex(0)}>reset</div>
		</div>
	);
};
