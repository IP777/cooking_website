import { connect } from "react-redux";
import { searchForIngridientsRecipes } from "../redux/operations/contentOperation";
import Search from "../component/Search/Search";

const mapDispatchToProps = {
	searchForIngridientsRecipes,
};

export default connect(null, mapDispatchToProps)(Search);
