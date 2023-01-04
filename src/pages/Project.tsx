import {useState} from "react";
import home1 from "../images/home1.png";
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
                {/*{page == 0 &&  <FirstScene />}*/}
                {/*{page == 1 &&  <SecondScene />}*/}

                <div className="icons">
                    <CiCircleChevLeft className="icon1" onClick={onClickPrev}/>
                    <CiCircleChevRight className="icon2" onClick={onClickNext} />
                </div>
            </div>
            <div className="s2"></div>

        </div>
    );
}