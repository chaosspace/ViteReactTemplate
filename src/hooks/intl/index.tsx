import { useContext } from "react";
import { Locale } from "./provider";

export { LangProvider } from "./provider";

export const useIntl = () => {
	const t = (path: string) => {
		return useContext(Locale).data[path];
	};

	return { t };
};
