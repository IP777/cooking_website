import { Link } from "react-router-dom";
import { Button } from "react-materialize";
import style from "./LoginLinkBlock.module.css";

export default function LoginLinkBlock() {
	const loginPage = window.location.pathname.includes("login");
	const registerPage = window.location.pathname.includes("registration");

	return (
		<div className={style.wrapper}>
			{registerPage && (
				<Link to="/login">
					<Button
						// className={style.formBtn}
						node="button"
						type="submit"
						waves="light"
						className="btn-flat"
					>
						Войти
					</Button>
				</Link>
			)}
			{loginPage && (
				<Link to="/registration">
					<Button
						// className={style.formBtn}
						node="button"
						type="submit"
						waves="light"
						className="btn-flat"
					>
						Зарегестрироватся
					</Button>
				</Link>
			)}
			<Link to="/">
				<Button
					node="button"
					type="submit"
					waves="light"
					className="btn-flat"
				>
					НА ГЛАВНУЮ
				</Button>
			</Link>
		</div>
	);
}
