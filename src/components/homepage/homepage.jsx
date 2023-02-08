import { FaLinkedinIn, FaTelegram } from "react-icons/fa"
import photo from '../../images/photo.jpeg';
import Settings from "../../utilities/settings";
import { useTranslation } from "react-i18next";
import NavItems from "../../utilities/navItems";
import { module } from "../../utils/common";

const Homepage = ({ setTheme, theme }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__name">{t('home.name')}</div>
        <div className="homepage__h1" dangerouslySetInnerHTML={{__html: t('home.h1')}}/>

        <NavItems containerClass="homepage__nav-container m_desktop" t={t}/>

        <div className="homepage__social-container">
          <div className="social">
            <FaLinkedinIn icon="fa-brands fa-linkedin" />
          </div>
          <div className="social">
            <FaTelegram icon="fa-brands fa-telegram" />
          </div>
        </div>

        <Settings i18n={i18n} setTheme={setTheme} theme={theme}/>

        <div 
          className="homepage__download-button"
          onClick={() => module.downloadResumeFile()}
        >
          Download Resume
        </div>
      </div>

      <div className="homepage__photo">
        <div className="overlay">
          <img src={photo} />
          <div className="overlay__content" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
