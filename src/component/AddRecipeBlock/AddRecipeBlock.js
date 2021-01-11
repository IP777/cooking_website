import { useState } from "react";
import style from "./AddRecipeBlock.module.css";
import { Button, Icon } from "react-materialize";

export default function AddRecipeBlock() {
	const [recipeStep, setRecipeStep] = useState([
		{ id: 0, ingridient: "", count: 0, add: false },
		{ id: 1, ingridient: "", count: 0, add: true },
	]);

	return (
		<div className={style.recipeStepWrapper}>
			{recipeStep.map(({ add, id, ingridient }, index) => (
				<div id={id} key={index} className={style.ingridientBlock}>
					<input
						type="text"
						placeholder="Ссылка на изображение"
						// onChange={handelbarChangeIngridient}
						value={ingridient}
					/>
					<input type="text" placeholder="Тест..." />
					{add ? (
						<Button
							className={style.addButton + " red"}
							floating
							icon={<Icon>add</Icon>}
							large
							node="button"
							waves="light"
							// onClick={handelbarAdd}
						/>
					) : (
						<Button
							className={style.addButton + " red"}
							floating
							icon={<Icon>delete</Icon>}
							large
							node="button"
							waves="light"
							// onClick={handelbarRemove}
						/>
					)}
				</div>
			))}
		</div>
	);
}
