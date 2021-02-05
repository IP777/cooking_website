import { NavLink } from "react-router-dom";
import style from "./HeadLoginMenu.module.css";

export default function HeaderLoginMenu({ user, isLogin, logout }) {
	const onLogout = () => {
		logout({ email: user.userEmail });
	};
	return (
		<ul
			id="nav-mobile"
			className={style.link_wrapper + " right hide-on-med-and-down"}
		>
			{isLogin ? (
				<>
					<li className={style.userListMenu}>
						<span className={style.userName}>
							Привет {user.userName} ||
						</span>
					</li>
					<li className={style.userListMenu}>
						<input
							className={style.exitBtn}
							type="button"
							value="Выход"
							onClick={onLogout}
						/>
					</li>
				</>
			) : (
				<>
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
				</>
			)}
		</ul>
	);
}
