import { connect } from "react-redux";
import { allRecipes } from "../redux/reducer/content";
import { getAllRecipes } from "../redux/actions/content";
import FilterPanel from "../component/FilterPanel/FilterPanel";

const mapStateToProps = (state) => ({
	recipes: allRecipes(state),
});

const mapDispatchToProps = {
	filterCategory: getAllRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
