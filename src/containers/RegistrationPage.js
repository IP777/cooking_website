import { connect } from "react-redux";
import { registration } from "../redux/operations/sessionOperations";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

const mapDispatchToProps = {
	registration,
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
