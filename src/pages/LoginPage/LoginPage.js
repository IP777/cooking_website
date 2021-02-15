import { useState } from "react";
import { toast } from "react-toastify";
import style from "./LoginPage.module.css";
import LoginLinkBlock from "../../component/LoginLinkBlock/LoginLinkBlock";
import CustomSubmitButton from "../../assets/customSubmitButton/CustomSubmitButton";

export default function LoginPage({ loginWithResponse }) {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [valid, setValid] = useState({
		email: true,
		password: true,
	});

	const submitHandler = async (e) => {
		e.preventDefault();

		if (user.email.length === 0 || !user.email.includes("@")) {
			alert("Введите правильно email");
			setValid({ ...valid, email: false });
			return;
		}

		if (user.password.length <= 3) {
			alert("Пароль должен состоять из не менее 3 цыфр.");
			setValid({ ...valid, password: false, comfirmPassword: false });
			return;
		}

		const loginResp = await loginWithResponse({
			email: user.email,
			password: user.password,
		});

		if (loginResp.error) {
			// toast.error(loginResp.error);
			alert(loginResp.error);

			if (loginResp.error.includes("пароль")) {
				setValid({ ...valid, password: false });
			} else {
				setValid({ ...valid, email: false });
			}
		}
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
				<h4 className={style.headText}>Войти</h4>
				<input
					name="email"
					type="text"
					placeholder="email"
					value={user.email}
					onChange={handlerChange}
					onFocus={handelOnFocus}
					className={valid.email ? style.input : style.input_invalid}
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
				<CustomSubmitButton text="Поехали" />
			</form>
			<LoginLinkBlock />
		</div>
	);
}
