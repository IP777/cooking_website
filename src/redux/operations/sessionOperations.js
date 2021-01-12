import { setUserToken, setUserEmail } from "../actions/session";
import { loginRequestApi } from "../../sevices/sessions-api";

export const login = (credentials) => async (dispath) => {
	try {
		const response = await loginRequestApi(credentials);
		if (!response.error) {
			dispath(setUserToken(response.token));
			dispath(setUserEmail(credentials.email));
			localStorage.setItem("userData", JSON.stringify(response));
		} else {
			console.log(response.error);
		}
	} catch (error) {
		throw new Error(error);
	}
};
