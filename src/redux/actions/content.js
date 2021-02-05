import {
	GET_ALL_CONTENT,
	GET_ALL_USER_CONTENT,
	GET_CONTENT,
	RECIPE_STATUS,
} from "../constants/content";

export const getAllRecipes = (payload) => ({
	type: GET_ALL_CONTENT,
	payload,
});

export const allUserRecipes = (payload) => ({
	type: GET_ALL_USER_CONTENT,
	payload,
});

export const getRecipe = (payload) => ({
	type: GET_CONTENT,
	payload,
});

export const recipeStatus = (payload) => ({
	type: RECIPE_STATUS,
	payload,
});
