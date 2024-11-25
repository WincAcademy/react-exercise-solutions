import React, { useContext } from "react";
import {
	Avatar,
	Button,
	Center,
	Heading,
	Image,
	Stack,
	Tag,
	Text,
} from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CategoriesUsersContext } from "../contexts/events";

export const loader = async ({ params }) => {
	const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
	return { event: await event.json() };
};

export const EventPage = () => {
	const { event } = useLoaderData();
	const navigate = useNavigate();
	const { categories, users } = useContext(CategoriesUsersContext);
	const user = users.find((user) => user.id === event.createdBy);

	const deleteEvent = async () => {
		const deleteOk = confirm("Are you sure you want to delete this event?");
		if (!deleteOk) {
			return;
		}

		const response = await fetch(`http://localhost:3000/events/${event.id}`, {
			method: "DELETE",
		});
		navigate(`/`);
		return response.ok;
	};

	return (
		<Center>
			<Stack padding={8} w='full'>
				<Image src={event.image} alt={event.title} fit='cover' h={300} />
				<Stack direction='row' padding={6}>
					<Stack w='full'>
						<Stack direction='row'>
							{event.categoryIds.map((categoryId) => {
								const category = categories.find(
									(category) => category.id === categoryId
								);
								return (
									<Tag key={category.id} colorScheme='blue'>
										{category.name}
									</Tag>
								);
							})}
						</Stack>

						<Heading>{event.title}</Heading>
						<Text colorScheme='gray'>{event.description}</Text>
						<Stack gap={0} pt={4}>
							<Text fontWeight='bold'>
								{format(event.startTime, "MMM dd, yyyy")}
							</Text>
							<Text>
								From {format(event.startTime, "kk:mm")} to{" "}
								{format(event.endTime, "kk:mm")}
							</Text>
						</Stack>

						<Stack direction='row' alignItems='center' mt={8}>
							<Avatar src={user.image} size='sm' />
							<Text>By {user.name}</Text>
						</Stack>
					</Stack>

					<Stack>
						<Button onClick={() => navigate(`edit`)}>Edit</Button>
					</Stack>
				</Stack>
				<Button
					onClick={deleteEvent}
					colorScheme='red'
					variant='outline'
					mt={8}
					mx={6}
				>
					Delete event
				</Button>
			</Stack>
		</Center>
	);
};
