import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Toaster, toast } from "./hooks";

function App() {
	return (
		<>
			<Toaster />
			<div>App</div>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
