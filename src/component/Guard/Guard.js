import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedInSelector } from "../../redux/reducer/session";
import { getInitialData } from "../../redux/operations/sessionOperations";

const Guard = ({ children }) => {
	const dispatch = useDispatch();
	const isLoaded = useSelector(isLoggedInSelector);

	useEffect(() => {
		dispatch(getInitialData());
	}, []);

	return isLoaded ? children : null;
};

export default Guard;
