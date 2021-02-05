import { GET_CONTENT, RECIPE_STATUS } from "../constants/content";

const initialState = {
	recipeStatus: "",
	loadRecipe: {},
};

export default function recipe(state = initialState, { type, payload }) {
	switch (type) {
		case RECIPE_STATUS:
			return { ...state, recipeStatus: payload };
		case GET_CONTENT:
			return { ...state, loadRecipe: payload };

		default:
			return state;
	}
}

export const loadRecipe = (state) => state.recipe.loadRecipe;
export const getRecipeStatus = (state) => state.recipe.recipeStatus;
