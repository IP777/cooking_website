import style from "./CustomSubmitButton.module.css";
import { Icon } from "react-materialize";

export default function CustomSubmitButton({ text }) {
	return (
		<button type="submit" className={style.btnSubmit}>
			{text}
			<Icon right>send</Icon>
		</button>
	);
}
