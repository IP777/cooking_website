import { connect } from "react-redux";
import { login } from "../redux/operations/sessionOperations";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";

const mapDispatchToProps = {
	onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginRegisterPage);
