import {
	SET_USER_REQUEST,
	SET_USER_TOKEN,
	SET_USER_EMAIL,
	SET_USER_NAME,
	SET_IS_LOADED,
} from "../constants/session";

const initialState = {
	isLoaded: false,
	userToken: "",
	userEmail: "",
	userName: "",
};

export default function user(state = initialState, { type, payload }) {
	switch (type) {
		case SET_IS_LOADED:
			return { ...state, isLoaded: payload };
		case SET_USER_TOKEN:
			return { ...state, userToken: payload };
		case SET_USER_EMAIL:
			return { ...state, userEmail: payload };
		case SET_USER_NAME:
			return { ...state, userName: payload };

		default:
			return state;
	}
}

export const isLoggedInSelector = (state) => Boolean(state.session.userToken);
export const getUser = (state) => state.session;
export const getUserToken = (state) => state.session.userToken;
export const isLoadedSelector = (state) => state.session.isLoaded;
