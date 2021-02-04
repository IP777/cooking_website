import { connect } from "react-redux";
import { getRecipeFromID } from "../redux/operations/contentOperation";
import { loadRecipe } from "../redux/reducer/recipe";
import RecipePage from "../pages/RecipePage/RecipePage";

const mapStateToProps = (state) => ({
	fetchRecipe: loadRecipe(state),
});

const mapDispatchToProps = {
	getRecipeFromID,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
