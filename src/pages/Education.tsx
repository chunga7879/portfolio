import home1 from "../images/home1.png";
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import React from "../images/React.png";
import {useState} from "react";
import UBC_Logo from "../images/UBC_Logo.jpg";

export default function Education() {
    const [page, setPage] = useState(0);

    const onClickPrev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const onClickNext = () => {
        if (page < 1) {
            setPage(page + 1);
        }
    }

    return (
        <div className="education">
            <div className="s1"></div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                {page == 0 &&  <FirstScene />}
                {/*{page == 1 &&  <SecondScene />}*/}
                {/*{page == 2 &&  <ThirdScene />}*/}
                {/*{page == 3 &&  <FourthScene />}*/}
                <div className="icons">
                    <CiCircleChevLeft className="icon1" onClick={onClickPrev}/>
                    <CiCircleChevRight className="icon2" onClick={onClickNext} />
                </div>
            </div>
            <div className="s2"></div>

        </div>
    );
}

function FirstScene() {
    return (
        <div className="inner">
            <div className="subScene first">
                <img src={UBC_Logo} alt="ubc logo image"/>
                <div className="info">
                    <h1>Major: Computer Science in BSc</h1>
                    <h1>Graduation: Expected May 2023</h1>
                    <h1>GPA: 4.30/4.33</h1>
                </div>
            </div>
        </div>
    )
}

function SecondScene() {
    return (
        <div className="inner">
            <div className="subScene second">
                <div className="course one">
                    <h2>CPSC 310/ CPSC 410</h2>
                    <p>Contents: Design, Construct and Validate Software Systems</p>
                    <p>Implementing several software systems/projects</p>
                    <ul>
                        <li>Read/Delete/List/Query UBC courses and rooms</li>
                        <li>DSL to make GIF Animation</li>
                        <li>Program Analysis for run time errors and possible input values</li>
                    </ul>
                </div>
                <div className="course two">
                    <h2>CPSC 322/ CPSC 422</h2>
                    <p>Contents: </p>
                    <p></p>
                </div>
                <div className="course three">
                    <h2>CPSC 304/ CPSC 404</h2>
                    <p>Contents: </p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}