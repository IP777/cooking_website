import { connect } from "react-redux";
import { login, registration } from "../redux/operations/sessionOperations";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";

const mapDispatchToProps = {
	login,
	registration,
};

export default connect(null, mapDispatchToProps)(LoginRegisterPage);
