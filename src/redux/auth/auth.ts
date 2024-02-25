import { createSlice } from "@reduxjs/toolkit";
export interface IAuthState {
    accessToken: string,
}
const initialAuthState: IAuthState = { accessToken: "" };
const authSlice = createSlice({
    name: "authenticaiton",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.accessToken = action.payload.accessToken
        },
        logout(state) {
            state = {accessToken : ""};
            return state
        }
    },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;