import style from "./MainPage.module.css";
import Search from "../../component/Search/Search";
import RecipePanel from "../../component/RecipePanel/RecipePanel";
import FilterPanel from "../../component/FilterPanel/FilterPanel";
import Card from "../../component/Card/Card";
import Header from "../../component/Header/Header";

import fakeDB from "../../assets/fakeDB/fakeDB.json";

export default function MainPage() {
	return (
		<>
			<Header />
			<Search />
			<RecipePanel />
			<FilterPanel />
			<ul className={style.list}>
				{fakeDB.map(
					({
						_id,
						recipe_name,
						ingredients,
						category,
						autor,
						main_image,
					}) => (
						<li key={_id}>
							<Card
								key={_id}
								name={recipe_name}
								ingridient={ingredients}
								category={category}
								autor={autor}
								mainImage={main_image}
							/>
						</li>
					)
				)}
			</ul>
		</>
	);
}
