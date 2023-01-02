import chunga from "../images/chunga.jpeg";
import home2 from "../images/home2.png";

export default function Home() {
    return (
        <div className="home">
            <div className="scene">
                <FirstScene />
            </div>
            <div className="skills">
                <h3>Java</h3>
                <h3>Javascript/Typescript</h3>
                <h3>React</h3>
                <h3>Html/SCSS</h3>
                <h3>Unity(C#)</h3>
                <h3>Python</h3>
                <h3>C/C++</h3>
                <h3>SQL</h3>
                <h3>OpenGL/GLSL</h3>
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
            <div className="image">
                <img src={chunga} className="img" alt="chunga's image" />
            </div>
            <div className="info">
                <h1>Basic info</h1>
                <p>Email: chunga7879@gmail.com</p>
                <p>Github: https://github.com/chunga7879</p>
                <p>Phone: 778-873-8528</p>
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