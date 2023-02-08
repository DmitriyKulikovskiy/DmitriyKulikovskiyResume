import React from 'react';
import ReactDOM from 'react-dom/client';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_ua from "./tranlsations/ua/common.json";
import common_en from './tranlsations/en/common.json';

import './scss/index.scss';
import { module } from './utils/common';
import App from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));

i18next.init({
  interpolation: { escapeValue: false },
  lng: module.currentLanguage(),                       
  resources: {
      en: {
          common: common_en,   
      },
      ua: {
          common: common_ua,
      },
  },
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);