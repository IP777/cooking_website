import { useState } from "react";
import style from "./Search.module.css";
import { Icon } from "react-materialize";
import CustomSelect from "../../assets/customSelect/CustomSelect";

const arr = [
	{ id: "ingridient", name: "Ингридиентам" },
	{ id: "tile", name: "Заголовкам" },
	{ id: "category", name: "Категориям" },
];

export default function Search({ searchForIngridientsRecipes }) {
	const [text, setText] = useState("");
	const [search, setSearch] = useState("ingridient");

	const getRecipeCategory = (props) => {
		setSearch(props.id);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log({ ingredient: text });
		searchForIngridientsRecipes({ ingredient: text });
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
				select="ingridient"
				SelectedItem={getRecipeCategory}
				className={style.select}
			/>
			<button className={style.serch_btn}>
				<Icon className={style.serch_icon + " search"}>search</Icon>
			</button>
		</form>
	);
}
