import Divider from "../../../utilities/divider";

const Interests = () => {
    const interests = ['Football', 'Fishing', 'Games', 'Hiking', 'Politics', 'Movies', 'History', 'Music'];

    return (
        <div className="interests">
            <Divider text="INTERESTS"/>
            <div className="interests__container">
                {interests.map(item => <div key={item} className="interests__item">{item}</div>)}
            </div>
        </div>
    )
}

export default Interests;