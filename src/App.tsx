import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Toaster, useToast } from "./hooks";

function App() {
	const { toast } = useToast();

	return (
		<>
			<Toaster />
			<div
				onClick={() => {
					toast({ type: "error", msg: "请求出错了，待会再试试吧" });
				}}
			>
				App
			</div>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
