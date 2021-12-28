import { createContext, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// import { loadLocale } from "../util/i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    
    const router = useRouter();
    const { locale } = router;
    const { i18n } = useTranslation();
    // const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState(locale);

    // useEffect(() => {
    //     i18n.changeLanguage(language);
    //     console.log("test", language, i18n.language);
        
    // }, [language]);

    // const init = async (lang) => {
    //     await loadLocale(lang);
    // }

    const nextLanguage = async (lang) => {
        
        await i18n.changeLanguage(lang); // Not working ES to EN
        setLanguage(lang, i18n.resolvedLanguage);
        console.log(i18n);
        // i18n.resolvedLanguage = lang;
        // i18n.initialLocale = lang;
        // i18n.options.lng = lang;
        // if(lang === i18n.resolvedLanguage) {
            // setLanguage(lang);
        // }

        // await router.push(router.asPath, router.asPath, { locale: lang });
        // router.reload();
        // init(lang);
        // console.log(lang);
        // console.log(i18n);
        // i18n.resolvedLanguage = lang;
        // i18n.getFixedT(lang);
        // router.replace(router.asPath, null, {locale: lang});
        // i18n.reloadResources();
        // console.log('resourceBundle',i18n.getDataByLanguage(lang));
        // router.push(router.asPath, router.asPath, { locale: lang, scroll: false }); // It works BUT refresh components
    }

    return (
        <LanguageContext.Provider value={{ language, nextLanguage }}>{ children }</LanguageContext.Provider>
    )
}