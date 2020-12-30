import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import Header from "./component/Header/Header";

export default function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/login" component={LoginRegisterPage} />
				<Route path="/registration" component={LoginRegisterPage} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}
