import { connect } from "react-redux";
import { getAllRecipes } from "../redux/actions/content";
import FilterPanel from "../component/FilterPanel/FilterPanel";

const mapDispatchToProps = {
	filterCategory: getAllRecipes,
};

export default connect(null, mapDispatchToProps)(FilterPanel);
