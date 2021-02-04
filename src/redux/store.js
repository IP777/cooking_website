import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sessionReducer from "./reducer/session";
import contentReducer from "./reducer/content";
import recipeReducer from "./reducer/recipe";
// import thunk from "./middleware/thunk";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
	session: sessionReducer,
	content: contentReducer,
	recipe: recipeReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
