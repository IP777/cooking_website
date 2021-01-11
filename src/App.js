import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import AddRecipePage from "./pages/AddReceptPage/AddRecipePage";

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/login" component={LoginRegisterPage} />
				<Route path="/registration" component={LoginRegisterPage} />
				<Route path="/recipe" component={RecipePage} />
				<Route path="/add" component={AddRecipePage} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}
