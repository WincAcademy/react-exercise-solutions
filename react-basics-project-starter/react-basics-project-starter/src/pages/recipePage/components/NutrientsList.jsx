import { Heading, Stack, Wrap } from "@chakra-ui/react";

export const NutrientsList = ({ nutrients }) => {
	const nutrientKeys = ["ENERC_KCAL", "PROCNT", "FAT", "CHOCDF", "CHOLE", "NA"];
	return (
		<Stack>
			<Heading size='md'>Nutrients</Heading>
			<Wrap spacing={12}>
				{nutrientKeys.map((key) => {
					const nutrient = nutrients[key];
					return (
						<Stack key={nutrient.label}>
							<strong>{nutrient.label}</strong>
							<span>
								{nutrient.quantity.toFixed()}
								<span> {nutrient.unit}</span>
							</span>
						</Stack>
					);
				})}
			</Wrap>
		</Stack>
	);
};
