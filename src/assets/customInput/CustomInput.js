import style from "./CustomInput.module.css";

export default function CustomInput({ id, className, text, onChange, value }) {
	return (
		<label className={className + " " + style.input}>
			{text}
			<input id={id} type="text" onChange={onChange} value={value} />
		</label>
	);
}
