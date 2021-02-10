import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedInSelector, getUserToken } from "../../redux/reducer/session";
import { testToken } from "../../redux/operations/sessionOperations";

function PrivateRoute({ children, ...restProps }) {
	const dispatch = useDispatch();
	const token = useSelector(getUserToken);
	const isLoggedIn = useSelector(isLoggedInSelector);

	useEffect(() => {
		//Тестируем токен каждый раз когда заходим на закрытый роут
		//Если срок годности токена вышел то разлогиниваемся
		//Для мелких серверов я б такое не использовал увеличивается нагрузка на сервер
		//Посмотрим как это сервер будет держатся если что удалить expiresIn: process.env.JWT_EXPIRES
		//На сервере тогда будет условно бесконечный токен
		dispatch(testToken(token));
	});

	return (
		<Route
			{...restProps}
			render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
		/>
	);
}

export default PrivateRoute;
