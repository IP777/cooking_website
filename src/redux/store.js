import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sessionReducer from "./reducer/session";
import thunk from "./middleware/thunk";

const rootReducer = combineReducers({
	session: sessionReducer,
});

const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
