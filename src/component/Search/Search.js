import { useEffect, useState } from "react";
import style from "./Search.module.css";
import { Icon } from "react-materialize";
// import CustomSelect from "../../assets/customSelect/CustomSelect";
import CustomFakeSelect from "../../assets/CustomFakeSelect/CustomFakeSelect";

export default function Search({
	searchForNameRecipes,
	searchForCategoryRecipes,
	searchForIngridientsRecipes,
	getAllCategory,
	allCategory,
	category,
}) {
	const [text, setText] = useState("");
	const [categoryState, setCategoryState] = useState();

	useEffect(() => {
		//Защита от лишних загрузок
		if (category.length === 0) {
			getAllCategory(allCategory);
		}
	});

	const submitHandler = (e) => {
		e.preventDefault();
		searchForNameRecipes({
			recipe_name: text,
		});
	};

	const onChangeHandler = (e) => {
		setText(e.target.value);
	};

	const getCategorySearchName = (props) => {
		setCategoryState(props);
		searchForCategoryRecipes({ category: props });
	};

	return (
		<>
			<form className={style.wrapper} onSubmit={submitHandler}>
				<input
					type="text"
					onChange={onChangeHandler}
					className={style.textline}
					placeholder="Найти рецепт."
				/>
				<button className={style.serch_btn}>
					<Icon className={style.serch_icon + " search"}>search</Icon>
				</button>
			</form>
			<div className={style.btnWrapper}>
				<CustomFakeSelect
					optionArray={category}
					className={style.fakeSelect}
					onClick={getCategorySearchName}
				/>
			</div>
			{categoryState && (
				<h3 className={style.category_name}>{categoryState}</h3>
			)}
		</>
	);
}
