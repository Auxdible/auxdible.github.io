export function Navigation({contentState, changeWebsiteContent}) {

    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-element">
                    <span className="text">
                        {contentState === "home" ? <i className="bullet">•</i> : ""}
                        <a href="/#home" className={`text nav-text font4${contentState === "home" ? " selected" : ""}`} onClick={() => changeWebsiteContent("home")}>Home</a>
                    </span>
                </li>
                <li className="nav-element">
                    <span className="text">
                        {contentState === "social-media" ? <i className="bullet">•</i> : ""}
                        <a href="/#social-media" className={`text nav-text font4${contentState === "social-media" ? " selected" : ""}`} onClick={() => changeWebsiteContent("social-media")}>Social Media</a>
                    </span>
                </li>
                <li className="nav-element">
                    <span className="text">
                        {contentState === "projects" ? <i className="bullet">•</i> : ""}
                        <a href="/#projects" className={`text nav-text font4${contentState === "projects" ? " selected" : ""}`} onClick={() => changeWebsiteContent("projects")}>Projects</a>
                    </span>
                </li>
            </ul>
        </nav>
    )
}