import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/auth";
const store = configureStore({
    reducer: {
        authReducer,
    },
    preloadedState: loadFromLocalStorage(),
});
export type RootState = ReturnType<typeof store.getState>;
function saveToLocalStorage(state:RootState) {
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem("reduxStore", serialState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("reduxStore");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;