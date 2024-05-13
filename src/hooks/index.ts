export * from "./toast";
import { MutableRefObject, useEffect, useState } from "react";

type BasicTarget<T> = T | null | undefined;
type Target =
	| BasicTarget<HTMLElement | Window>
	| MutableRefObject<BasicTarget<HTMLElement | Window>>;

const useEventListener = (
	eventName: keyof HTMLElementEventMap,
	handler: (evt: Event) => void,
	target: Target
) => {
	useEffect(() => {
		if (!target || !("current" in target)) return;

		const domElement = target.current;
		if (domElement) {
			domElement.addEventListener(eventName, handler);
		}

		return () => {
			if (domElement) {
				domElement.removeEventListener(eventName, handler);
			}
		};
	}, [eventName, handler, target]);
};

export const useScrollProgress = <T extends HTMLElement>(
	target?: MutableRefObject<T | null | undefined>
) => {
	const [progress, setProgress] = useState(0);

	const handler = () => {
		const domElement = target?.current ?? document.body;
		const offset = domElement.scrollHeight - domElement.clientHeight;
		setProgress(domElement.scrollTop / offset);
	};

	useEventListener("scroll", handler, target);

	return progress;
};
