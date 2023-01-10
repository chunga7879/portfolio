import home1 from "../images/home1.png";
import React from "../images/React.png";
import { BiMenu } from 'react-icons/bi';

export default function Document() {
    return (
        <div className="document">
            <div className="s1"></div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                <div className="inner">
                    <div className="subScene">
                        <BiMenu>Resume</BiMenu>
                        <>Portfolio</>
                        <>Transcript</>

                    </div>
                </div>
            </div>
            <div className="s2"></div>
        </div>
    );
}