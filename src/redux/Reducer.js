import {initialState} from "./Store";
import {CHANGE_THEME, CHANGE_WEBSITE_CONTENT} from "./ActionTypes";
import {setDarkTheme} from "../index.js";

const reducer = (state = initialState, event) => {
    let newState = { ...state };
    switch (event.type) {
        case CHANGE_WEBSITE_CONTENT:
            newState.content = event.content;
            return newState;
        case CHANGE_THEME:

            setDarkTheme(event.darkTheme);
            newState.darkTheme = event.darkTheme;
            return newState;
        default:
            return state;
    }

}
export default reducer;