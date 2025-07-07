import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { EventPage, loader as EventLoader } from "./pages/EventPage";
import { EventsPage, loader as EventsLoader } from "./pages/EventsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, loader as CategoriesUsersLoader } from "./components/Root";
import { EventForm } from "./pages/EventForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: CategoriesUsersLoader,
		children: [
			{
				path: "/",
				element: <EventsPage />,
				loader: EventsLoader,
			},
			{
				path: "/event/:eventId",
				element: <EventPage />,
				loader: EventLoader,
			},
			{
				path: "/event/create",
				element: <EventForm />,
			},
			{
				path: "/event/:eventId/edit",
				element: <EventForm />,
				loader: EventLoader,
			},
		],
	},
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
