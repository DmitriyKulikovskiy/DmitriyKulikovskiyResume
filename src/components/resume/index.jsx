import Divider from "../../utilities/divider"
import { resumeList } from "../../utils/import"
import WorkItem from "./components/workItem"

const Resume = () => {
    return (
        <div className="resume">
            <Divider text="RESUME"/>
            <div className="resume__title">Check my resume</div>
            <div className="resume__wrapper">
                <div className="resume__left-column">
                    <div className="resume__block-title">Summarry</div>
                    <WorkItem 
                        containerTitle={resumeList.summary.name}
                        title={resumeList.summary.description}
                        responsibilities={resumeList.summary.responsibilities}
                    />

                    <div className="resume__block-title">Education</div>
                    <WorkItem 
                        containerTitle={resumeList.education.containerTitle1}
                        title={resumeList.education.title}
                        date={resumeList.education.date1}
                        description={resumeList.education.description}
                        position={1}
                    />
                    <WorkItem 
                        containerTitle={resumeList.education.containerTitle2}
                        title={resumeList.education.title}
                        date={resumeList.education.date2}
                        description={resumeList.education.description}
                    />
                </div>
                <div className="resume__right-column">
                    <div className="resume__block-title">Professional Experience</div>
                    <WorkItem 
                        containerTitle={resumeList.upWork.workTitle}
                        title={resumeList.upWork.workPosition}
                        date={resumeList.upWork.date}
                        responsibilities={resumeList.upWork.responsibilities}
                        position={1}
                    />
                    <WorkItem 
                        containerTitle={resumeList.lisc.workTitle}
                        title={resumeList.lisc.workPosition}
                        date={resumeList.lisc.date}
                        responsibilities={resumeList.lisc.responsibilities}
                        position={1}
                    />
                    <WorkItem 
                        containerTitle={resumeList.azSoftRocks.workTitle}
                        title={resumeList.azSoftRocks.workPosition}
                        date={resumeList.azSoftRocks.date}
                        responsibilities={resumeList.azSoftRocks.responsibilities}
                        position={1}
                    />
                    <WorkItem 
                        containerTitle={resumeList.bintime.workTitle}
                        title={resumeList.bintime.workPosition}
                        date={resumeList.bintime.date}
                        responsibilities={resumeList.bintime.responsibilities}
                    />
                </div>
            </div>
        </div>
    )
}

export default Resume