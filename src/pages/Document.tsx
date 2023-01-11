import home1 from "../images/home1.png";
import React from "../images/React.png";
import { BiMenu } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";

export default function Document() {

    return (
        <div className="document">
            <div className="s1"></div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                <div className="inner">
                    <div className="subScene">
                        <div className="doc">
                            <a href={require("../pdf/resume_chunga_lee.pdf")} download><BiMenu className="file"/></a>
                            <h2>Resume</h2>
                        </div>
                        <div className="doc">
                            <a href={require("../pdf/portfolio_chunga_lee.pdf")} download><AiFillProject className="file" /></a>
                            <h2>Portfolio</h2>
                        </div>
                        <div className="doc">
                            <a href={require("../pdf/transcript_chunga_lee.pdf")} download><IoIosSchool className="file" /></a>
                            <h2>Transcript</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s2"></div>
        </div>
    );
}