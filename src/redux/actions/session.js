import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
	SET_USER_TOKEN,
	SET_USER_EMAIL,
} from "../constants/session";

export const setUserToken = (payload) => ({
	type: SET_USER_TOKEN,
	payload,
});

export const setUserEmail = (payload) => ({
	type: SET_USER_EMAIL,
	payload,
});

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
