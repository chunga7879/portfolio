import home1 from "../images/home1.png";
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import React from "../images/React.png";
import {useState} from "react";
import UBC_Logo from "../images/UBC_Logo.jpg";

export default function Education() {
    const [page, setPage] = useState(1);

    const onClickPrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const onClickNext = () => {
        if (page < 2) {
            setPage(page + 1);
        }
    }

    return (
        <div className="education">
            <div className="s1"></div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                {page === 1 &&  <FirstScene />}
                {page === 2 &&  <SecondScene />}
                <div className="icons">
                    {page !== 1 && <CiCircleChevLeft className="icon1" onClick={onClickPrev}/>}
                    {page !== 2 && <CiCircleChevRight className="icon2" onClick={onClickNext} />}
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
                <img src={UBC_Logo} alt="ubc logo"/>
                <div className="info">
                    <h1>Computer Science in BSc</h1>
                    <h1>Sept 2019 ~ Expected May 2023</h1>
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
                <div className="left">
                    <div className="course one">
                        <h2>CPSC 310(A+) CPSC 410(A)</h2>
                        <p>Contents: Design, Construct and Validate Software Systems</p>
                        <ul className="details">
                            <li>Read/Delete/List/Query UBC courses and rooms</li>
                            <li>DSL to make GIF Animation</li>
                            <li>Program Analysis for run time errors and possible input values</li>
                        </ul>
                    </div>
                    <div className="course two">
                        <h2>CPSC 322(A) CPSC 422(A)</h2>
                        <p>Contents: Principles and Applications of artificial intelligence</p>
                        <ul className="details">
                            <li>Algorithms for problem-solving and planning (Representation & Reasoning)</li>
                            <li>NLP understanding</li>
                            <li>Implementation of intelligent computational systems</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="course three">
                        <h2>CPSC 304(A+) CPSC 404(CIP)</h2>
                        <p>Contents: Database system and Physical database design </p>
                        <ul className="details">
                            <li>Design ER Models and PHP website using sql queries for TV programs</li>
                            <li>Learn how physical database work (how disk works)</li>
                            <li>Finding query optimization and Managing concurrency/recovery</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}