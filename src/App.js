import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainPage from "./containers/MainPage";
import LoginRegisterPage from "./containers/LoginRegister";
import RecipePage from "./containers/RecipePage";
import AddRecipePage from "./containers/AddRecipePage";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import GuestRoute from "./component/GuestRoute/GuestRoute";
import Guard from "./component/Guard/Guard";

export default function App() {
	return (
		<Guard>
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
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
				<PrivateRoute path="/update">
					<Route component={AddRecipePage} />
				</PrivateRoute>
				<PrivateRoute path="/myrecipe">
					<Route component={MainPage} />
				</PrivateRoute>
				<Redirect to="/" />
			</Switch>
		</Guard>
	);
}
