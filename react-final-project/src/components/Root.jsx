import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";
import { CategoriesUsersContext } from "../contexts/events";
export const loader = async () => {
	const categories = await fetch("http://localhost:3000/categories");
	const users = await fetch("http://localhost:3000/users");
	return { users: await users.json(), categories: await categories.json() };
};

export const Root = () => {
	const { users, categories } = useLoaderData();
	return (
		<Box>
			<Navigation />
			<CategoriesUsersContext.Provider value={{ categories, users }}>
				<Outlet />
			</CategoriesUsersContext.Provider>
		</Box>
	);
};
