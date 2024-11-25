import {
	Button,
	Center,
	Checkbox,
	Heading,
	Input,
	Stack,
	Text,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { CategoriesUsersContext } from "../contexts/events";

export const EventForm = () => {
	const loaderData = useLoaderData();
	const event = loaderData?.event;
	console.log({ loaderData });
	const isEdit = event ? true : false;
	const navigate = useNavigate();
	const toast = useToast();

	const [title, setTitle] = useState(isEdit ? event.title : "");
	const [description, setDescription] = useState(
		isEdit ? event.description : ""
	);
	const [location, setLocation] = useState(isEdit ? event.location : "");
	const [startTime, setStartTime] = useState(
		isEdit ? new Date(event.startTime) : new Date()
	);
	const [endTime, setEndTime] = useState(
		isEdit ? new Date(event.endTime) : new Date()
	);
	const [image, setImage] = useState(isEdit ? event.image : "");
	const [categoryIds, setCategoryIds] = useState(
		isEdit ? event.categoryIds : []
	);
	const [createdBy] = useState(isEdit ? event.createdBy : 1);

	const { categories } = useContext(CategoriesUsersContext);

	const editEvent = async (data) => {
		const response = await fetch(`http://localhost:3000/events/${event.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (response.ok) {
			toast({
				title: "Event edited",
				status: "success",
			});
		} else {
			toast({
				title: "Failed to edit event",
				status: "error",
			});
		}
		navigate(`/event/${event.id}`);
	};

	const addEvent = async (data) => {
		const response = await fetch("http://localhost:3000/events", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		console.log({ response });
		if (response.ok) {
			console.log("Event created");
		} else {
			console.error("Error creating event");
		}
		navigate("/");
	};

	const handleChange = (e, field) => {
		const value = e.target.value;
		switch (field) {
			case "title":
				setTitle(value);
				break;
			case "description":
				setDescription(value);
				break;
			case "location":
				setLocation(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			title,
			description,
			location,
			startTime,
			endTime,
			image,
			categoryIds,
			createdBy,
		};
		isEdit ? editEvent(data) : addEvent(data);
		setTitle("");
		setDescription("");
		setLocation("");
		setStartTime("");
		setEndTime("");
		setImage("");
		setCategoryIds([]);
	};
	const handleToggleCategory = (category) => {
		if (categoryIds.includes(category.id)) {
			setCategoryIds(categoryIds.filter((id) => id !== category.id));
		} else {
			setCategoryIds([...categoryIds, category.id]);
		}
	};

	return (
		<Center>
			<Stack w='full' padding={6} direction='column'>
				<Heading>{isEdit ? "Edit event" : "Create event"}</Heading>
				<form onSubmit={handleSubmit} style={{ width: "full" }}>
					<Stack gap={4}>
						<Input
							placeholder='Title'
							value={title}
							onChange={(e) => handleChange(e, "title")}
						/>
						<Textarea
							placeholder='Description'
							value={description}
							onChange={(e) => handleChange(e, "description")}
						/>
						<Input
							placeholder='Location'
							value={location}
							onChange={(e) => handleChange(e, "location")}
						/>
						<Input
							placeholder='Image url'
							value={image}
							onChange={(e) => handleChange(e, "image")}
						/>
						<DateTimePicker onChange={setStartTime} value={startTime} />
						<DateTimePicker onChange={setEndTime} value={endTime} />
						<Stack direction='row'>
							<Text>Categories:</Text>
							{categories.map((category) => {
								return (
									<Checkbox
										key={category.id}
										value={categoryIds.includes(category.id)}
										onChange={() => handleToggleCategory(category)}
									>
										{category.name}
									</Checkbox>
								);
							})}
						</Stack>
						<Button type='submit'>Submit</Button>
						<Button type='button' variant='ghost' onClick={() => navigate(-1)}>
							Cancel
						</Button>
					</Stack>
				</form>
			</Stack>
		</Center>
	);
};
