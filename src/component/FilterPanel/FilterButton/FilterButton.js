import style from "./FilterButton.module.css";
import { Icon } from "react-materialize";

export default function FilterPanel({ name, isChecked, categoryChecket }) {
	const toggleCheckBoxChange = () => {
		categoryChecket(name, isChecked);
	};

	return (
		<label className={style.lable}>
			<input
				className={style.input}
				type="checkbox"
				value="label"
				checked={isChecked}
				onChange={toggleCheckBoxChange}
			/>
			{isChecked ? (
				<Icon className={style.arrow_checkbox + " arrow_drop_up"}>
					arrow_drop_up
				</Icon>
			) : (
				<Icon className={style.arrow_checkbox + " arrow_drop_down"}>
					arrow_drop_down
				</Icon>
			)}
			{name}
		</label>
	);
}
