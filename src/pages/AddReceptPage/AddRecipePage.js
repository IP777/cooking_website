import { useState } from "react";
import { toast } from "react-toastify";

import Header from "../../component/Header/Header";
import AddIngridientBlock from "../../component/AddIngridientBlock/AddIngridientBlock";
import AddRecipeBlock from "../../component/AddRecipeBlock/AddRecipeBlock";
import CustomInput from "../../assets/customInput/CustomInput";
import CustomTextarea from "../../assets/customTextarea/CustomTextarea";
import CustomSelect from "../../assets/customSelect/CustomSelect";
import CustomSubmitButton from "../../assets/customSubmitButton/CustomSubmitButton";

import style from "./AddRecipePage.module.css";
import { fakeRecipe } from "../../assets/fakeDB/fakeRecipe";

const arr = [
	{ id: "sup", name: "Супы" },
	{ id: "salat", name: "Салаты" },
	{ id: "sladkoe", name: "Сладкое" },
	{ id: "meat&chicken", name: "Мясо и птица" },
];

const imagePlaceholder =
	"http://placehold.it/200/EEEEEE/?text=Coocking+website";

export default function AddRecipePage({ history, userToken, postRecipe }) {
	const [recipe, setRecipe] = useState({
		category: "",
		recipeName: "",
		mainImageSrc: "",
		description: "",
		ingredients: [],
		recipe: [],
	});

	const getRecipeCategory = (props) => {
		setRecipe({ ...recipe, category: props.name });
	};

	const getRecipeIngredients = (props) => {
		setRecipe({ ...recipe, ingredients: props });
	};

	const getRecipeStep = (props) => {
		setRecipe({ ...recipe, recipe: props });
	};

	const handelSubmit = (e) => {
		e.preventDefault();
	};

	const handelAddRecipe = (e) => {
		const createRecipe = {
			main_image_src: recipe.mainImageSrc,
			recipe_name: recipe.recipeName,
			category: recipe.category,
			description: recipe.description,
			ingredients: recipe.ingredients,
			recipe: recipe.recipe,
		};
		//console.log(createRecipe.recipe);
		postRecipe({ createRecipe, userToken });
		toast("Вуху рецепт добавлен )))");
		history.push({
			pathname: "/",
		});
	};

	const handlerChange = (e) => {
		setRecipe({ ...recipe, [e.target.id]: e.target.value });
	};

	const handlerFake = () => {
		setRecipe(fakeRecipe);
	};

	return (
		<>
			<input
				type="button"
				value="Fake recipe"
				onClick={handlerFake}
				style={{
					position: "fixed",
					zIndex: 100,
					right: 10,
					bottom: 10,
					height: 30,
				}}
			/>
			<Header />
			<div className={style.wrapper}>
				<form className={style.secondWrapper} onSubmit={handelSubmit}>
					<h4 className={style.headTitle}>Рецепт блюда</h4>
					<div className={style.imgWrapper}>
						<img
							alt={recipe.mainImageSrc}
							src={
								recipe.mainImageSrc === ""
									? imagePlaceholder
									: recipe.mainImageSrc
							}
							className={style.mainImage}
						/>
					</div>
					<div className={style.addRecipeHeader}>
						<CustomInput
							text={"Название блюда"}
							className={style.recipeName}
							id="recipeName"
							onChange={handlerChange}
							value={recipe.recipeName}
						/>
						<CustomSelect
							className={style.selectList}
							optionArray={arr}
							select="salat"
							SelectedItem={getRecipeCategory}
						/>
					</div>
					<CustomInput
						text={"Ссылка на изображение"}
						className={style.recipeName}
						id="mainImageSrc"
						onChange={handlerChange}
						value={recipe.mainImageSrc}
					/>
					<CustomTextarea
						text="Описание"
						id="description"
						onChange={handlerChange}
						value={recipe.description}
					/>
					<AddIngridientBlock
						getRecipeIngredients={getRecipeIngredients}
						defaultValue={recipe.ingredients}
					/>
					<AddRecipeBlock
						getRecipeStep={getRecipeStep}
						defaultValue={recipe.recipe}
					/>
					<div className={style.footer}>
						<CustomSubmitButton
							onClick={handelAddRecipe}
							text="Добавить рецепт"
						/>
					</div>
				</form>
			</div>
		</>
	);
}
