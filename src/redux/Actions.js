import {CHANGE_THEME, CHANGE_WEBSITE_CONTENT} from "./ActionTypes";



export const changeWebsiteContent = (content) => ({
    type: CHANGE_WEBSITE_CONTENT,
    content,
});

export const changeTheme = (darkTheme) => {
    return { type: CHANGE_THEME,
    darkTheme, }
}

