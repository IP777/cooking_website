import React, { useState } from "react";
import style from "./LoginRegisterPage.module.css";
import { TextInput, Button } from "react-materialize";
import M from "materialize-css";

import LoginLinkBlock from "../../component/LoginLinkBlock/LoginLinkBlock";

export default function LoginRegisterPage({ onLogin }) {
	const [user, setUser] = useState({ name: "", email: "", password: "" });

	const registerPage = window.location.pathname.includes("registration");
	const loginPage = window.location.pathname.includes("login");

	const submitHandler = (e) => {
		e.preventDefault();
		// console.log(user);
		if (registerPage) {
			console.log("registerPage");
		} else if (loginPage) {
			const response = {
				email: user.email,
				password: user.password,
			};
			onLogin(response);
		}
		setUser({ name: "", email: "", password: "" });
	};

	const handlerChange = (e) => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	return (
		<div className={style.wrapper}>
			<form className={style.form} onSubmit={submitHandler}>
				<h4 className={style.headText}>
					{registerPage ? "Зарегестрироватся" : "Войти"}
				</h4>
				{registerPage && (
					<TextInput
						id="name"
						label="Имя"
						value={user.name}
						onChange={handlerChange}
					/>
				)}
				<TextInput
					id="email"
					label="Email"
					value={user.email}
					onChange={handlerChange}
				/>
				<TextInput
					id="password"
					label="Пароль"
					value={user.password}
					onChange={handlerChange}
				/>
				{registerPage && (
					<TextInput id="TextInput-4" label="Повторить пароль" />
				)}
				<Button
					className={style.formBtn + " red darken-1"}
					node="button"
					type="submit"
					waves="light"
				>
					Поехали
				</Button>
			</form>
			<LoginLinkBlock />
		</div>
	);
}
