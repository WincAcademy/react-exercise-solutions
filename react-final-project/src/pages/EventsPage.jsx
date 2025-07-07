import React, { useContext, useState } from "react";
import {
	Button,
	Center,
	Checkbox,
	CheckboxGroup,
	Heading,
	Input,
	SimpleGrid,
	Stack,
} from "@chakra-ui/react";
import { EventItem } from "../components/EventItem";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { CategoriesUsersContext } from "../contexts/events";

export const loader = async () => {
	const events = await fetch("http://localhost:3000/events");

	return { events: await events.json() };
};
export const EventsPage = () => {
	const { events } = useLoaderData();
	const { categories } = useContext(CategoriesUsersContext);
	const [search, setSearch] = useState("");
	const [filters, setFilters] = useState([]);
	const navigate = useNavigate();

	const toggleFilter = (category) => {
		if (filters.includes(category)) {
			setFilters(filters.filter((c) => c !== category));
		} else {
			setFilters([...filters, category]);
		}
	};

	const filteredEvents = events.filter((event) => {
		const isInCategory =
			filters.some((category) => event.categoryIds.includes(category.id)) ||
			filters.length === 0;
		return event.title.includes(search) && isInCategory;
	});

	return (
		<Center>
			<Stack w='full' padding={8} gap={4}>
				<Stack direction='row' justifyContent='space-between'>
					<Heading>List of events</Heading>
					<Button onClick={() => navigate("event/create")}>Add event</Button>
				</Stack>
				<CheckboxGroup>
					<Stack direction='row'>
						{categories.map((category) => (
							<Checkbox
								key={category.id}
								checked={filters.includes(category)}
								onChange={() => toggleFilter(category)}
							>
								{category.name}
							</Checkbox>
						))}
					</Stack>
				</CheckboxGroup>
				<Input
					placeholder='Search'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				<SimpleGrid columns={[1, 2, 3, 3, 4]} maxW={"1280px"} gap={8}>
					{filteredEvents.map((event) => (
						<Link key={event.id} to={`/event/${event.id}`}>
							<EventItem key={event.id} event={event} categories={categories} />
						</Link>
					))}
				</SimpleGrid>
			</Stack>
		</Center>
	);
};
