import { useState } from "react";
import style from "./AddRecipeBlock.module.css";
import { Button, Icon } from "react-materialize";

export default function AddRecipeBlock() {
	const [recipeStep, setRecipeStep] = useState([
		{ id: 0, stepText: "", imageUrl: "", add: false },
		{ id: 1, stepText: "", imageUrl: "", add: true },
	]);

	const handelbarAdd = () => {
		const modIngridients = recipeStep.map((iter) => ({
			...iter,
			add: false,
		}));

		setRecipeStep([
			...modIngridients,
			{
				id: modIngridients.length,
				ingridient: "",
				count: 0,
				add: true,
			},
		]);
	};

	const handelbarRemove = (e) => {
		const getId = Number(e.target.parentElement.parentElement.id);
		const filterArr = recipeStep.filter((iter) => iter.id !== getId);
		setRecipeStep(filterArr);
	};

	const handelbarChangeRecipe = (e) => {
		const getId = Number(e.target.parentElement.id);
		const getValue = e.target.value;
		const getType = e.target.name;

		const modIngridients = recipeStep.map((iter) => {
			if (iter.id === getId) {
				if (getType === "img_url") {
					return { ...iter, stepText: getValue };
				}
				return { ...iter, imageUrl: getValue };
			} else {
				return iter;
			}
		});

		setRecipeStep(modIngridients);
	};

	return (
		<>
			<h5 className={style.headTitle}>Пошаговый рецепт</h5>
			<div className={style.recipeStepWrapper}>
				{recipeStep.map(({ add, id, stepText, imageUrl }, index) => (
					<div id={id} key={index} className={style.recipeStepBlock}>
						<input
							name="img_url"
							type="text"
							placeholder="Ссылка на изображение"
							onChange={handelbarChangeRecipe}
							value={stepText}
						/>
						<input
							name="text"
							type="text"
							placeholder="Теkст..."
							onChange={handelbarChangeRecipe}
							value={imageUrl}
						/>
						{add ? (
							<Button
								className={style.addButton + " red"}
								floating
								icon={<Icon>add</Icon>}
								large
								node="button"
								waves="light"
								onClick={handelbarAdd}
							/>
						) : (
							<Button
								className={style.addButton + " red"}
								floating
								icon={<Icon>delete</Icon>}
								large
								node="button"
								waves="light"
								onClick={handelbarRemove}
							/>
						)}
					</div>
				))}
			</div>
		</>
	);
}
