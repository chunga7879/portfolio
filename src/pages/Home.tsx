import chunga from "../images/chunga.jpeg";
import home1 from "../images/home1.png";
import home2 from "../images/home2.png";
import Java from "../images/Java.jpg";
import Javascript from "../images/JavaScript.png";
import React from "../images/React.png";
import CSS from "../images/CSS.png";
import HTML from "../images/HTML.png";
import MySQL from "../images/MySQL.png";
import NodeJS from "../images/NodeJS.png";
import OpenGL from "../images/OpenGL.png";
import Python from "../images/Python.png";
import Unity from "../images/Unity.png";
import {useState} from "react";


export default function Home() {
    const [page, setPage] = useState(1);

    return (
        <div className="home">
            <div className="s1">
                <div className="floating-one one"><img src={Java} alt="java logo" /></div>
                <div className="floating-two two"><img src={Javascript} alt="javascript logo" /></div>
                <div className="floating-one three"><img src={React} alt="react logo" /></div>
                <div className="floating-two four"><img src={HTML} alt="html logo" /></div>
                <div className="floating-one five"><img src={CSS} alt="CSS logo" /></div>
            </div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                {page == 0 &&  <FirstScene />}
                {page == 1 &&  <SecondScene />}
                {page == 2 &&  <ThirdScene />}
                {page == 3 &&  <FourthScene />}
            </div>

            <div className="s2">
                <div className="floating-one six"><img src={Unity} alt="unity logo" /></div>
                <div className="floating-two seven"><img src={Python} alt="python logo" /></div>
                <div className="floating-one eight"><h3>C/C++</h3></div>
                <div className="floating-two nine"><img src={MySQL} alt="mySQL logo" /></div>
                <div className="floating-one ten"><img src={OpenGL} alt="openGL logo" /></div>
            </div>
        </div>
    );
}

function FirstScene() {
    return (
        <div className="inner">
            <img src={home2} alt="home image 2" className="firstScene"/>
        </div>
    )
}

function SecondScene() {
    return (
        <div className="inner">
            <div className="secondScene">
                <img src={chunga} className="img" alt="chunga's image" />
                <div className="info">
                    <h1>Basic info</h1>
                    <p>Email: chunga7879@gmail.com</p>
                    <p>Github: https://github.com/chunga7879</p>
                    <p>Phone: 778-873-8528</p>
                </div>
            </div>
        </div>
    )
}

function ThirdScene() {
    return (
        <div className="inner">
            <div className="intro">
                <div className="one">
                    <h1>WHO I AM?</h1>
                    <p></p>
                </div>
                <div className="two">
                    <h1>HOW I WORKED?</h1>
                    <p></p>
                </div>
                <div className="three">
                    <h1>WHAT I AM LOOKING FORWARD?</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

function FourthScene() {
    return (
        <div className="inner">
            <h1>What "ATTENTION" means?</h1>
            <h2>To be a person who can</h2>
            <p>Give Attention</p>
            <p>Get Attention</p>
            <p>To someone else</p>
        </div>
    )
}