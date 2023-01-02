import logo from "../images/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export function Header() {
    return (
        <div className="app-header">
            <div className="navbar">
                <a href="/" className="logo">
                    <img src={logo} className="img" alt="logo image" />
                </a>
                <ul className="menu">
                    <li>
                        <Link to="./education" className="each">Education</Link>
                    </li>
                    <li>
                        <Link to="./projects" className="each">Project</Link>
                    </li>
                    <li>
                        <Link to="./experience" className="each">Experience</Link>
                    </li>
                    <li>
                        <Link to="./documents" className="each">Document</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}


