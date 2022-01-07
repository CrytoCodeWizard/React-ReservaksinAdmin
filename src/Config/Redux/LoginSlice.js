import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: "auth",
	initialState: {
		username: "",
		token:"",
		login: false,
	},
	reducers: {
		login: (state, action) => {
			state.username = action.payload.username;
			state.login = action.payload.login;
			state.token = action.payload.token
		},
		logout: (state) => {
			state.username = "";
			state.login = false;
		},
	},
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;