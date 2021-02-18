import style from "./CustomFakeSelect.module.css";
import { Icon } from "react-materialize";
import { useState } from "react";

export default function CustomFakeSelect({
	optionArray,
	defaultName,
	className,
	onClick,
}) {
	const [target, setTarger] = useState("Категории");

	const handlerOnclick = (e) => {
		setTarger(e.target.id);
		onClick(e.target.id);
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
				{target}
				<Icon className={style.arrow_checkbox + " arrow_drop_down"}>
					arrow_drop_down
				</Icon>
			</span>

			<ul className={style.selectList}>
				{optionArray.map(({ _id, category_name }) => (
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
