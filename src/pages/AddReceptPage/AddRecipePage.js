import Header from "../../component/Header/Header";
import style from "./AddRecipePage.module.css";
import { TextInput, Icon } from "react-materialize";

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
				</div>
			</div>
		</>
	);
}
