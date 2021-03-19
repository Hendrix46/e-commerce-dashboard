import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ["uz", "ru", "en"];

i18n

    .use(Backend)

    .use(XHR)

    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        fallbackLng: "uz",
        debug: false,
        defaultNS: "translation",
        whitelist: Languages,
        cache: [],
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            // path to post missing resources
            addPath: "/locales/add/{{lng}}/{{ns}}",
            allowMultiLoading: false,
        },
        react: {
            useSuspense: false,
            wait: true,
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        appendNamespaceToMissingKey: true,
        preload: [ "uz", "ru", "en"],
    });

export default i18n;