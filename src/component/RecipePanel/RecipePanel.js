import style from "./RecipePanel.module.css";

export default function RecipePanel({ length }) {
	return (
		<>
			<span className={style.wrapper}>
				<b className={style.recipe}>Рецепты</b> | найдено: {length}
				{length > 3 ? " рецептов" : " peцепта"}
			</span>
		</>
	);
}
