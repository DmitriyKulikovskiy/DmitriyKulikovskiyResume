const WorkItem = ({ containerTitle, title, description, responsibilities, date, workName, position }) => {
    return (
        <div className={`container container-${position}`}>
            <div className="container__title">{containerTitle}</div>
            <div className="container__dot"></div>
            <div className="box">
                {date && <div className="box__date">{date}</div>}
                <div className="box__title">{title}</div>
                <div className="box__work-name">{workName}</div>
                <div className="box__description">{description}</div>

                {responsibilities?.length && <ul>
                    {responsibilities?.map(item => <li>{item}</li>)}
                </ul>}
            </div>
        </div>
    )
}

export default WorkItem;