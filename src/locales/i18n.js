import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import cn from './locales/cn.json';
import {initReactI18next} from 'react-i18next';
import qs from 'qs'

const locale = {
  getLocale() {
    const {search} = window.location;
    const {locale} = qs.parse(search, {ignoreQueryPrefix: true}) || window.localStorage.getItem("i18nextLng") || 'cn';
    return locale;
  },
  setLocale({lang, realReload, updater}) {
    useHi
    history.push(`?locale=${lang}`);
    updater();
  }
}

i18n
  .use(LanguageDetector) //嗅探当前浏览器语言
  .use(initReactI18next) //init i18next
  .init({
    resources: {cn: {translation: cn}, en: {translation: en}},
    lng: locale.getLocale(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n
