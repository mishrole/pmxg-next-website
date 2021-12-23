import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    
    const router = useRouter();
    const [language, setLanguage] = useState(router.locale);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>{ children }</LanguageContext.Provider>
    )
}