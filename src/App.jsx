import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Home from "./page/Home";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ENGLISH_LANGUAGE } from "../src/constants/index";
import Beaches from "./page/Beaches";
import { en, fil } from "./translation/index";
import "./styles/navigationToogle.css";
import "./styles/button.css";
import "./styles/slideArrow.css";
import ResortPage from "./page/ResortPage";
import RestoPage from "./page/RestoPage";
import HotelPage from "./page/HotelPage";
import TravelerGuides from "./page/TravelerGuides";
import Accomodation from "./page/Accomodation";

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
            <Route path="/resorts/" element={<ResortPage />} />
            <Route path="/restaurants/" element={<RestoPage />} />
            <Route path="/restaurants/" element={<RestoPage />} />
            <Route path="/hotels/" element={<HotelPage />} />
            <Route path="/traveler-guides/" element={<TravelerGuides />} />
            <Route path="/accomodation/" element={<Accomodation />} />
          </Routes>
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  );
}

export default App;
