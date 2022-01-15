import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
	name: "stats",
	initialState: {
		vaccine:'',
        user:"",
        health:"",
        session:""
	},
	reducers: {
		setDataVaksin: (state, action) => {
			state.vaccine = action.payload.vaccine
            // state.user = action.payload.user
            // state.health = action.payload.health
            // state.session = action.payload.session
		},
		
	},
});

export const { setData } = dashboardSlice.actions;
export default dashboardSlice.reducer;