import style from "./CustomSubmitButton.module.css";
import { Icon } from "react-materialize";

export default function CustomSubmitButton({ text, onClick }) {
	return (
		<button
			type="submit"
			className={style.btnSubmit}
			onClick={onClick ? onClick : null}
		>
			{text}
			<Icon right>send</Icon>
		</button>
	);
}
