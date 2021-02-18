import {
	GET_ALL_CONTENT,
	GET_CONTENT,
	RECIPE_STATUS,
	GET_ALL_CATEGORY,
} from "../constants/content";

export const getAllRecipes = (payload) => ({
	type: GET_ALL_CONTENT,
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

export const allCategory = (payload) => ({
	type: GET_ALL_CATEGORY,
	payload,
});
