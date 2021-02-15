import style from "./CustomFakeSelect.module.css";
import { Icon } from "react-materialize";

export default function CustomFakeSelect({ optionArray, className }) {
	console.log(optionArray);

	return (
		<div
			className={
				className
					? className + " " + style.listWrapper
					: style.listWrapper
			}
		>
			<span className={style.selectName}>
				Категории
				<Icon className={style.arrow_checkbox + " arrow_drop_down"}>
					arrow_drop_down
				</Icon>
			</span>

			<ul className={style.selectList}>
				<li className={style.item}>First Category</li>
				<li className={style.item}>Second Category</li>
			</ul>
		</div>
	);
}
