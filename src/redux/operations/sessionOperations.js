import {
	setUserRequest,
	setUserToken,
	setUserEmail,
	setUserName,
	isLoaded,
} from "../actions/session";
import { getRecipe, recipeStatus } from "../actions/content";
import {
	loginRequestApi,
	registrationRequestApi,
	logoutRequestApi,
	testTokenRequestApi,
} from "../../sevices/sessions-api";
import { LOCAL_STORAGE_KEY } from "../../redux/constants/session";

export const registration = (credentials) => async (dispath) => {
	try {
		const response = await registrationRequestApi(credentials);
		if (!response.error) {
			dispath(setUserEmail(response.email));
			dispath(setUserName(response.name));
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response));
		} else {
			console.log(response.error);
		}
	} catch (error) {
		throw new Error(error);
	}
};

export const login = (credentials) => async (dispath) => {
	try {
		const response = await loginRequestApi(credentials);
		if (!response.error) {
			dispath(setUserToken(response.token));
			dispath(setUserEmail(response.email));
			dispath(setUserName(response.name));
			dispath(setUserRequest(""));
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response));
		} else {
			//console.log(response.error);
			dispath(setUserRequest(response));
		}
	} catch (error) {
		throw new Error(error);
	}
};

export const logout = (credentials) => async (dispatch) => {
	const response = await logoutRequestApi(credentials);
	if (!response.error) {
		dispatch(setUserToken(""));
		dispatch(setUserEmail(""));
		dispatch(setUserName(""));
		dispatch(getRecipe({}));
		dispatch(recipeStatus(""));

		localStorage.removeItem(LOCAL_STORAGE_KEY);
	} else {
		console.log(response.error);
	}
};

export const getInitialData = () => (dispatch) => {
	const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

	if (userData) {
		dispatch(setUserToken(userData.token));
		dispatch(setUserName(userData.name));
		dispatch(setUserEmail(userData.email));
	}
	dispatch(isLoaded(true));
};

export const testToken = (token) => async (dispatch) => {
	const response = await testTokenRequestApi(token);
	if (response.error) {
		dispatch(logout());
	}
};
