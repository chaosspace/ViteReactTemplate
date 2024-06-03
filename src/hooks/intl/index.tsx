import { ReactNode, useContext } from "react";
import { Locale } from "./provider";
import { useLocation, Link } from "react-router-dom";

export { LangProvider } from "./provider";

export const useIntl = () => {
	const t = (path: string) => {
		return useContext(Locale).data[path];
	};

	return { t };
};

export const IntlLink = ({
	target,
	children
}: {
	target: string;
	children: ReactNode;
}) => {
	const prefix = useContext(Locale).locale;

	return <Link to={`/${prefix}${target}`}>{children}</Link>;
};

export const SwitchLang = ({
	lang,
	children
}: {
	lang: string;
	children: ReactNode;
}) => {
	const { pathname } = useLocation();

	return (
		<Link to={`/${lang}${pathname.replace(/^\/[a-zA-Z]{2}/, "")}`}>
			{children}
		</Link>
	);
};
