import { Home, NotFound, Test, Intl, Progress } from "@/pages";
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
			{ path: "/intl", element: <Intl /> },
			{ path: "/:lang/intl", element: <Intl /> },
			{
				path: "/progress",
				element: <Progress />
			}
		]
	}
];

const router = createBrowserRouter(routes);

export default router;
