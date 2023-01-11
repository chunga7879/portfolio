import home1 from "../images/home1.png";
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import React from "../images/React.png";
import {useState} from "react";
import jnpmedi from "../images/jnpmedi.jpeg";
import QDGIS from "../images/QDGIS.jpeg";
import {useNavigate} from "react-router-dom";

export default function Experience() {
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
        <div className="experience">
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
    const navigate = useNavigate();

    const onClickMove = (page: number) => {
        return () => {
            navigate(`/projects/${page}`)
        };
    }

    return (
        <div className="inner">
            <div className="subScene first">
                <div className="left">
                    <div className="upper">
                        <img src={jnpmedi} alt="jnpmedi logo"/>
                        <div className="companyInfo">
                            <h1>JNPMEDI Inc.</h1>
                            <p>Incheon, KR</p>
                            <a href="https://www.linkedin.com/company/jnpmedi">LinkedIn</a>
                        </div>
                    </div>
                    <div className="working">
                        <h2>Software Engineering Intern</h2>
                        <h3>May 2022 ~ August 2022</h3>
                    </div>
                </div>
                <div className="right">
                   <ul className="accomplishment">
                       <li>Working on 4 (3 main) projects for 3.3 months especially in developing programs to manage users and admin functionalities.</li>
                       <li>Collaborating with co-developers using Github and having discussions to find a best way</li>
                       <li>Testing for products before publishing</li>
                   </ul>
                    <div className="buttons">
                        <button className="button" onClick={onClickMove(8)}>Maven-Admin</button>
                        <button className="button" onClick={onClickMove(9)}>Maven-Auth</button>
                        <button className="button" onClick={onClickMove(10)}>Maven-Safety</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SecondScene() {
    return (
        <div className="inner">
            <div className="subScene first">
                <div className="left">
                    <div className="upper">
                        <img src={QDGIS} alt="QDGIS logo"/>
                        <div className="companyInfo">
                            <h1>Qingdao Galaxy International School</h1>
                            <p>Qingdao, China</p>
                            <a href="https://www.linkedin.com/school/qdgis/">LinkedIn</a>
                        </div>
                    </div>
                    <div className="working">
                        <h2>Teacher/Teaching Assistant</h2>
                        <h3>October 2021 ~ July 2022</h3>
                    </div>
                </div>
                <div className="right">
                    <ul className="accomplishment">
                        <li>Teaching Java programming/Biology.</li>
                        <li>Creating class materials using power points, Word and IntelliJ</li>
                        <li>Collaborating with other teachers to make exam questions.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}