import { useEffect } from "react";
import style from "./MainPage.module.css";
import Search from "../../containers/Search";
import RecipePanel from "../../component/RecipePanel/RecipePanel";
import FilterPanel from "../../component/FilterPanel/FilterPanel";
import CardsList from "../../component/CardList/CardsList";
import Header from "../../component/Header/Header";
import { Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";

export default function MainPage({
	location,
	user,
	recipes,
	getAllrecipes,
	getAllUserRecipes,
}) {
	const locatedIsHome = !location.pathname.includes("myrecipe");
	const locatedIsMyPage = location.pathname.includes("myrecipe");

	useEffect(() => {
		if (locatedIsMyPage) {
			getAllUserRecipes(user.userName);
		} else if (locatedIsHome) {
			getAllrecipes();
		}
	}, []);

	return (
		<>
			<Header />
			<Search />
			<RecipePanel length={recipes.length} />
			<FilterPanel />
			<CardsList database={recipes} />
			<Link to="/add" className={style.btnFloat}>
				<Button
					className="red"
					floating
					icon={<Icon>add</Icon>}
					large
					node="button"
					waves="light"
				/>
			</Link>
		</>
	);
}
