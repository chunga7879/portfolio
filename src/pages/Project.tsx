import home1 from "../images/home1.png";
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import React from "../images/React.png";
import PageInner from "../components/PageInner";
import {useNavigate, useParams} from "react-router-dom";

export default function Project() {
    const pageNum = useParams().page;
    const page = pageNum ? parseInt(pageNum) : 1;
    const navigate = useNavigate();


    const onClickPrev = () => {
        if (page > 1) {
            navigate(`/projects/${page - 1}`);
        }
    }

    const onClickNext = () => {
        if (page < 10) {
            navigate(`/projects/${page + 1}`);
        }
    }

    return (
        <div className="project">
            <div className="s1"></div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                <PageInner page={page} />
                <div className="icons">
                    {page !== 1 && <CiCircleChevLeft className="icon1" onClick={onClickPrev}/>}
                    {page !== 10 && <CiCircleChevRight className="icon2" onClick={onClickNext} />}
                </div>
            </div>
            <div className="s2"></div>

        </div>
    );
}
