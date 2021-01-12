import React, { useState } from "react";
import style from "./LoginRegisterPage.module.css";
import { TextInput, Button } from "react-materialize";
import M from "materialize-css";

import LoginLinkBlock from "../../component/LoginLinkBlock/LoginLinkBlock";

export default function LoginRegisterPage({ onLogin }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const registerPage = window.location.pathname.includes("registration");
	const loginPage = window.location.pathname.includes("login");

	const submitHandler = (e) => {
		e.preventDefault();
		//console.log(email, password, name);
		if (registerPage) {
			console.log("registerPage");
		} else if (loginPage) {
			const response = {
				email: email,
				password: password,
			};
			onLogin(response);
		}
	};

	const handlerChange = (e) => {
		const target = e.target.id;
		const targetValue = e.target.value;

		if (target === "email") {
			setEmail(targetValue);
		} else if (target === "password") {
			setPassword(targetValue);
		} else if (target === "name") {
			setName(targetValue);
		}
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
						value={name}
						onChange={handlerChange}
					/>
				)}
				<TextInput
					id="email"
					label="Email"
					value={email}
					onChange={handlerChange}
				/>
				<TextInput
					id="password"
					label="Пароль"
					value={password}
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
