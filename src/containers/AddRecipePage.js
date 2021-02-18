import { connect } from "react-redux";
import { getUserToken } from "../redux/reducer/session";
import { getRecipeStatus } from "../redux/reducer/recipe";
import { allCategoryState } from "../redux/reducer/content";
import { postRecipe, updateRecipe } from "../redux/operations/contentOperation";
import { recipeStatus } from "../redux/actions/content";
import AddRecipePage from "../pages/AddReceptPage/AddRecipePage";

const mapStateToProps = (state) => ({
	userToken: getUserToken(state),
	getRecipeStatus: getRecipeStatus(state),
	categoryArray: allCategoryState(state),
});

const mapDispatchToProps = {
	postRecipe,
	recipeStatus,
	updateRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);
