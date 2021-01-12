import style from "./CustomInput.module.css";

export default function CustomInput({ className, text, onChange }) {
	return (
		<label className={className + " " + style.input}>
			{text} <input type="text" onChange={onChange} />
		</label>
	);
}
