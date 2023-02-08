import { module } from "../utils/common";
import { Switcher } from "./switcher";

const Settings = ({ i18n, setTheme, theme }) => {
    const languageValue = module.getLanguageValue();

    return (
        <div className="settings">
            <div className="settings__language">
                <div className="h3">UA</div>
                <Switcher 
                    checked={languageValue} 
                    handleChange={() => module.changeLanguage(i18n)}
                />
                <div className="h3">ENG</div>
            </div>

            <div className="settings__divider">|</div>

            <div className="settings__theme">
                <div className="h3">Dark</div>
                <Switcher 
                    checked={theme}
                    handleChange={() => module.changeTheme(!theme, setTheme)} 
                />
                <div className="h3">Light</div>
            </div>
        </div>
    )
}

export default Settings;