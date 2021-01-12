import { useState } from "react";

import Header from "../../component/Header/Header";
import AddIngridientBlock from "../../component/AddIngridientBlock/AddIngridientBlock";
import AddRecipeBlock from "../../component/AddRecipeBlock/AddRecipeBlock";
import CustomInput from "../../assets/customInput/CustomInput";
import CustomTextarea from "../../assets/customTextarea/CustomTextarea";
import CustomSelect from "../../assets/customSelect/CustomSelect";
import CustomSubmitButton from "../../assets/customSubmitButton/CustomSubmitButton";

import style from "./AddRecipePage.module.css";

export default function AddRecipePage() {
	const [option, setOption] = useState([
		{ id: "tort", name: "Торт", select: true },
		{ id: "salat", name: "Салаты", select: false },
		{ id: "sladkoe", name: "Сладкое", select: false },
	]);

	const handelSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
	};

	const handelSelect = (e) => {
		e.preventDefault();
		const selected = e.target.value;
		const newOptionArr = option.map((iter) => {
			if (iter.id === selected) {
				return { ...iter, select: true };
			} else {
				return { ...iter, select: false };
			}
		});
		setOption(newOptionArr);
	};

	return (
		<>
			<Header />
			<div className={style.wrapper}>
				<form className={style.secondWrapper} onSubmit={handelSubmit}>
					<h4 className={style.headTitle}>Рецепт блюда</h4>
					<div className={style.addRecipeHeader}>
						<CustomInput
							text={"Название блюда"}
							className={style.recipeName}
						/>
						<CustomSelect
							className={style.selectList}
							optionArray={option}
							onSelect={handelSelect}
						/>
					</div>
					<CustomInput
						text={"Ссылка на изображение"}
						className={style.recipeName}
					/>
					<CustomTextarea text="Описание" />
					<AddIngridientBlock />
					<div className={style.footer}>
						<AddRecipeBlock />
						<CustomSubmitButton text="Добавить рецепт" />
					</div>
				</form>
			</div>
		</>
	);
}
