import { combineReducers } from "redux";
import { LOGIN_SUCCESS, LOGOUT } from "../constants/session";

const user = (state = null, { type, payload }) => {
	switch (type) {
		case LOGIN_SUCCESS:
			return payload.resp.user;
		case LOGOUT:
			return null;
		default:
			return state;
	}
};

const authentification = (state = false, { type }) => {
	switch (type) {
		case LOGIN_SUCCESS:
			return true;
		case LOGOUT:
			return null;
		default:
			return state;
	}
};

const token = (state = null, { type, payload }) => {
	switch (type) {
		case LOGIN_SUCCESS:
			return payload.resp.token;
		case LOGOUT:
			return null;
		default:
			return state;
	}
};

const error = (state = null, { type, payload }) => {
	switch (type) {
		case LOGIN_SUCCESS:
			return payload.error;
		default:
			return state;
	}
};

export default combineReducers({
	user,
	authentification,
	token,
	error,
});
