import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ENGLISH_LANGUAGE } from "../src/constants/index";

import { en, fil } from "./translation/index";
import "./styles/navigationToogle.css";
import "./styles/button.css";
import "./styles/slideArrow.css";
import "./styles/loader.css";
import Home from "./page/Home";
import WhatsOn from "./page/WhatsOn";
import Beaches from "./page/Beaches";
import ResortPage from "./page/ResortPage";
import RestoPage from "./page/RestoPage";
import HotelPage from "./page/HotelPage";
import TravelerGuides from "./page/TravelerGuides";
import Accomodation from "./page/Accomodation";
import Loader from "./components/common/Loader";
import BankItemPage from "./page/BankItemPage";
import ResortItemPage from "./page/ResortItemPage";

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a loading delay of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="w-full bg-white h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="bg-[#fffaf2]">
          <LangContext.Provider
            value={{ language, setLanguage, toggleLang, setToggleLang }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/beaches/:id" element={<Beaches />} />
                <Route path="/" element={<Home />} />
                <Route path="/whats-on" element={<WhatsOn />} />
                <Route path="/resorts/" element={<ResortPage />} />
                <Route path="/restaurants/" element={<RestoPage />} />
                <Route path="/restaurants/" element={<RestoPage />} />
                <Route path="/hotels/" element={<HotelPage />} />
                <Route path="/traveler-guides/" element={<TravelerGuides />} />
                <Route path="/accomodation/" element={<Accomodation />} />
                {/* ITEM COMPONENTS BY ID */}
                <Route path="/banks/" element={<BankItemPage />} />
                <Route path="/resortss/" element={<ResortItemPage />} />
              </Routes>
            </BrowserRouter>
          </LangContext.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
