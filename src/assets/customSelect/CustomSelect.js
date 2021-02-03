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
		id: iter.id,
		name: iter.name,
		select: iter.id === select ? true : false,
	}));

	const [option, setOption] = useState(addSelectToArray);
	const defaultValue = option.find((iter) => iter.select).id;

	const handelSelect = (e) => {
		e.preventDefault();

		const newOptionArr = option.map((iter) => ({
			id: iter.id,
			name: iter.name,
			select: iter.id === e.target.value ? true : false,
		}));

		setOption(newOptionArr);

		SelectedItem(newOptionArr.find((i) => i.select));
	};

	return (
		<label>
			{name}
			<select
				className={className + " " + style.select}
				value={defaultValue}
				onChange={handelSelect}
			>
				{optionArray.map(({ id, name, select }) => {
					if (select) {
						return (
							<option
								key={id}
								className={style.option + " " + styleOption}
								selected
								value={id}
							>
								{name}
							</option>
						);
					} else {
						return (
							<option
								key={id}
								className={style.option + " " + styleOption}
								value={id}
							>
								{name}
							</option>
						);
					}
				})}
			</select>
		</label>
	);
}
