import { useState } from "react";
import { toast } from "react-toastify";
import style from "./RegistrationPage.module.css";
import LoginLinkBlock from "../../component/LoginLinkBlock/LoginLinkBlock";
import CustomSubmitButton from "../../assets/customSubmitButton/CustomSubmitButton";

export default function LoginPage({ registration, history }) {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		comfirmPassword: "",
	});
	const [valid, setValid] = useState({
		name: true,
		email: true,
		password: true,
		comfirmPassword: true,
	});

	const submitHandler = async (e) => {
		e.preventDefault();

		if (user.name.length === 0) {
			alert("Введите правильно имя");
			setValid({ ...valid, name: false });
			return;
		}

		if (user.email.length === 0 || !user.email.includes("@")) {
			alert("Введите правильно email");
			setValid({ ...valid, email: false });
			return;
		}

		if (
			user.password !== user.comfirmPassword ||
			user.password.length === 0
		) {
			alert("Вы ввели неправельный пароль");
			setValid({ ...valid, password: false, comfirmPassword: false });
			return;
		}

		const registerResponse = await registration({
			name: user.name,
			email: user.email,
			password: user.password,
		});

		if (registerResponse.error) {
			alert(registerResponse.error);
			setValid({
				name: false,
				email: false,
				password: false,
				comfirmPassword: false,
			});
			return;
		}

		// Если все ок перебрасываем на страничку логинизации
		history.push({
			pathname: "/login",
		});
	};

	const handlerChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handelOnFocus = (e) => {
		setValid({ ...valid, [e.target.name]: true });
	};

	return (
		<div className={style.wrapper}>
			<form className={style.form} onSubmit={submitHandler}>
				<h4 className={style.headText}>Зарегестрироватся</h4>
				<input
					name="name"
					type="text"
					placeholder="Имя"
					value={user.name}
					onChange={handlerChange}
					className={valid.name ? style.input : style.input_invalid}
					onFocus={handelOnFocus}
				/>
				<input
					name="email"
					type="text"
					placeholder="email"
					value={user.email}
					onChange={handlerChange}
					className={valid.email ? style.input : style.input_invalid}
					onFocus={handelOnFocus}
				/>
				<input
					name="password"
					type="password"
					placeholder="Пароль"
					value={user.password}
					onChange={handlerChange}
					onFocus={handelOnFocus}
					className={
						valid.password ? style.input : style.input_invalid
					}
				/>
				<input
					name="comfirmPassword"
					type="password"
					placeholder="Повторить пароль"
					value={user.comfirmPassword}
					onChange={handlerChange}
					onFocus={handelOnFocus}
					className={
						valid.comfirmPassword
							? style.input
							: style.input_invalid
					}
				/>
				<CustomSubmitButton text="Поехали" />
			</form>
			<LoginLinkBlock />
		</div>
	);
}
