import style from "./CustomFakeSelect.module.css";
import { Icon } from "react-materialize";

export default function CustomFakeSelect({ optionArray, className, onClick }) {
	const handlerOnclick = (e) => {
		const category = e.target.id;
		onClick(category === "Все категории" ? "" : category);
	};

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
				{[
					{ _id: "0", category_name: "Все категории" },
					...optionArray,
				].map(({ _id, category_name }) => (
					<li
						key={_id}
						id={category_name}
						className={style.item}
						onClick={handlerOnclick}
					>
						{category_name}
					</li>
				))}
			</ul>
		</div>
	);
}
