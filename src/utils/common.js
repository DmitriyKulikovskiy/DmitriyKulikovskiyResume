import axios from 'axios'
import fileDownload from 'js-file-download'

export const common = {
    setToLocalStorage: (key, value) => {
        window.localStorage.setItem(key, value);
    },
    
    getFromLocalStorage: (key) => {
        return window.localStorage.getItem(key);
    }
}

export const module = {
    changeLanguage: (i18n) => {
        const language = common.getFromLocalStorage('language');

        if (language === 'false' || !language) {
            module.changeLanguageHandler(true, i18n);

            return;
        }

        module.changeLanguageHandler(false, i18n);
    },

    currentLanguage: () => common.getFromLocalStorage('language') === 'true' ? 'ua' : 'en',
    
    changeLanguageHandler: (value, i18n) => {
        common.setToLocalStorage('language', value);
        i18n.changeLanguage(module.currentLanguage());
    },

    getLanguageValue: () => JSON.parse(common.getFromLocalStorage('language')) !== true,

    changeTheme: (value, setValue) => {
        const theme = common.getFromLocalStorage('theme');

        if (theme === 'false' || !theme) {
            common.setToLocalStorage('theme', true);
            setValue(value);

            return;
        }

        setValue(value);
        common.setToLocalStorage('theme', false);
    },

    getThemeValue: () => JSON.parse(common.getFromLocalStorage('theme')) !== true,

    downloadResumeFile: () => {
        const url = 'http://localhost:3000/Dmitriy_Kulikovskiy_resume.pdf';
        
        axios.get(url, {
            responseType: 'blob',
          }).then((res) => {
            fileDownload(
                res.data, 'Dmitriy_Kulikovskiy_resume.pdf'
            );
        })
    },

    isHomePage: () => window.location.pathname === '/',
}