import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../../redux/reducer/session";
// import { ROOT_ROUTE } from "../../constants/router";

function GuestRoute({ children, ...restProps }) {
	const isGuestUser = !useSelector(isLoggedInSelector);

	return (
		<Route
			{...restProps}
			render={() =>
				isGuestUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
						}}
					/>
				)
			}
		/>
	);
}

export default GuestRoute;
