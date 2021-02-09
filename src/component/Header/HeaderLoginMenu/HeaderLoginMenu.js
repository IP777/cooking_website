import { NavLink } from "react-router-dom";
import style from "./HeadLoginMenu.module.css";

export default function HeaderLoginMenu({ user, isLogin, logout }) {
	const onLogout = () => {
		logout({ email: user.userEmail });
	};
	return (
		<>
			{isLogin ? (
				<div className={style.userMenu}>
					<span className={style.userName}>
						Привет {user.userName} ||
					</span>
					<input
						className={style.exitBtn}
						type="button"
						value="Выход"
						onClick={onLogout}
					/>
				</div>
			) : (
				<div className={style.userMenu}>
					<NavLink
						to="/login"
						className={style.selected_link}
						activeClassName={style.selected_link_in}
					>
						Войти
					</NavLink>
					<NavLink
						exact
						to="/registration"
						className={style.selected_link}
						activeClassName={style.selected_link_in}
					>
						Регистрация
					</NavLink>
				</div>
			)}
		</>
	);
}
