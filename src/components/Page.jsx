import {Navigation} from "./Navigation";
import {ContentState} from "../redux/Objects";
import '../styles/Navigation.scss'


export default function Page({ contentState, changeWebsiteContent, changeTheme }) {
    const content = ContentState(contentState);
    return (
        <div id="page-content">
            <header id="page-header">
                <h1 className="header text">Auxdible</h1>
                <p className="header-desc text">Full Stack Developer</p>
                <Navigation changeWebsiteContent={changeWebsiteContent} contentState={contentState} />
            </header>
            <section id="content" contentstate={contentState}>
                {content}
            </section>
        </div>
    );
}
