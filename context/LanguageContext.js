import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    
    const router = useRouter();
    // const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState(router.locale);

    // const [carouselIndex, setCarouselIndex] = useState(0);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>{ children }</LanguageContext.Provider>
    )
}