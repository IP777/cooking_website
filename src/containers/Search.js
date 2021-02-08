import { connect } from "react-redux";
import {
	searchForIngridientsRecipes,
	searchForNameRecipes,
	searchForCategoryRecipes,
} from "../redux/operations/contentOperation";
import Search from "../component/Search/Search";

const mapDispatchToProps = {
	searchForNameRecipes,
	searchForCategoryRecipes,
	searchForIngridientsRecipes,
};

export default connect(null, mapDispatchToProps)(Search);
