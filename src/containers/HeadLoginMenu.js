import { connect } from "react-redux";
import { getUser, isLoggedInSelector } from "../redux/reducer/session";
import { logout } from "../redux/operations/sessionOperations";
import HeaderLoginMenu from "../component/Header/HeaderLoginMenu/HeaderLoginMenu";

const mapStateToProps = (state) => ({
	user: getUser(state),
	isLogin: isLoggedInSelector(state),
});

const mapDispatchToProps = {
	logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLoginMenu);
