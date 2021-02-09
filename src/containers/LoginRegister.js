import { connect } from "react-redux";
import { login, registration } from "../redux/operations/sessionOperations";
import { isLoadedStatus } from "../redux/reducer/session";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";

const mapStateToProps = (state) => ({
	isLoggin: isLoadedStatus(state),
});

const mapDispatchToProps = {
	login,
	registration,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterPage);
