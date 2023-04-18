import {Home, Projects, SocialMedia} from "../components/Content";
import {changeTheme, changeWebsiteContent} from "./Actions";

export function ContentState(content) {
    return content === "social-media" ? <SocialMedia/> : content === "projects" ? <Projects/> : <Home/>
}

export function Theme(theme) {
    return theme ? "--text-color: 255, 255, 255; --background-color: 0, 0, 0; --primary-color: 254, 138, 0;" : "--text-color: 0, 0, 0; --background-color: 255, 255, 255; --primary-color: 254, 138, 0";
}

export const mapStateToProps = (state) => ({
    contentState: state.content,
    darkTheme: state.darkTheme,
});

export const mapDispatchToProps = (dispatch) => ({
    changeWebsiteContent: (content) => dispatch(changeWebsiteContent(content)),
    changeTheme: (theme) => dispatch(changeTheme(theme))
})