import { Heading, Stack } from "@chakra-ui/react";

export const IngredientList = ({ ingredients }) => {
	return (
		<Stack>
			<Heading size='md'>Ingredients</Heading>
			<ul>
				{ingredients.map((ingredient) => {
					return (
						<li style={listStyle} key={ingredient}>
							{ingredient}
						</li>
					);
				})}
			</ul>
		</Stack>
	);
};

const listStyle = {
	listStyle: "none",
};
