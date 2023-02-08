import { useTranslation } from "react-i18next";
import HeaderDesktop from "../../utilities/headerDesktop";
import Courses from "./components/courses";
import Interests from "./components/interests";
import AboutMain from "./components/mainDescription";
import Skills from "./components/skills";
import WorkPlaces from "./components/workPlaces";

const About = () => {
    const { t } = useTranslation('common');

    return (
        <div className="about">
            <AboutMain />
            <WorkPlaces />
            <Skills />
            <Interests />
            <Courses />
        </div>
    )
}

export default About;