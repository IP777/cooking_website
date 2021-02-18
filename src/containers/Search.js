import { connect } from "react-redux";
import {
	searchForIngridientsRecipes,
	searchForNameRecipes,
	searchForCategoryRecipes,
	getAllCategory,
} from "../redux/operations/contentOperation";
import { allCategoryState } from "../redux/reducer/content";
import Search from "../component/Search/Search";

const mapStateToProps = (state) => ({
	category: allCategoryState(state),
});

const mapDispatchToProps = {
	searchForNameRecipes,
	searchForCategoryRecipes,
	searchForIngridientsRecipes,
	getAllCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
