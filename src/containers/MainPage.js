import { connect } from "react-redux";
import { allRecipes } from "../redux/reducer/content";
import { getUser } from "../redux/reducer/session";
import {
	getAllrecipes,
	getAllUserRecipes,
} from "../redux/operations/contentOperation";
import MainPage from "../pages/MainPage/MainPage";

const mapStateToProps = (state) => ({
	recipes: allRecipes(state),
	user: getUser(state),
});

const mapDispatchToProps = {
	getAllrecipes,
	getAllUserRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
