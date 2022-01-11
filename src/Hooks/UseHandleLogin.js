import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Cookies from "universal-cookie";
import { login } from "../Config/Redux/LoginSlice";

export default function useHandleLogin() {
	// const cookies = new Cookies();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogin = (res) => {
		const loginData = {
			username: res.username,
			login: true,
			token:res.token
		};
		dispatch(login(loginData));
		navigate("/");
	};
	return handleLogin;
}