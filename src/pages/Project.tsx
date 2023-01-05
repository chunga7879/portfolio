import {useState} from "react";
import home1 from "../images/home1.png";
import project_1_ex1_1 from "../images/project_1_ex1_1.png";
import project_1_ex1_2 from "../images/project_1_ex1_2.png";
import project_1_ex2 from "../images/project_1_ex2.gif";
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import React from "../images/React.png";

export default function Project() {
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
        <div className="project">
            <div className="s1"></div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                {page === 0 &&  <FirstScene />}
                {page == 1 &&  <SecondScene />}

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
                <div className="examples">
                    <div className="codes">
                        <img src={project_1_ex1_1} alt="halloween code" className="code one" />
                        <img src={project_1_ex1_2} alt="halloween code" className="code two" />
                    </div>
                    <img src={project_1_ex2} alt="halloween gif" className="gif"/>
                </div>
                <div className="info">
                    <div className="basic">
                        <h2>Image Animation Creator DSL</h2>
                        <p className="one">Group Project(5): 2022.09 ~ 2022.10</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>Domain Specific Language to allow users to modify images and combine multiple images to create animated gif</p>
                        </div>
                        <div className="two">
                            <h3>Role</h3>
                            <p>Implementing built-in functions & Conducting User study</p>
                        </div>
                        <div className="two">
                            <h3>Skills</h3>
                            <p>JAVA</p>
                        </div>
                        <button><a href="https://github.students.cs.ubc.ca/CPSC410-2022W-T1/Project1Group15">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SecondScene() {
    return (
        <div className="inner">
            <div className="subScene second">
                <div className="examples">
                    <video className="video" autoPlay={true} controls={true}>
                        <source src={require("../videos/project2.mp4")} type="video/mp4" />
                    </video>
                    <button><a href="https://github.students.cs.ubc.ca/CPSC410-2022W-T1/Project1Group15">Github</a></button>
                </div>
                <div className="info">
                    <div className="basic">
                        <h2>SaaS Application: Tournament Organizer</h2>
                        <p className="one">Group Project(6): 2022.01 ~ 2022.04</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>This project builds a solution to allow easy administration of multiple tournaments with the ability for amazon employees
                                to self-register and share availability based on format of specific tournaments.
                            </p>
                        </div>
                        <div className="two">
                            <h3>Role</h3>
                            <p>Front-end Manager - Design layouts using Figma & Implementing Components</p>
                            <ul>
                                <li>Show calendar for tournaments</li>
                                <li>Listing/Creating/Deleting Tournaments</li>
                                <li>Listing/Getting/Creating/Joining/Managing teams</li>
                                <li>Generating/Managing schedules</li>
                                <li>Recording/Getting Match</li>
                            </ul>
                        </div>
                        <div className="two">
                            <h3>Skills</h3>
                            <p>Java, React.js, PostgreSQL, AWS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}