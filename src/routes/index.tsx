import { Home, NotFound, Test, Intl } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
	{
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{ path: "/test", element: <Test /> },
			{ path: "/intl", element: <Intl /> }
		]
	}
];

const router = createBrowserRouter(routes);

export default router;
