import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import RecipePage from "./pages/RecipePage/RecipePage";

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/login" component={LoginRegisterPage} />
				<Route path="/registration" component={LoginRegisterPage} />
				<Route path="/recipe" component={RecipePage} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}
