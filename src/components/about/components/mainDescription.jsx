import photo from '../../../images/photo.jpeg';
import Divider from '../../../utilities/divider';

const AboutMain = () => {
    return (
        <div className="main">
            <Divider text={'ABOUT'}/>

            <div className="main__h2">LEARN MORE ABOUT ME</div>

            <div className="main__content-container">
                <div className="main__photo">
                    <img src={photo} />
                </div>
                <div className="content">
                    <div className="content__title">Frontend Developer</div>
                    <div className="content__top-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="content__info">
                        <div className="content__info__left">
                            <div className="info-item">
                                <b>Birthday:</b> 
                                <span>1 May 1995</span>
                            </div>
                            <div className="info-item">
                                <b>Phone:</b> 
                                <span>+123 456 7890</span>
                            </div>
                            <div className="info-item">
                                <b>City:</b> 
                                <span>New York, USA</span>
                            </div>
                        </div>
                        <div className="content__info__right">
                            <div className="info-item">
                                <b>Age:</b> 
                                <span>30</span>
                            </div>
                            <div className="info-item">
                                <b>Degree:</b> 
                                <span>Master</span>
                            </div>
                            <div className="info-item">
                                <b>Part-time:</b>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                    <div className="content__top-bottom">
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMain;