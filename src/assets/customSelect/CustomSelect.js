import style from "./CustomSelect.module.css";

export default function CustomSelect({
	className,
	optionArray,
	styleOption,
	onSelect,
	name,
}) {
	const defaultValue = optionArray.find((iter) => iter.select).id;

	return (
		<label>
			{name}
			<select
				className={className + " " + style.select}
				value={defaultValue}
				onChange={onSelect}
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
