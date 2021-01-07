import React, { useState } from "react";
import style from "./LoginRegisterPage.module.css";
import { TextInput, Button } from "react-materialize";
import M from "materialize-css";
import { Link } from "react-router-dom";

export default function LoginRegisterPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const registerPage = window.location.pathname.includes("registration");
	const loginPage = window.location.pathname.includes("login");

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(window.location.pathname);
	};

	return (
		<div className={style.wrapper}>
			<form className={style.form} onClick={submitHandler}>
				<h4 className={style.headText}>
					{registerPage ? "Зарегестрироватся" : "Войти"}
				</h4>
				{registerPage && <TextInput id="TextInput-4" label="Имя" />}
				<TextInput id="TextInput-4" label="Email" />
				<TextInput id="TextInput-4" label="Пароль" />
				{registerPage && (
					<TextInput id="TextInput-4" label="Повторить пароль" />
				)}
				<div className={style.btnWrapper}>
					<Button
						className={style.formBtn}
						node="button"
						type="submit"
						waves="light"
						className="red darken-1"
					>
						Поехали
					</Button>
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
			</form>
		</div>
	);
}
