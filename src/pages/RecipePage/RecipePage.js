import { useEffect } from "react";
import queryString from "query-string";
import { toast } from "react-toastify";
import style from "./RecipePage.module.css";
import Header from "../../component/Header/Header";
import RecipeTable from "../../component/RecipeTable/RecipeTable";
import RecipeList from "../../component/RecipeList/RecipeList";
import EditDeleteBtnBlock from "../../component/EditDeletBtnBlock/EditDeleteBtnBlock";

export default function RecipePage({
	location,
	fetchRecipe,
	getRecipeStatus,
	recipeStatus,
	getRecipe,
	userName,
	userToken,
	getRecipeFromID,
	deleteRecipeFromID,
	history,
}) {
	// default props from reactrouter
	const getRecipeId = queryString.parse(location.search).id;

	useEffect(() => {
		getRecipeFromID(getRecipeId);
		// componentWillUnmount()
		return () => {
			recipeStatus("");
			getRecipe("");
		};
	}, []);

	const deleteHandelbar = () => {
		deleteRecipeFromID({ id: getRecipeId, userToken });
		toast("Рецепт удалён..");
		history.push({
			pathname: "/",
		});
	};

	const editHandelbar = () => {
		recipeStatus("");
		history.push({
			pathname: "/update",
			state: { recipeID: getRecipeId, sendingRecipe: fetchRecipe },
		});
	};

	return (
		<>
			{Object.keys(fetchRecipe).length > 0 && (
				<>
					<Header />
					<div className={style.wrapper}>
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
								<div>{fetchRecipe.description}</div>
							</div>
						</div>
						<div className={style.mainBlock}>
							<RecipeTable
								ingridients={fetchRecipe.ingredients}
							/>
							<RecipeList list={fetchRecipe.recipe} />
						</div>
						<footer className={style.btnWrapper}>
							{userName === fetchRecipe.autor && (
								<EditDeleteBtnBlock
									editHandelbar={editHandelbar}
									deleteHandelbar={deleteHandelbar}
								/>
							)}
						</footer>
					</div>
				</>
			)}
		</>
	);
}
