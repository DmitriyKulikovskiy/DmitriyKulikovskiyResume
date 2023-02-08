const AlertNotification = ({ text, isOpen, setAlert }) => {
    return (
        <div className="alert" style={isOpen ? { display: 'block'} : {display: 'none'}}>
            <div className="alert__wrapper">
                <div className="alert__container">
                    <div className="alert__text">{text}</div>
                    <div className="alert__btn" onClick={() => setAlert(false)}>OK</div>
                </div>
            </div>
        </div>
    )
}

export default AlertNotification;