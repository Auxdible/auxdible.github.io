import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../redux/Objects";
import Page from "./Page";
import { ReactComponent as LightModeIcon } from '../graphics/sun-svgrepo-com.svg';
import { ReactComponent as DarkModeIcon } from '../graphics/moon-svgrepo-com.svg';

export const Connected = connect(mapStateToProps, mapDispatchToProps)(function Container({ darkTheme,contentState,changeWebsiteContent,changeTheme }) {
    return (
        <div id="page">
            <div className="frame-div">
                <div className="frame frame-top"></div>
                <div className="frame frame-left"></div>
                <div className="frame frame-right"></div>
                <div className="frame frame-bottom"></div>
            </div>
            <nav className="nav-top">
                <a className="text font2" href="./">Portfolio</a>
                <button className="text theme-button" onClick={() => changeTheme(!darkTheme)}>{darkTheme ? <DarkModeIcon className="dark-mode-icon"/> : <LightModeIcon className="light-mode-icon"/>}</button>
                <a className="text font2">WIP Site</a>
            </nav>
            <Page contentState={contentState} changeWebsiteContent={changeWebsiteContent} changeTheme={changeTheme}/>
        </div>

    )
});