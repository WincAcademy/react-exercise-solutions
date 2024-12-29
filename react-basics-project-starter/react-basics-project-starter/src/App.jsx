import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/recipePage/RecipePage";

export const App = () => {
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	return selectedRecipe ? (
		<RecipePage
			recipe={selectedRecipe}
			goBack={() => setSelectedRecipe(null)}
		/>
	) : (
		<RecipeListPage handleSelectRecipe={setSelectedRecipe} />
	);
};
