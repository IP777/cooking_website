import { setUserToken, setUserEmail, setUserName } from "../actions/session";
import { loginRequestApi } from "../../sevices/sessions-api";
import { LOCAL_STORAGE_KEY } from "../../redux/constants/session";

export const login = (credentials) => async (dispath) => {
	try {
		const response = await loginRequestApi(credentials);
		if (!response.error) {
			dispath(setUserToken(response.token));
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

export const logout = () => (dispatch) => {
	dispatch(setUserToken(""));
	// dispatch(setUserId(''));
	dispatch(setUserName(""));

	localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export const getInitialData = () => (dispatch) => {
	const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

	if (userData) {
		dispatch(setUserToken(userData.token));
		dispatch(setUserName(userData.name));
		dispatch(setUserEmail(userData.email));
	}

	//dispatch(setIsLoaded(true));
};
