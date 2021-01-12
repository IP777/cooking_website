import style from "./CustomTextarea.module.css";

export default function CustomTextarea({ className, text, onChange }) {
	return (
		<label className={style.recipeName}>
			{text}
			<textarea
				className={className + " " + style.textarea}
				rows="10"
				cols="45"
				name="text"
				onChange={onChange}
			/>
		</label>
	);
}
