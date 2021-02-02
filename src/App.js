import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
// import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import LoginRegisterPage from "./containers/LoginRegister";
import RecipePage from "./pages/RecipePage/RecipePage";
import AddRecipePage from "./pages/AddReceptPage/AddRecipePage";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import GuestRoute from "./component/GuestRoute/GuestRoute";
import Guard from "./component/Guard/Guard";

export default function App() {
	return (
		<Guard>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<GuestRoute path="/login">
					<Route component={LoginRegisterPage} />
				</GuestRoute>
				<GuestRoute path="/registration">
					<Route component={LoginRegisterPage} />
				</GuestRoute>
				<Route path="/recipe" component={RecipePage} />
				<PrivateRoute path="/add">
					<Route component={AddRecipePage} />
				</PrivateRoute>
				<Redirect to="/" />
			</Switch>
		</Guard>
	);
}
