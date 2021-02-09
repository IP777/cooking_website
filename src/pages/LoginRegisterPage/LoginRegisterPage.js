import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./LoginRegisterPage.module.css";
import { TextInput, Button } from "react-materialize";
import M from "materialize-css";

import LoginLinkBlock from "../../component/LoginLinkBlock/LoginLinkBlock";

export default function LoginRegisterPage({
	history,
	login,
	registration,
	isLoaded,
	setUserRequest,
}) {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		repeatPassword: "",
	});

	const registerPage = window.location.pathname.includes("registration");
	const loginPage = window.location.pathname.includes("login");

	// const prevLoggin = usePrevious(isLoggin);
	// function usePrevious(value) {
	// 	const ref = useRef();
	// 	useEffect(() => {
	// 		ref.current = value;
	// 	});
	// 	return ref.current;
	// }

	useEffect(() => {
		if (isLoaded.error) {
			toast.error(isLoaded.error);
		} else if (isLoaded.message) {
			setUserRequest("");
			setUser({ name: "", email: "", password: "", repeatPassword: "" });
		}
	}, [isLoaded]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (registerPage) {
			if (user.password === user.repeatPassword) {
				registration({
					name: user.name,
					email: user.email,
					password: user.password,
				});
				//Если все ок перебрасываем на страничку логинизации
				history.push({
					pathname: "/login",
				});

				toast.success("Войдите под своим аккаунтом");
			} else {
				toast.error("Вы ввели неправельный пароль");
			}
		} else if (loginPage) {
			login({
				email: user.email,
				password: user.password,
			});
		}
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
					<TextInput
						id="repeatPassword"
						value={user.repeatPassword}
						label="Повторить пароль"
						onChange={handlerChange}
					/>
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
