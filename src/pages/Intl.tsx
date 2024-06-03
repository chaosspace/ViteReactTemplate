import { TestCom } from "@/components";
import { LangProvider } from "@/hooks";
import { useState } from "react";

export const Intl = () => {
	const [lang, setLang] = useState<"zh" | "en">("zh");

	return (
		<LangProvider lang={lang}>
			<div style={{ display: "flex", gap: "20px" }}>
				<span onClick={() => setLang("zh")}>zh</span>
				<span onClick={() => setLang("en")}>en</span>
			</div>
			<TestCom />
		</LangProvider>
	);
};
