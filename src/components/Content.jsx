import '../styles/Content.scss';
import { ReactComponent as Icon } from '../graphics/logo.svg';
import React from "react";

export function Home() {
    return (
        <div className="home">
            <Icon className="icon"/>
            <p className="text font2">Welcome to my webpage! My name is Auxdible. I am a 16 year old Full Stack Developer located in the United States.
                I am certified in Front End Development and have been working on building my portfolio. If you have any inquiries please contact me on my Social Media or Discord!</p>
        </div>
    )
}
export function SocialMedia() {
    return (
        <div className="social-media">
            <p className="text unclickables font2"><span class="unclickable"><i className="fa-brands fa-discord"></i> Auxdible#3003</span></p>
            <ul className="sm-list">
                <li className="sm-element">
                    <span><a href="https://github.com/Auxdible" className="text sm font2"><i className="fa-brands fa-github"></i> GitHub</a></span>
                </li>
                <li className="sm-element">
                    <span><a href="https://www.youtube.com/channel/UCOE_IxVOdNtejqGqmrdRWZA" className="text sm font2"><i className="fa-brands fa-youtube"></i> YouTube</a></span>
                </li>
                <li className="sm-element">
                    <span><a href="https://www.reddit.com/user/Auxdible" className="text sm font2"><i className="fa-brands fa-reddit-alien"></i> Reddit</a></span>
                </li>
                <li className="sm-element">
                    <span><a href="https://steamcommunity.com/id/auxdible" className="text sm font2"><i className="fa-brands fa-steam"></i> Steam</a></span>
                </li>

            </ul>
        </div>
    )
}
export function Projects() {
    return (
        <div className="projects">
            <ul className="project-list">
                <li className="project-element">
                    <span className="text"><span className="project-date-type">2023 / Project</span> <a href="https://github.com/Auxdible/auxdibot" className="text project-link font3">Auxdibot</a></span>
                </li>
                <li className="project-element">
                    <span className="text"><span className="project-date-type">2023 / Project</span> <a href="https://weather.auxdible.me" className="text project-link font3">Weather App</a></span>
                </li>
                <li className="project-element">
                    <span className="text"><span className="project-date-type">2023 / Certification</span> <a href="https://github.com/Auxdible/fcc_rdb_projects" className="text project-link font3">RDB Projects</a></span>
                </li>
                <li className="project-element">
                    <span className="text"><span className="project-date-type">2023 / Portfolio</span> <a href="https://github.com/Auxdible/auxdible.github.io" className="text project-link font3">Portfolio Website</a></span>
                </li>



            </ul>
        </div>
    )
}