import style from "./CustomTextarea.module.css";

export default function CustomTextarea({
	id,
	className,
	text,
	onChange,
	value,
}) {
	return (
		<label className={style.recipeName}>
			{text}
			<textarea
				id={id}
				className={className + " " + style.textarea}
				rows="10"
				cols="45"
				name="text"
				onChange={onChange}
				value={value}
			/>
		</label>
	);
}
