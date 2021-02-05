import {
	getAllRecipes,
	allUserRecipes,
	recipeStatus,
	getRecipe,
} from "../actions/content";
import {
	getAllcontentRequestApi,
	getAlluserContentRequestApi,
	getRecipeFromIDRequestApi,
	deleteRecipeFromIDRequestApi,
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

export const getAllUserRecipes = (userName) => async (dispath) => {
	try {
		const response = await getAlluserContentRequestApi(userName);
		if (!response.error) {
			dispath(allUserRecipes(response[0].userRecipes));
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
			dispath(recipeStatus({ message: "Recipe is posted." }));
		} else {
			dispath(recipeStatus(response));
		}
	} catch (error) {
		dispath(recipeStatus({ error: error.toString() }));
	}
};

export const updateRecipe = (credential) => async (dispath) => {
	try {
		const response = await postRecipeRequestApi(credential);
		if (!response.error) {
			dispath(recipeStatus({ message: "Recipe is update." }));
		} else {
			dispath(recipeStatus(response));
		}
	} catch (error) {
		dispath(recipeStatus({ error: error.toString() }));
	}
};

export const getRecipeFromID = (id) => async (dispath) => {
	try {
		const response = await getRecipeFromIDRequestApi(id);
		if (!response.error) {
			dispath(recipeStatus({ message: "Recipe is loaded." }));
			dispath(getRecipe(response));
		}
	} catch (error) {
		dispath(recipeStatus({ error: error.toString() }));
	}
};

export const deleteRecipeFromID = (credential) => async (dispath) => {
	try {
		const response = await deleteRecipeFromIDRequestApi(credential);
		if (!response.error) {
			dispath(recipeStatus({ message: "Recipe is delete." }));
		}
	} catch (error) {
		dispath(recipeStatus({ error: error.toString() }));
	}
};
