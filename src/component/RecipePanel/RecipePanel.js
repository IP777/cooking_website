import { useState } from "react";
import style from "./RecipePanel.module.css";

export default function RecipePanel() {
	const [recipeCount, setRecipeCount] = useState(30);
	return (
		<>
			<span className={style.wrapper}>
				<b className={style.recipe}>Рецепты</b> | {recipeCount} рецептов
			</span>
		</>
	);
}
