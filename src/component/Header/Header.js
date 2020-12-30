import { NavLink, Link } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
	return (
		<nav>
			<div className="nav-wrapper grey lighten-5">
				<Link to="/" className={style.brand_logo}>
					Cooking
				</Link>
				<ul
					id="nav-mobile"
					className={
						style.link_wrapper + " right hide-on-med-and-down"
					}
				>
					<li>
						<NavLink
							exact
							to="/registration"
							className={style.selected_link}
							activeClassName={style.selected_link_in}
						>
							Войти
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to="/login"
							className={style.selected_link}
							activeClassName={style.selected_link_in}
						>
							Регистрация
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
