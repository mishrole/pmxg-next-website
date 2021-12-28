import { createContext, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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

    const nextLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang); // Not working ES to EN
        router.push(router.asPath, router.asPath, { locale: lang, scroll: false }); // It works BUT refresh components
    }
    return (
        <LanguageContext.Provider value={{ language, nextLanguage }}>{ children }</LanguageContext.Provider>
    )
}