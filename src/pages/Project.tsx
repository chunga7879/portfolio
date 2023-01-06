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
        if (page < 8) {
            setPage(page + 1);
        }
    }

    return (
        <div className="project">
            <div className="s1"></div>
            <div className="scene">
                <img src={home1} alt="computer" className="back" />
                {page === 0 &&  <FirstScene />}
                {page === 1 &&  <SecondScene />}
                {page === 2 && <ThirdScene />}
                {page === 3 && <FourthScene />}
                {page === 4 && <FifthScene />}
                {page === 5 && <SixthScene />}
                {page === 6 && <SeventhScene />}
                {page === 7 && <EighthScene />}
                {page === 8 && <NinthScene />}

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
                    <video className="video" autoPlay={true} controls={true} muted={true}>
                        <source src={require("../videos/project2.mp4")} type="video/mp4" />
                    </video>
                    <button className="button one"><a href="https://github.com/chunga7879/tournament_organizer_backend_version2/tree/main/Downloads/Hairless-Cat-AWS-Backend-master">Back-End</a></button>
                    <button className="button two"><a href="https://github.com/chunga7879/tournament_organizer_frontend_version2">Front-End</a></button>
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
                        <div className="three">
                            <h3>Skills</h3>
                            <p>Java, React.js, PostgreSQL, AWS</p>
                        </div>
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
                            <p>Implementing built-in functions for image manipulation & Conducting User study</p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>JAVA</p>
                        </div>
                        <button><a href="https://github.com/chunga7879/AnimatedGifDSL">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ThirdScene() {
    return (
        <div className="inner">
            <div className="subScene third">
                <div className="examples">
                    <div className="codes">
                        <img src={project_1_ex1_1} alt="halloween code" className="code one" />
                        <img src={project_1_ex1_2} alt="halloween code" className="code two" />
                    </div>
                    <img src={project_1_ex2} alt="halloween gif" className="gif"/>
                </div>
                <div className="info">
                    <div className="basic">
                        <h2>Program Analysis: Runtime Error & Possible input</h2>
                        <p className="one">Group Project(5): 2022.09 ~ 2022.12</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>It is a static program analysis that tracks the potential domain of local variables, parameters and return values throughout a single method to check whether any runtime errors can occur. The analysis will then output a control flow diagram indicating locations where an error can occur. </p>
                        </div>
                        <div className="two">
                            <h3>Role</h3>
                            <p>Implementing visualization methods for an output control flow graph & Conducting User study</p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>JAVA</p>
                        </div>
                        <button><a href="https://github.com/chunga7879/ProgramAnalysis">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FourthScene() {
    return (
        <div className="inner">
            <div className="subScene fourth">
                <div className="examples">
                    <video className="video" autoPlay={true} controls={true} muted={true}>
                        <source src={require("../videos/project3.mp4")} type="video/mp4" />
                    </video>
                    <button className="button one"><a href="https://github.com/chunga7879/grade_project_back_end">Back-End</a></button>
                    <button className="button two"><a href="https://github.com/chunga7879/grade_project_front_end">Front-End</a></button>
                </div>
                <div className="info">
                    <div className="basic">
                        <h2>Grade Management Website</h2>
                        <p className="one">Individual Project: 2022.03 ~ 2022.04</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>This project helps students to manage course grades easily.
                                It allows students to create tasks (ex. midterm) and write what percentage the task contributes to the course grade (40% among 100%) and the number of subtasks (3 midterms).
                                When submitting each grade for subtasks, it calculates the grade for the related task, course, and semester.
                            </p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>Node.js, React.js, MySQL, AWS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FifthScene() {
    return (
        <div className="inner">
            <div className="subScene fifth">
                <div className="examples">
                    <video className="video" autoPlay={true} controls={true} muted={true}>
                        <source src={require("../videos/project4.mp4")} type="video/mp4" />
                    </video>
                    <button className="button one"><a href="https://github.com/chunga7879/CourseRoomManagement">Github</a></button>
                </div>
                <div className="info">
                    <div className="basic">
                        <h2>Course Room Management</h2>
                        <p className="one">Group Project(2): 2021.09 ~ 2021.12</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>This is the software engineering project which helps to add and delete data and get information from the data using query. It adds files about UBC courses and rooms information at UBC and explore the data using query. By using REST APIs, it can accomplish end-to-end user stories
                            </p>
                        </div>
                        <div className="two">
                            <h3>Role</h3>
                            <p>Implementing Add, Delete, Query and List methods by cooperating with a partner</p>
                            <p>Creating a simple website using html and css</p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>Typescript, Html, CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SixthScene() {
    return (
        <div className="inner">
            <div className="subScene sixth">
                <div className="info one">
                    <div className="basic">
                        <h2>Database Web Programming</h2>
                        <p className="one">Group Project(3): 2021.09 ~ 2021.12</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>It is a project to manage data related in TV program. It shows the relation between models and provide a php website to query/add/delete data.</p>
                        </div>
                        <div className="two">
                            <h3>Role</h3>
                            <p>Designing a ER diagram and Implementing SQL statements and php code by cooperating with team members</p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>PHP, MySQL</p>
                        </div>
                        <button><a href="https://github.com/chunga7879/tvShowSQLproject">Github</a></button>

                    </div>
                </div>
                <div className="info two">
                    <div className="basic">
                        <h2>Department Store Management System</h2>
                        <p className="one">Individual Project: 2021.01 ~ 2021.04</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>This is to provide the application to manage information of customers and products of the department store.</p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>JAVA</p>
                        </div>
                        <button><a href="https://github.com/chunga7879/storeDataManageJava">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SeventhScene() {
    return (
        <div className="inner">
            <div className="subScene seventh">
                <div className="info one">
                    <div className="basic">
                        <h2>Maven Admin</h2>
                        <p className="one">JNPMedi Inc: 2022.06 ~ 2022.08</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>
                                It is to provide functionality for admin to manage privileges for products the company owns. Users who have certain privileges can access the products and  view/change data. For example, if the company own the product, Maven-Auth, a user who has privilege, Auth_View, can view data stored in the database in the product and a user who has privilege, Auth_Grant, can create/update new data. There are two ways that user can have a privilege. One is to get a privilege directly from admin. The other is to have a role which contains certain privileges. The project is to provide a website to see users’ information and give/remove certain privileges or roles to users.
                            </p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p> React.js, Flex (Frontend-framework), REST API, SCSS</p>
                        </div>

                    </div>
                </div>
                <div className="info two">
                    <div className="contents">
                        <div className="one">
                            <h3>Role</h3>
                            <p>Project Engineer</p>
                            <ul>
                                <li>Login and Logout process including token management</li>
                                <li>
                                    Component to manage user’s privileges
                                    <ul>
                                        <li>API call to get privileges by user Id</li>
                                        <li>Display checkbox with item (key: privilege, default checked: included in the response from api call)</li>
                                        <li>Update user’s privileges  using useState with an array of (privilege, grant). If the grant is true, it adds a privilege to user. Otherwise, it removes a privilege from user.</li>
                                    </ul>
                                </li>
                                <li>
                                    Component to manage roles
                                    <ul>
                                        <li>List up all roles with pagination by calling api.</li>
                                        <li>Create role with unique name and checkbox for privileges</li>
                                        <li>View roles’ information by calling api with role id.</li>
                                    </ul>
                                </li>
                                <li>
                                    Component to manage user’s role
                                    <ul>
                                        <li>Show checkboxes for all roles and default check by role what a user already has.</li>
                                        <li>Update user’s role using useState with an array of (roleId, grant)</li>
                                    </ul>
                                </li>
                                <li>
                                    Component to track audit trails for users
                                    <ul>
                                        <li>Display all audit trails for users with user’s email, name, date and other information.</li>
                                        <li>Filtering/Searching functionality for each column to display only certain trails</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EighthScene() {
    return (
        <div className="inner">
            <div className="subScene eighth">
                <div className="info one">
                    <div className="basic">
                        <h2>Maven Auth</h2>
                        <p className="one">JNPMedi Inc: 2022.06 ~ 2022.08</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>
                                It is to manage users’ information such as account information, users’ privileges, roles and organizations. It can create/update/delete users and create organizations and invite users for the organization. It provides REST API for Maven_Admin project.
                            </p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>
                                Typescript, Cyan (Backend-framework), MySQL
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info two">
                    <div className="contents">
                        <div className="one">
                            <h3>Role</h3>
                            <p>Project Engineer</p>
                            <ul>
                                <li>Design Layered Architecture (schema(entity), model, service, controller) for User, User’s privilege, Role, User’s Role and Ref Audit to track audit trail.
                                </li>
                                <li>
                                    Implementing Rest APIs
                                    <ul>
                                        <li>Get user by id/authorization</li>
                                        <li>List users with pagination</li>
                                        <li>Get user’s privileges by id/authorization</li>
                                        <li>Patch privileges to users with id and list of (privilege, grant: whether to add or to remove)</li>
                                        <li>Create a Role with unique name and privileges as optional. It creates RolePrivilege entities to manage relationship between role and privileges.</li>
                                        <li>Delete role by role id</li>
                                        <li>Patch name or privileges to roles. It changes a name or creates a new RolePrivilege entity or changes isDestroyed attribute for RolePrivilege entity.</li>
                                        <li>Get user’s roles by user id/authorization</li>
                                        <li>Patch roles to users with user id and list of (roleid, grant)</li>
                                        <li>List of audit trails with pagination and with filtering functionality. </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NinthScene() {
    return (
        <div className="inner">
            <div className="subScene ninth">
                <div className="info one">
                    <div className="basic">
                        <h2>Maven Safety</h2>
                        <p className="one">JNPMedi Inc: 2022.08 ~ 2022.08</p>
                    </div>
                    <div className="contents">
                        <div className="one">
                            <h3>Description</h3>
                            <p>
                                It is to provide a website for recording all information on each subject in a clinical reserach study.
                            </p>
                        </div>
                        <div className="three">
                            <h3>Skills</h3>
                            <p>
                                Typescript, React.js, Cyan (Backend-framework), Flex(Frontend-framework), MySQL
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info two">
                    <div className="contents">
                        <div className="one">
                            <h3>Role</h3>
                            <p>Project Engineer</p>
                            <ul>
                                <li>Refactoring to make cleaner code</li>
                                <li>Adding some scss and small components to improve design</li>
                                <li>Creating REST API for listing up audit trails for case captures with pagination/filtering</li>
                                <li>Components to provide functionality to see audit trails/comments and delete/strike rows for each item</li>
                                <li>Components to show audit trails with filtering</li>
                                <li>Components to remove/strike items</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}