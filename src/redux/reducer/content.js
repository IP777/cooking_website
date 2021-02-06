import { GET_ALL_CONTENT } from "../constants/content";

const initialState = {
	allRecipes: [],
};

export default function content(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_CONTENT:
			return { ...state, allRecipes: payload };

		default:
			return state;
	}
}

export const allRecipes = (state) => state.content.allRecipes;
