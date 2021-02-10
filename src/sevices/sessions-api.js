import { API_URL } from "../constants/session";

export const registrationRequestApi = (data) => {
	return fetch(`${API_URL}/user/add/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

export const loginRequestApi = (data) => {
	return fetch(`${API_URL}/user/login/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

export const logoutRequestApi = (data) => {
	return fetch(`${API_URL}/user/logout/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.ok) {
			return res;
		}
		return res.json();
	});
};

export const testTokenRequestApi = (userToken) => {
	return fetch(`${API_URL}/user/test/`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userToken}`,
		},
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};
