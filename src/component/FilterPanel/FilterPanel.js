import { useState } from "react";
import style from "./FilterPanel.module.css";
import FilterButton from "./FilterButton/FilterButton";

export default function FilterPanel() {
	const [category, setCategory] = useState([
		{
			name: "Категория",
			isChecked: false,
		},
		{
			name: "Автор",
			isChecked: false,
		},
		{
			name: "Новинки",
			isChecked: false,
		},
	]);
	const categoryChecket = (name, isChecked) => {
		const newCategoryArray = category.map((iter) => {
			if (iter.name === name) {
				return { name: iter.name, isChecked: !iter.isChecked };
			} else {
				return { name: iter.name, isChecked: false };
			}
		});
		setCategory(newCategoryArray);
		//console.log(newCategoryArray);
	};

	return (
		<div className={style.wrapper}>
			{category.map(({ name, isChecked }) => (
				<FilterButton
					key={name}
					name={name}
					isChecked={isChecked}
					categoryChecket={categoryChecket}
				/>
			))}
		</div>
	);
}
