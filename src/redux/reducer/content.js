import { GET_ALL_CONTENT, GET_ALL_USER_CONTENT } from "../constants/content";

const initialState = {
	allRecipes: [],
	allUserRecipes: [],
};

export default function content(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_CONTENT:
			return { ...state, allRecipes: payload };
		case GET_ALL_USER_CONTENT:
			return { ...state, allUserRecipes: payload };

		default:
			return state;
	}
}

export const allRecipes = (state) => state.content.allRecipes;
export const allUserRecipes = (state) => state.content.allUserRecipes;
