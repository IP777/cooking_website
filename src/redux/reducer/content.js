import { GET_ALL_CONTENT, GET_ALL_CATEGORY } from "../constants/content";

const initialState = {
	allRecipes: [],
	allCategory: [],
};

export default function content(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_CONTENT:
			return { ...state, allRecipes: payload };
		case GET_ALL_CATEGORY:
			return { ...state, allCategory: payload };

		default:
			return state;
	}
}

export const allRecipes = (state) => state.content.allRecipes;
export const allCategoryState = (state) => state.content.allCategory;
