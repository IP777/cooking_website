import { connect } from "react-redux";
import { getUserToken } from "../redux/reducer/session";
import { postRecipe } from "../redux/operations/contentOperation";
import AddRecipePage from "../pages/AddReceptPage/AddRecipePage";

const mapStateToProps = (state) => ({
	userToken: getUserToken(state),
});

const mapDispatchToProps = {
	postRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);
