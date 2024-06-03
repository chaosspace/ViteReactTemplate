import { useIntl } from "@/hooks";

export const TestCom = () => {
	const { t } = useIntl();

	return (
		<div>
			TestCom
			<div>{t("greet")}</div>
		</div>
	);
};
