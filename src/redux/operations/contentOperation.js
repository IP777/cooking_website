import {
	getAllRecipes,
	recipeStatus,
	getRecipe,
	allCategory,
} from "../actions/content";
import {
	getAllcontentRequestApi,
	getAlluserContentRequestApi,
	getRecipeFromIDRequestApi,
	getRecipeFromNameRequestApi,
	getRecipeFromCategoryRequestApi,
	getRecipeFromIngridientRequestApi,
	deleteRecipeFromIDRequestApi,
	postRecipeRequestApi,
	updateRecipeRequestApi,
	getAllcategoryRequestApi,
} from "../../sevices/content-api";
import { allCategoryState } from "../reducer/content";

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
			dispath(getAllRecipes(response[0].userRecipes));
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
		const response = await updateRecipeRequestApi(credential);
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

export const searchForNameRecipes = (recipe_name) => async (dispath) => {
	try {
		const response = await getRecipeFromNameRequestApi(recipe_name);
		if (!response.error) {
			dispath(getAllRecipes(response));
		}
		//  else {
		// 	console.log(response.error);
		// }
		return response;
	} catch (error) {
		throw new Error(error);
	}
};

export const searchForCategoryRecipes = (recipe_name) => async (dispath) => {
	try {
		const response = await getRecipeFromCategoryRequestApi(recipe_name);
		if (!response.error) {
			dispath(getAllRecipes(response));
		} else {
			console.log(response.error);
		}
	} catch (error) {
		throw new Error(error);
	}
};

export const searchForIngridientsRecipes = (ingridient) => async (dispath) => {
	try {
		const response = await getRecipeFromIngridientRequestApi(ingridient);
		if (!response.error) {
			dispath(getAllRecipes(response));
		} else {
			console.log(response.error);
		}
	} catch (error) {
		throw new Error(error);
	}
};

export const getAllCategory = () => async (dispath) => {
	try {
		const response = await getAllcategoryRequestApi();
		dispath(allCategory(response));
		return response;
	} catch (error) {
		throw new Error(error);
	}
};
