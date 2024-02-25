import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";
export interface IAuthState {
    accessToken: string,
}
const initialAuthState: IAuthState = { accessToken: "" };
const authSlice = createSlice({
    name: "authenticaiton",
    initialState: initialAuthState,
    reducers: {
        login(state, action: PayloadAction<{accessToken: string}>) {
            console.log(action)
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