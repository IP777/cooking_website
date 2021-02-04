import { useEffect } from "react";
import style from "./MainPage.module.css";
import Search from "../../component/Search/Search";
import RecipePanel from "../../component/RecipePanel/RecipePanel";
import FilterPanel from "../../component/FilterPanel/FilterPanel";
import CardsList from "../../component/CardList/CardsList";
import Header from "../../component/Header/Header";
import { Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";

export default function MainPage({ recipes, getAllrecipes }) {
	useEffect(() => {
		getAllrecipes();
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
