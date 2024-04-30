import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components";

function App() {
	return (
		<ErrorBoundary>
			App
			<RouterProvider router={router} />
		</ErrorBoundary>
	);
}

export default App;
