import { connect } from "react-redux";
import { getUserToken } from "../redux/reducer/session";
import { getRecipeStatus } from "../redux/reducer/recipe";
import { postRecipe } from "../redux/operations/contentOperation";
import { recipeStatus } from "../redux/actions/content";
import AddRecipePage from "../pages/AddReceptPage/AddRecipePage";

const mapStateToProps = (state) => ({
	userToken: getUserToken(state),
	getRecipeStatus: getRecipeStatus(state),
});

const mapDispatchToProps = {
	postRecipe,
	recipeStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);