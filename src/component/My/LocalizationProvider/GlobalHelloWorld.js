import React, { useState } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import koLocale from 'date-fns/locale/ko';
import enLocale from 'date-fns/locale/en-US';
import frLocale from 'date-fns/locale/fr';
import ko from './locales/ko';
import en from './locales/en';
import fr from './locales/fr';

const locales = {
    ko: koLocale,
    en: enLocale,
    fr: frLocale,
};

const translations = {
    ko,
    en,
    fr,
};
    
const GlobalHelloWorld = () => {
    const [locale, setLocale] = useState('ko');
    const changeLanguage = (language) => {
        setLocale(language);
    };

    return (
        <>
            <div>GlobalHelloWorld</div>
            <LocalizationProvider dateAdapter={AdapterDayjs} locale={locales[locale]}>
                <button onClick={() => changeLanguage('ko')}>한국어</button>
                <button onClick={() => changeLanguage('en')}>영어</button>
                <button onClick={() => changeLanguage('fr')}>불어</button>
                <p>인사말 : {translations[locale].hello} {translations[locale].goodbye}</p>
            </LocalizationProvider>
        </>
    )
};

export default GlobalHelloWorld;