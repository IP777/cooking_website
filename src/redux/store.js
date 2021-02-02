import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sessionReducer from "./reducer/session";
// import thunk from "./middleware/thunk";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
	session: sessionReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
