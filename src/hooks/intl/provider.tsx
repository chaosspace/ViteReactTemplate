import { ReactNode, createContext, useState } from "react";
import { useParams } from "react-router";
import defaultLang from "@/lang/zh";

export const locales = ["zh", "en"] as const;
export type Locales = (typeof locales)[number];
export const defaultL: Locales = "zh";

export let localConfig: Locales = defaultL;

export const Locale = createContext<{
	locale: Locales;
	data: any;
}>({ locale: "zh", data: defaultLang });

export const LangProvider = ({
	children
	// lang
}: {
	children: ReactNode;
	lang: "zh" | "en";
}) => {
	const { lang } = useParams<any>();
	// if (!lang) {
	// 	navigate(`/${localConfig}${pathname}`);
	// 	return;
	// }

	const [localeData, updateLocaleData] = useState(defaultLang);
	let langg = defaultLang;

	if (localConfig !== lang) {
		import(`../../lang/${lang}.ts`).then((res) => {
			langg = res.default;
			localConfig = lang as Locales;
			updateLocaleData(langg);
		});
	}

	return (
		<Locale.Provider value={{ locale: lang as "zh" | "en", data: localeData }}>
			{children}
		</Locale.Provider>
	);
};
