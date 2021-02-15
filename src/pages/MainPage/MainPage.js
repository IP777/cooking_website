import { useEffect } from "react";
import style from "./MainPage.module.css";
import Search from "../../containers/Search";
import RecipePanel from "../../component/RecipePanel/RecipePanel";
import FilterPanel from "../../containers/FilterPanel";
import CardsList from "../../component/CardList/CardsList";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";

export default function MainPage({
	location,
	user,
	recipes,
	getAllrecipes,
	getAllUserRecipes,
}) {
	useEffect(() => {
		const locatedIsHome = !location.pathname.includes("myrecipe");
		const locatedIsMyPage = location.pathname.includes("myrecipe");

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
			{/* <FilterPanel /> */}
			<RecipePanel length={recipes.length} />
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
			<Footer />
		</>
	);
}
