import Divider from "../../../utilities/divider"
import { developerToolsList, intermediateList, mainStackList, technologiesList } from "../../../utils/import";

const Skills = () => {
    
    const Item = ({ name, stack }) => {
        return (
            <div className="skills__wrapper">
                <div className="container__title">{name}</div>
                <div className="container__row">
                    {stack.map((item, index) => {
                        return (
                            <div key={index} className="container">
                                <div className="container__item">
                                    {!item?.textIcon ? (
                                        <>
                                            <img key={index} src={item.path} />
                                            <div className="title">{item.name}</div>
                                        </>
                                    ) : <div className="text-icon">{item.textIcon}</div>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const Li = ({title, text}) => {
        return (
            <li>
                <span className="h1">{title}</span>
                <br />
                <span className="h2">{text}</span>
            </li>
        )
    }

    return (
        <div className="skills">
            <Divider text="SKILLS" />

            <div className="skills__container">
                <Item name="Main Stack" stack={mainStackList}/>
                <Item name="Intermediate" stack={intermediateList}/>
                <Item name="Technologies" stack={technologiesList}/>
                <Item name="Developer tools" stack={developerToolsList}/>
            </div>

            <div className="skills__description">
                <div className="title">GENERAL SKILLS LIST</div>
                <ul>
                    <Li 
                        title="Main Stack"
                        text="HTML5, CSS3, Bootstrap 4/5, JavaScript(ES6), ReactJS, React-Native, SCSS/SASS, TypeScript, Redux(thunk/saga)"
                    />
                    <Li 
                        title="Intedmediate"
                        text="MobX, MaterialUI, Styled Components, Appium(WD), Appium Server, AWS, Twig templates, jQuery"
                    />
                    <Li 
                        title="Technologies"
                        text="GraphQL, Apollo, CI/CD, GitHub Actions, Axios, Firebase Analytics, React-Native Firebase Analytics/Performance/Crashlytics, Amplify, Amazon S3, Formik/Yup"
                    />
                    <Li 
                        title="Developer tools"
                        text="GIT, VS Code, Webpack, Firebase, XCode, Android Studio, AppStore Connect, Google Play Console, Jira, BitBucket, GitHub, Jenkins, GraphQL Playground, Figma/Zeplin"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Skills