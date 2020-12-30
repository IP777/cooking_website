import React, { useState } from "react";
//import { TextField, Box, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import style from "./LoginRegisterPage.module.css";
import { TextInput, Button, Icon } from "react-materialize";
import M from "materialize-css";

export default function LoginRegisterPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const registerPage = window.location.pathname.includes("registration");
	const loginPage = window.location.pathname.includes("login");

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(window.location.pathname.includes("login"));
	};

	return (
		<div className={style.wrapper}>
			<form className={style.form} onClick={submitHandler}>
				<h4 className={style.headText}>
					{loginPage ? "Зарегестрироватся" : "Войти"}
				</h4>
				{loginPage && <TextInput id="TextInput-4" label="Имя" />}
				<TextInput id="TextInput-4" label="Email" />
				<TextInput id="TextInput-4" label="Пароль" />
				{loginPage && (
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
					{loginPage && (
						<Button
							// className={style.formBtn}
							node="button"
							type="submit"
							waves="light"
							className="btn-flat"
						>
							Войти
						</Button>
					)}
				</div>
			</form>
		</div>
	);
}
