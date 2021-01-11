import style from "./MainPage.module.css";
import Search from "../../component/Search/Search";
import RecipePanel from "../../component/RecipePanel/RecipePanel";
import FilterPanel from "../../component/FilterPanel/FilterPanel";
import CardsList from "../../component/CardList/CardsList";
import Header from "../../component/Header/Header";
import { Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";

import fakeDB from "../../assets/fakeDB/fakeDB.json";

export default function MainPage() {
	return (
		<>
			<Header />
			<Search />
			<RecipePanel length={fakeDB.length} />
			<FilterPanel />
			<CardsList database={fakeDB} />
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
