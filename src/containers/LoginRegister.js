import { connect } from "react-redux";
import { login, registration } from "../redux/operations/sessionOperations";
import { setUserRequest } from "../redux/actions/session";
import { isLoadedStatus } from "../redux/reducer/session";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";

const mapStateToProps = (state) => ({
	isLoaded: isLoadedStatus(state),
});

const mapDispatchToProps = {
	login,
	registration,
	setUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterPage);
