import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className={style.footer}>
			<h5 className={style.h5}>© Пётр Иванов 2021</h5>
			<ul className={style.ul}>
				<li>
					<Link to="/" className={style.link}>
						Главная
					</Link>
				</li>
				<li>
					<Link to="/contacts" className={style.link}>
						Контакты
					</Link>
				</li>
			</ul>
		</footer>
	);
}
