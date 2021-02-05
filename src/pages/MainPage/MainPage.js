import { useState, useEffect } from "react";
import style from "./MainPage.module.css";
import Search from "../../component/Search/Search";
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
	userRecipes,
	getAllrecipes,
	getAllUserRecipes,
}) {
	const locatedIsHome = !location.pathname.includes("myrecipe");
	const locatedIsMyPage = location.pathname.includes("myrecipe");

	useEffect(() => {
		getAllrecipes();
		if (locatedIsMyPage) {
			getAllUserRecipes(user.userName);
		}
	}, []);

	return (
		<>
			<Header />
			<Search />
			<RecipePanel
				length={locatedIsHome ? recipes.length : userRecipes.length}
			/>
			<FilterPanel />
			<CardsList database={locatedIsHome ? recipes : userRecipes} />
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
