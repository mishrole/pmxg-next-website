import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState(router.locale);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, menuOpen, setMenuOpen }}>{ children }</LanguageContext.Provider>
    )
}