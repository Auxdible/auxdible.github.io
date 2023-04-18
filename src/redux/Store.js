import {configureStore} from "@reduxjs/toolkit";
import reducer from "./Reducer";


export const initialState = {
    content: "home",
    darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
});

export default store;
