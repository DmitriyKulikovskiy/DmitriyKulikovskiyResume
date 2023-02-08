const InfoItem = ({ icon, title, description, listIcons }) => {
    return (
        <div className="info-item-wrapper">
            <div className="info-item">
                <div className="info-item__icon-box">
                    <div className="icon">{icon}</div>
                </div>
                <div className="info-item__description">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    {listIcons?.length && <div className="list-icons">{listIcons.map(item => <span>{item}</span>)}</div>}
                </div>
            </div>
        </div>
    )
}

export default InfoItem;