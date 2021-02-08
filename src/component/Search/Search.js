import { useState } from "react";
import style from "./Search.module.css";
import { Icon } from "react-materialize";
import CustomSelect from "../../assets/customSelect/CustomSelect";

const arr = [
	{ id: "tile", name: "Заголовкам" },
	{ id: "category", name: "Категориям" },
	{ id: "ingridient", name: "Ингридиентам" },
];

export default function Search({
	searchForNameRecipes,
	searchForCategoryRecipes,
	searchForIngridientsRecipes,
}) {
	const [text, setText] = useState("");
	const [search, setSearch] = useState("tile");

	const getRecipeCategory = (props) => {
		setSearch(props.id);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		switch (search) {
			case "tile":
				searchForNameRecipes({ recipe_name: text });
				break;
			case "category":
				searchForCategoryRecipes({ category: text });
				break;
			case "ingridient":
				searchForIngridientsRecipes({ ingredient: text });
				break;

			default:
				break;
		}
	};

	const onChangeHandler = (e) => {
		setText(e.target.value);
	};

	return (
		<form className={style.wrapper} onSubmit={submitHandler}>
			<input
				type="text"
				onChange={onChangeHandler}
				className={style.textline}
				placeholder="Поиск по"
			/>
			<CustomSelect
				optionArray={arr}
				select="tile"
				SelectedItem={getRecipeCategory}
				className={style.select}
			/>
			<button className={style.serch_btn}>
				<Icon className={style.serch_icon + " search"}>search</Icon>
			</button>
		</form>
	);
}
