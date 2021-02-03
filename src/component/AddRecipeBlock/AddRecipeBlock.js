import { useEffect, useState } from "react";
import shortid from "shortid";
import style from "./AddRecipeBlock.module.css";
import { Button, Icon } from "react-materialize";

const imagePlaceholder =
	"http://placehold.it/200/EEEEEE/?text=Coocking+website";

export default function AddRecipeBlock({ getRecipeStep, defaultValue }) {
	const [recipeStep, setRecipeStep] = useState([
		{
			id: "0",
			stepText: "",
			imageUrl: imagePlaceholder,
			add: false,
		},
		{
			id: "1",
			stepText: "",
			imageUrl: imagePlaceholder,
			add: true,
		},
	]);

	useEffect(() => {
		if (defaultValue.length > 0) {
			setRecipeStep(defaultValue);
		}
	}, [getRecipeStep, defaultValue]);

	const handelbarAdd = () => {
		const modIngridients = recipeStep.map((iter) => ({
			...iter,
			add: false,
		}));

		setRecipeStep([
			...modIngridients,
			{
				id: shortid.generate(),
				count: 0,
				add: true,
			},
		]);
	};

	const handelbarRemove = (e) => {
		const getId = e.target.parentElement.parentElement.id;
		const filterArr = recipeStep.filter((iter) => iter.id !== getId);

		setRecipeStep(filterArr);
		getRecipeStep(filterArr);
	};

	const handelbarChangeRecipe = (e) => {
		const getId = e.target.parentElement.id;

		const modRecipeArr = recipeStep.map((recipe) =>
			getId === recipe.id
				? { ...recipe, [e.target.name]: e.target.value }
				: recipe
		);

		setRecipeStep(modRecipeArr);
		getRecipeStep(modRecipeArr);
	};

	return (
		<>
			<h5 className={style.headTitle}>Пошаговый рецепт</h5>
			<div className={style.recipeStepWrapper}>
				{recipeStep.map(({ add, id, stepText, imageUrl }, index) => (
					<div id={id} key={index} className={style.recipeStepBlock}>
						<div className={style.imgWrapper}>
							<img
								alt={imageUrl}
								src={imageUrl}
								className={style.img}
							/>
						</div>

						<input
							name="stepText"
							type="text"
							placeholder="Теkст..."
							onChange={handelbarChangeRecipe}
							value={stepText}
						/>
						<input
							name="imageUrl"
							type="text"
							placeholder="Ссылка на изображение"
							onChange={handelbarChangeRecipe}
							value={
								imageUrl.includes("placehold.it")
									? ""
									: imageUrl
							}
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
