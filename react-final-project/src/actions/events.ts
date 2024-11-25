const editEvent = async (data) => {
	const response = await fetch(`http://localhost:3000/events/${event.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (response.ok) {
		console.log("Event updated");
	} else {
		console.error("Error updating event");
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
