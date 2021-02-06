import { API_URL } from "../constants/session";

export const getAllcontentRequestApi = () => {
	return fetch(`${API_URL}/ricepes/all`, {
		method: "GET",
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

export const getAlluserContentRequestApi = (userName) => {
	console.log(userName);
	return fetch(`${API_URL}/ricepes/user/${userName}`, {
		method: "GET",
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

// prettier-ignore
export const postRecipeRequestApi = ({ createRecipe, userToken }) => {
	return fetch(`${API_URL}/ricepes/create`, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${userToken}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createRecipe),
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

// prettier-ignore
export const updateRecipeRequestApi = ({ createRecipe, userToken, recipeID }) => {
	return fetch(`${API_URL}/ricepes/${recipeID}`, {
		method: "PATH",
		headers: {
			"Authorization": `Bearer ${userToken}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createRecipe),
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

export const getRecipeFromIDRequestApi = (id) => {
	return fetch(`${API_URL}/ricepes/recipe/${id}`, {
		method: "GET",
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

// prettier-ignore
export const deleteRecipeFromIDRequestApi = ({ id, userToken }) => {
	return fetch(`${API_URL}/ricepes/${id}`, {
		method: "DELETE",
		headers: {
			"Authorization": `Bearer ${userToken}`,
			"Content-Type": "application/json",
		},
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

export const getRecipeFromIngridientRequestApi = (ingridient) => {
	return fetch(`${API_URL}/recipes/ingredient`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(ingridient),
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};

export const getRecipeFromNameRequestApi = (recipe_name) => {
	return fetch(`${API_URL}/ricepes/name`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(recipe_name),
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res;
	});
};
