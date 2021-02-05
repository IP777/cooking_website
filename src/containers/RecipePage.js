import { connect } from "react-redux";
import {
	getRecipeFromID,
	deleteRecipeFromID,
} from "../redux/operations/contentOperation";
import { loadRecipe, getRecipeStatus } from "../redux/reducer/recipe";
import { getUser, getUserToken } from "../redux/reducer/session";
import RecipePage from "../pages/RecipePage/RecipePage";
import { recipeStatus, getRecipe } from "../redux/actions/content";

const mapStateToProps = (state) => ({
	fetchRecipe: loadRecipe(state),
	getRecipeStatus: getRecipeStatus(state),
	userName: getUser(state).userName,
	userToken: getUserToken(state),
});

const mapDispatchToProps = {
	getRecipeFromID,
	deleteRecipeFromID,
	recipeStatus,
	getRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
