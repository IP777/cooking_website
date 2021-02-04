import { connect } from "react-redux";
import { allRecipes } from "../redux/reducer/content";
import { getAllrecipes } from "../redux/operations/contentOperation";
import MainPage from "../pages/MainPage/MainPage";

const mapStateToProps = (state) => ({
	recipes: allRecipes(state),
});

const mapDispatchToProps = {
	getAllrecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
