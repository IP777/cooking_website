import { useState } from "react";
import style from "./CustomSelect.module.css";

export default function CustomSelect({
	className,
	optionArray,
	select,
	SelectedItem,
	styleOption,
	name,
}) {
	const addSelectToArray = optionArray.map((iter) => ({
		...iter,
		select: iter.category_name === select ? true : false,
	}));

	const [option, setOption] = useState(addSelectToArray);
	const defaultValue = option.find((iter) => iter.select).category_name;

	console.log(defaultValue);

	const handelSelect = (e) => {
		e.preventDefault();

		const newOptionArr = option.map((iter) => ({
			...iter,
			select: iter.category_name === e.target.value ? true : false,
		}));

		setOption(newOptionArr);

		SelectedItem(newOptionArr.find((i) => i.select));
	};

	return (
		<label>
			{name}
			<select
				className={
					className ? className + " " + style.select : style.select
				}
				value={defaultValue}
				onChange={handelSelect}
			>
				{optionArray.map(({ _id, category_name, select }) => {
					if (select) {
						return (
							<option
								key={_id}
								className={
									styleOption
										? styleOption + " " + style.option
										: style.option
								}
								selected
								value={category_name}
							>
								{category_name}
							</option>
						);
					} else {
						return (
							<option
								key={_id}
								className={
									styleOption
										? styleOption + " " + style.option
										: style.option
								}
								value={category_name}
							>
								{category_name}
							</option>
						);
					}
				})}
			</select>
		</label>
	);
}
