import { FaGraduationCap } from "react-icons/fa";
import Divider from "../../../utilities/divider";
import hackEdu from "../../../images/courses/hack-edu.jpeg";

const Courses = () => {
    const workItems = [
        {path: hackEdu},
        {path: hackEdu},
        {path: hackEdu},
        {path: hackEdu},
    ];

    return (
        <>
            <Divider text="COURSES"/>
            <div className="work">
                {workItems.map((item, index) => {
                    return (
                        <div key={index} className="work__item">
                            <div className="work__top-icon">
                                <FaGraduationCap className="icon" />
                            </div>
                            <img className="work__image m_course" src={item.path} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Courses;