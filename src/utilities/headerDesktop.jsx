import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavItems from "./navItems";
import { module } from "../utils/common";

const HeaderDesktop = () => {
    const navigatie = useNavigate();
    const { t } = useTranslation('common');

    if (module.isHomePage()) return;

    return (
        <div className="header">
            <div onClick={() => navigatie('/DmitriyKulikovskiyResume')} className="header__name">{t('home.name')}</div>
            <NavItems containerClass="header__nav" t={t} />
        </div>
    )
}

export default HeaderDesktop