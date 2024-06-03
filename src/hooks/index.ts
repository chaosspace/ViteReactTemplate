export * from "./toast";
export * from "./intl";
import {
	MutableRefObject,
	RefObject,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from "react";

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

interface UseScrollProgressOptions {
	direction: "x" | "y";
}
export const useScrollProgress = <T extends HTMLElement>(
	target: MutableRefObject<T | null | undefined>,
	options: UseScrollProgressOptions = { direction: "y" }
) => {
	const { direction } = options;
	const [progress, setProgress] = useState(0);

	const handler = () => {
		const domElement = target?.current ?? document.body;

		if (direction === "x") {
			const offset = domElement.scrollWidth - domElement.clientWidth;
			setProgress(+(domElement.scrollLeft / offset).toFixed(2));
		} else {
			const offset = domElement.scrollHeight - domElement.clientHeight;
			setProgress(+(domElement.scrollTop / offset).toFixed(2));
		}
	};

	useEventListener("scroll", handler, target);

	return progress;
};

export const useScrolledIndex = <T extends HTMLElement>(
	target: RefObject<T | null | undefined>
) => {
	const clientWidth = useMemo(
		() => target.current?.firstElementChild?.clientWidth ?? Infinity,
		[target.current]
	);
	const [index, setIndex] = useState(0);

	const handler = () => {
		if (target.current) {
			setIndex(Math.round(target.current.scrollLeft / clientWidth));
		}
	};
	useEventListener("scrollend", handler, target);

	return [index];
};

export const useLongPress = <T extends HTMLElement>(
	target: MutableRefObject<T | null | undefined>,
	delay: number = 1000
) => {
	const [isPressed, setIsPressed] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	const handler = () => {
		timeoutRef.current = setTimeout(() => {
			setIsPressed(true);
		}, delay);
	};

	const upHandler = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			setIsPressed(false);
		}
	};

	useEventListener("mousedown", handler, target);

	useEventListener("mouseout", upHandler, target);
	useEventListener("mouseup", upHandler, target);

	return [isPressed];
};

interface SSEConnectOptions {
	onMessage: (evt: Event) => void;
	onError?: (evt: Event) => void;
	onOpen?: (evt: Event) => void;
}

export const useSSEConnect = (url: string, options: SSEConnectOptions) => {
	const isMounted = useRef(false);
	const sseRef = useRef<EventSource>();

	useEffect(() => {
		isMounted.current = true;
		if (isMounted.current) {
			const { onError = null, onOpen = null, onMessage } = options;
			sseRef.current = new EventSource(url);
			sseRef.current.onmessage = onMessage;
			sseRef.current.onerror = onError;
			sseRef.current.onopen = onOpen;
		}

		return () => {
			sseRef.current?.close();
			isMounted.current = false;
		};
	}, [url, options]);

	const closeConnection = useCallback(() => {
		if (isMounted.current) {
			sseRef.current?.close();
		}
	}, []);

	return [closeConnection];
};
