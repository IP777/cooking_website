import queryString from "query-string";
import style from "./RecipePage.module.css";
import Header from "../../component/Header/Header";
import RecipeTable from "../../component/RecipeTable/RecipeTable";
import RecipeList from "../../component/RecipeList/RecipeList";
import { Button, Icon } from "react-materialize";

import fakeDB from "../../assets/fakeDB/fakeDB.json";

export default function RecipePage(props) {
	// default props from reactrouter
	const getRecipeId = queryString.parse(props.location.search).id;
	const fetchRecipe = fakeDB.find((iter) => iter._id === getRecipeId);

	const imageHandelbars = () => {
		console.log(getRecipeId);
		console.log(fetchRecipe);
	};

	return (
		<>
			<Header />
			<div className={style.wrapper}>
				<div className={style.header}>
					<img
						className={style.img}
						src={fetchRecipe.main_image}
						onClick={imageHandelbars}
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
					<RecipeTable ingridients={fetchRecipe.ingredients} />
					<RecipeList list={fetchRecipe.recipe} />
					<div className={style.btnWrapper}>
						<Button
							className={style.btnEdit + " red"}
							floating
							icon={<Icon>edit</Icon>}
							large
							node="button"
							waves="light"
						/>
						<Button
							className="red"
							floating
							icon={<Icon>delete</Icon>}
							large
							node="button"
							waves="light"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
