import { FaBriefcase } from "react-icons/fa";
import bintime from "../../../images/works/bintime.jpeg";

const WorkPlaces = () => {
    const workItems = [
        {path: bintime},
        {path: bintime},
        {path: bintime},
        {path: bintime},
    ];

    return (
        <div className="work">
            {workItems.map((item, index) => {
                return (
                    <div key={index} className="work__item">
                        <div className="work__top-icon">
                            <FaBriefcase className="icon" />
                        </div>
                        <img className="work__image" src={item.path} />
                    </div>
                )
            })}
        </div>
    )
}

export default WorkPlaces;