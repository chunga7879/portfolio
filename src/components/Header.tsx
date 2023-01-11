import logo from "../images/logo.png";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <header className="app-header">
            <a href="/" className="logo">
                <img src={logo} className="img" alt="logo" />
            </a>
            <div className="menu-wrap">
                <ul className="menu">
                    <li>
                        <Link to="./education" className="each">Education</Link>
                    </li>
                    <li>
                        <Link to="./projects/1" className="each">Project</Link>
                    </li>
                    <li>
                        <Link to="./experience" className="each">Experience</Link>
                    </li>
                    <li>
                        <Link to="./documents" className="each">Document</Link>
                    </li>
                </ul>
            </div>

        </header>
    );
}


