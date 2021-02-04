import { getAllRecipes, recipeStatus, getRecipes } from "../actions/content";
import {
	getAllcontentRequestApi,
	getRecipeFromIDRequestApi,
	postRecipeRequestApi,
} from "../../sevices/content-api";

export const getAllrecipes = () => async (dispath) => {
	try {
		const response = await getAllcontentRequestApi();
		if (!response.error) {
			dispath(getAllRecipes(response));
		} else {
			console.log(response.error);
		}
	} catch (error) {
		throw new Error(error);
	}
};

export const postRecipe = (credential) => async (dispath) => {
	try {
		const response = await postRecipeRequestApi(credential);
		if (!response.error) {
			dispath(recipeStatus("Recipe is posted."));
		}
	} catch (error) {
		dispath(recipeStatus(error.toString()));
	}
};

export const getRecipeFromID = (id) => async (dispath) => {
	try {
		const response = await getRecipeFromIDRequestApi(id);
		if (!response.error) {
			dispath(recipeStatus("Recipe is loaded."));
			dispath(getRecipes(response));
		}
	} catch (error) {
		dispath(recipeStatus(error.toString()));
	}
};
