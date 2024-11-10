import {
	Image,
	Card,
	CardBody,
	Stack,
	Heading,
	Badge,
	Wrap,
} from "@chakra-ui/react";

export const RecipeListItem = ({ recipe, handleSelect }) => {
	return (
		<Card
			borderRadius='lg'
			overflow='hidden'
			bg='white'
			onClick={() => handleSelect(recipe)}
		>
			<CardBody padding={0}>
				<Image src={recipe.image} objectFit='cover' height={200} width='full' />
				<Stack
					padding={4}
					align='start'
					gap={4}
					justifyContent='space-between'
					alignItems='space-between'
				>
					<div>
						<span>{recipe.dishType}</span>
						<Heading size='md'>{recipe.label}</Heading>
					</div>
					<Wrap>
						{recipe.mealType?.map((type) => {
							return (
								<Badge colorScheme='blue' borderRadius='lg' key={type}>
									{type}
								</Badge>
							);
						})}
						{recipe.healthLabels
							.filter((label) => ["Vegan", "Vegetarian"].includes(label))
							.map((label) => {
								return (
									<Badge colorScheme='green' key={label}>
										{label}
									</Badge>
								);
							})}
						{recipe.dietLabels?.map((label) => {
							return (
								<Badge colorScheme='purple' borderRadius='lg' key={label}>
									{label}
								</Badge>
							);
						})}
						{recipe.cautions?.map((caution) => {
							return (
								<Badge colorScheme='red' borderRadius='lg' key={caution}>
									{caution}
								</Badge>
							);
						})}
					</Wrap>
				</Stack>
			</CardBody>
		</Card>
	);
};
