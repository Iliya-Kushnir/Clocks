import React, { createContext, useState, useContext } from "react";
import translations from "../../public/translation"; // Подключаем переводы

// Создаём контекст
const LanguageContext = createContext();

// Провайдер контекста
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "ru");

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang); // Сохраняем в localStorage
    };

    // Функция перевода текста с поддержкой вложенных ключей
    const t = (key) => {
        const keys = key.split('.'); // Разделяем ключ на части, используя точку как разделитель
        let translation = translations[language];

        // Итерируем по частям ключа и ищем соответствующее значение в объекте перевода
        for (let i = 0; i < keys.length; i++) {
            translation = translation ? translation[keys[i]] : null;
        }

        // Если перевод найден, возвращаем его, иначе возвращаем сам ключ
        return translation || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Хук для использования языка
export const useLanguage = () => useContext(LanguageContext);
