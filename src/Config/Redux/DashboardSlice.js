import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
	name: "stats",
	initialState: {
		vaccine:0,
        user:0,
        health:0,
        session:0
	},
	reducers: {
		setStatVaksin: (state, action) => {
			state.vaccine = action.payload.vaccine
		},
		setStatHealth: (state, action) => {
            state.health = action.payload.health
		},
		setStatSession: (state, action) => {
            state.session = action.payload.session
		},
		setStatUser: (state, action) => {
			state.user = action.payload.user
		}
		
	},
});

export const { setStatVaksin, setStatHealth, setStatSession, setStatUser } = dashboardSlice.actions;
export default dashboardSlice.reducer;