import { connect } from "react-redux";
import { loginWithResponse } from "../redux/operations/sessionOperations";
import LoginPage from "../pages/LoginPage/LoginPage";

const mapDispatchToProps = {
	loginWithResponse,
};

export default connect(null, mapDispatchToProps)(LoginPage);
