import { Badge, Stack, Wrap } from "@chakra-ui/react";

const COLORS = {
	health: "blue",
	diet: "green",
	cautions: "red",
};
export const LabelsList = ({ labels }) => {
	return (
		<Stack
			align='start'
			gap={4}
			justifyContent='space-between'
			alignItems='space-between'
		>
			{Object.keys(labels).map((key) => {
				return (
					<Stack key={key}>
						<strong style={{ textTransform: "" }}>{key}</strong>
						<Wrap>
							{labels[key].map((label) => {
								return (
									<Badge colorScheme={COLORS[key]} key={label}>
										{label}
									</Badge>
								);
							})}
						</Wrap>
					</Stack>
				);
			})}
		</Stack>
	);
};
