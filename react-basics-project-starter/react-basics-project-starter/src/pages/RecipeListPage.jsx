import { Center, Flex, Heading, SimpleGrid, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeListItem } from "./RecipeListItem";
import { useState } from "react";

export const RecipeListPage = ({ handleSelectRecipe }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const filteredRecipes = data.hits.filter(
		({ recipe }) =>
			recipe.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
			recipe.healthLabels.some((label) =>
				label.toLowerCase().includes(searchQuery.toLowerCase())
			)
	);
	return (
		<Center
			flexDir='column'
			width='100%'
			bg='gray.100'
			h='calc(100vh)'
			justifyContent='start'
		>
			<Flex direction='column' alignItems='center' gap={8} padding={6}>
				<Heading>Your Recipe App</Heading>
				<Input
					placeholder='Search for recipe...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					style={{ backgroundColor: "white" }}
					maxW={800}
				/>
				<SimpleGrid columns={[1, 2, 4, 5]} maxW={"1280px"} gap={8}>
					{filteredRecipes.map(({ recipe }) => {
						return (
							<RecipeListItem
								key={recipe.label}
								recipe={recipe}
								handleSelect={handleSelectRecipe}
							/>
						);
					})}
				</SimpleGrid>
			</Flex>
		</Center>
	);
};
