import { NavLink } from "react-router-dom";
import style from "./HeadLoginMenu.module.css";

export default function HeaderLoginMenu({ user }) {
	console.log(user);
	return (
		<ul
			id="nav-mobile"
			className={style.link_wrapper + " right hide-on-med-and-down"}
		>
			<li>
				<NavLink
					to="/login"
					className={style.selected_link}
					activeClassName={style.selected_link_in}
				>
					Войти
				</NavLink>
			</li>
			<li>
				<NavLink
					exact
					to="/registration"
					className={style.selected_link}
					activeClassName={style.selected_link_in}
				>
					Регистрация
				</NavLink>
			</li>
		</ul>
	);
}
