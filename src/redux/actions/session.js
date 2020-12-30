import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
} from "../constants/session";

export const loginRequest = () => ({
	type: LOGIN_REQUEST,
});

export const loginSuccess = (resp) => ({
	type: LOGIN_SUCCESS,
	payload: { resp },
});

export const loginError = (error) => ({
	type: LOGIN_ERROR,
	payload: { error },
});

export const logOut = () => ({
	type: LOGOUT,
});
