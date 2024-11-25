import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Tag,
	Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const EventItem = ({ event, categories }) => {
	const { title, description, image, startTime, endTime, categoryIds } = event;
	const navigate = useNavigate();

	return (
		<Card direction='column' overflow='hidden' variant='outline'>
			<Image objectFit='cover' w='full' h='200px' src={image} alt={title} />
			<Stack>
				<CardBody>
					<Stack gap={4}>
						<Stack direction='row' gap={2}>
							{categoryIds.map((categoryId) => {
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
						<Stack>
							<Heading size='md'>{title}</Heading>
							<Text>{description}</Text>
						</Stack>
						<Stack gap={0}>
							<Text fontWeight='bold'>{format(startTime, "MMM dd, yyyy")}</Text>
							<Text>
								{format(startTime, "kk:mm")} till {format(endTime, "kk:mm")}
							</Text>
						</Stack>
					</Stack>
				</CardBody>

				<CardFooter>
					<Button
						variant='solid'
						colorScheme='blue'
						onClick={() => navigate(`/event/${event.id}`)}
					>
						More details
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
};
