import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../../redux/reducer/session";
//import { LOGIN_ROUTE } from "../../constants/router";

function PrivateRoute({ children, ...restProps }) {
	const isLoggedIn = useSelector(isLoggedInSelector);

	return (
		<Route
			{...restProps}
			render={() =>
				isLoggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
