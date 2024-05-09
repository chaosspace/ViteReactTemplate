import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./request";

export const cn = (...args: ClassValue[]): string => {
	return twMerge(clsx(args));
};
