import Header from "../../component/Header/Header";
import AddIngridientBlock from "../../component/AddIngridientBlock/AddIngridientBlock";
import AddRecipeBlock from "../../component/AddRecipeBlock/AddRecipeBlock";
import style from "./AddRecipePage.module.css";

export default function AddRecipePage() {
	return (
		<>
			<Header />
			<div className={style.wrapper}>
				<div className={style.secondWrapper}>
					<div className={style.addRecipeHeader}>
						<label className={style.recipeName}>
							Название блюда <input type="text" />
						</label>
						<select className={style.selectList}>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
						</select>
					</div>
					<label className={style.recipeName}>
						Ссылка на изображение <input type="text" />
					</label>
					<label className={style.recipeName}>
						Описание
						<textarea
							className={style.textArea}
							rows="10"
							cols="45"
							name="text"
						/>
					</label>
					<AddIngridientBlock />
					<AddRecipeBlock />
				</div>
			</div>
		</>
	);
}
