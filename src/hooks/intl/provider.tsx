import { ReactNode, createContext } from "react";
import zh from "@/lang/zh";
import en from "@/lang/en";

export const Locale = createContext<{
	locale: "zh" | "en";
	data: any;
}>({ locale: "zh", data: zh });

export const LangProvider = ({
	children,
	lang
}: {
	children: ReactNode;
	lang: "zh" | "en";
}) => {
	return (
		<Locale.Provider value={{ locale: lang, data: lang === "en" ? en : zh }}>
			{children}
		</Locale.Provider>
	);
};
