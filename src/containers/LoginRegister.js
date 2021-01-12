import { connect } from "react-redux";
import { login } from "../redux/operations/sessionOperations";
// import { isLoggedInSelector } from '../redux/reducers/app/params';
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";

// const mapStateToProps = (state) => ({
//   authenticated: isLoggedInSelector(state),
// });

const mapDispatchToProps = {
	onLogin: login,
};

//export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterPage);
export default connect(null, mapDispatchToProps)(LoginRegisterPage);
