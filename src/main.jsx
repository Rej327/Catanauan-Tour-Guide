import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

import global_en from "./translation/en/global.json";
import global_tg from "./translation/tg/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// Function to get the saved language from localStorage
const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    return savedLanguage || "en";
  }
  return "en";
};

const savedLanguage = getSavedLanguage();

i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLanguage,
  resources: {
    en: {
      global: global_en,
    },
    tg: {
      global: global_tg,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Update language in localStorage on component unmount
window.addEventListener("beforeunload", () => {
  const selectedLanguage = i18next.language;
  localStorage.setItem("selectedLanguage", selectedLanguage);
});
