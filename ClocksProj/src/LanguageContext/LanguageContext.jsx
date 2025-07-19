import React, { createContext, useState, useContext } from "react";
import translations from "../../public/translation";  

const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "ru");

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang); 
    };


    const t = (key) => {
        const keys = key.split('.'); 
        let translation = translations[language];


        for (let i = 0; i < keys.length; i++) {
            translation = translation ? translation[keys[i]] : null;
        }

        
        return translation || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => useContext(LanguageContext);
