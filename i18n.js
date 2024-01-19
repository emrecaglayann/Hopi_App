import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from 'expo-localization';

const resources = {
    en: {
      translation: {
        "Marka, kampanya ve ürün ara": "Search for brands, campaigns and products",
        "Hepsi Senin için": "All for you",
        "Markalar": "Brands",
        "Kampanyalar" : "Offer",
        "Kategoriler" : "Categories",
        "Alışveriş" : "Shopping",
        "Cüzdan" : "Wallet"
      },
    },
    tr: {
      translation: {
        "Marka, kampanya ve ürün ara": "Marka, kampanya ve ürün ara",
        "Hepsi Senin için": "Hepsi Senin için",
        "Markalar": "Markalar",
        "Kampanyalar" : "Kampanyalar",
        "Kategoriler" : "Kategoriler",
        "Alışveriş" : "Alışveriş",
        "Cüzdan" :"Cüzdan" 
      },
    },
  };

 
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng:getLocales()[0].languageCode,
    interpolation:{
        escapeValue: false,
    },   
    
  });

  