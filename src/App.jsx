import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Home from "./page/Home";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ENGLISH_LANGUAGE } from "../src/constants/index";
import Beaches from "./page/Beaches";
import { en, fil } from "./translation/index";
import "./styles/navigationToogle.css";

export const LangContext = createContext(null);

function App() {
  const [language, setLanguage] = useState({});
  const [toggleLang, setToggleLang] = useState(true);
  const getLanguage = localStorage.getItem("lang");

  useEffect(() => {
    if (getLanguage === ENGLISH_LANGUAGE) {
      setLanguage(en);
    } else setLanguage(fil);
  }, []);
  return (
    <div className="bg-[#fffaf2]">
      <LangContext.Provider
        value={{ language, setLanguage, toggleLang, setToggleLang }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beaches/:id" element={<Beaches />} />
          </Routes>
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  );
}

export default App;
