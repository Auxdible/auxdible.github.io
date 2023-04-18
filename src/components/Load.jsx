import { ReactComponent as Icon } from '../graphics/logo.svg';

export function Load() {
    return (
        <div id="load">
            <div id="load-content">
                <Icon />
                <span id="load-header" className="font4 text">Auxdible</span>
            </div>
        </div>
    )
}