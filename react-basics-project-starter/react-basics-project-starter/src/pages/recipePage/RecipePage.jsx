import {
	Badge,
	Button,
	Center,
	Heading,
	HStack,
	Image,
	Stack,
	VStack,
} from "@chakra-ui/react";
import { IngredientList } from "./components/IngredientList";
import { NutrientsList } from "./components/NutrientsList";
import { LabelsList } from "./components/LabelsList";

const getAllLabels = (recipe) => {
	return {
		health: recipe.healthLabels,
		diet: recipe.dietLabels,
		cautions: recipe.cautions,
	};
};
export const RecipePage = ({ recipe, goBack }) => {
	const labels = getAllLabels(recipe);
	return (
		<Center flexDir='column' width='100%' bg='gray.100'>
			<Button onClick={goBack}>Go Back</Button>
			<Stack
				gap={8}
				padding={6}
				maxW='1280px'
				align='start'
				direction='row'
				flexWrap={["wrap", "wrap", "nowrap"]}
			>
				<Image
					src={recipe.image}
					fit='cover'
					w={["full", "full", "600px"]}
					h={["300px", "300px", "400px"]}
					rounded='2xl'
				/>

				<Stack paddingTop={8} gap={8} w='full'>
					<VStack align='start'>
						<HStack>
							{recipe.mealType?.map((type) => {
								return (
									<Badge colorScheme='blue' borderRadius='lg' key={type}>
										{type}
									</Badge>
								);
							})}
						</HStack>
						<Heading size='lg'>{recipe.label}</Heading>
						<HStack>
							<HStack>
								<strong>Preparation: </strong>
								<span>{recipe.totalTime} min.</span>
							</HStack>
							<HStack>
								<strong> Prepared: </strong>
								<span>{recipe.yield} x</span>
							</HStack>
						</HStack>
					</VStack>
					<LabelsList labels={labels} />
					<IngredientList ingredients={recipe.ingredientLines} />
					<NutrientsList nutrients={recipe.totalNutrients} />
				</Stack>
			</Stack>
		</Center>
	);
};
