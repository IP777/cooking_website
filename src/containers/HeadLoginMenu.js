import { connect } from "react-redux";
import { getUser } from "../redux/reducer/session";
import HeaderLoginMenu from "../component/Header/HeaderLoginMenu/HeaderLoginMenu";

const mapStateToProps = (state) => ({
	user: getUser(state),
});

export default connect(mapStateToProps)(HeaderLoginMenu);
