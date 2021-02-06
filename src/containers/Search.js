import { connect } from "react-redux";
import {
	searchForIngridientsRecipes,
	searchForNameRecipes,
} from "../redux/operations/contentOperation";
import Search from "../component/Search/Search";

const mapDispatchToProps = {
	searchForIngridientsRecipes,
	searchForNameRecipes,
};

export default connect(null, mapDispatchToProps)(Search);
