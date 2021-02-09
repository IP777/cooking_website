import style from "./RecipeHeader.module.css";

export default function RecipeHeader({ fetchRecipe }) {
	return (
		<div className={style.header}>
			<img
				className={style.img}
				src={fetchRecipe.main_image_src}
				alt={`${fetchRecipe.recipe_name}`}
			/>
			<div className={style.sideTextWrapper}>
				<p className={style.sideTextHeadBlock}>
					<span>{fetchRecipe.recipe_name}</span>
					<span>{fetchRecipe.category}</span>
				</p>
				<p className={style.description}>{fetchRecipe.description}</p>
			</div>
		</div>
	);
}
