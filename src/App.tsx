import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./hooks";
import {  useLayoutEffect } from "react";

function App() {
	useLayoutEffect(() => {
		window.addEventListener("hashchange", (event) => {
			console.log(event);
		})
	}, [])

	return (
		<>
			<Toaster />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
