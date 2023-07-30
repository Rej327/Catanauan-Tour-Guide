import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ENGLISH_LANGUAGE } from "../src/constants/index";

import { en, fil } from "./translation/index";
import "./styles/button.css";
import "./styles/slideArrow.css";
import "./styles/loader.css";
import "./styles/shadow.css";
import "./styles/itemHover.css";
import Home from "./page/Home";
import WhatsOn from "./page/WhatsOn";
import Beaches from "./page/Beaches";
import ResortPage from "./page/ResortPage";
import RestoPage from "./page/RestoPage";
import HotelPage from "./page/HotelPage";
import TravelerGuidesPage from "./page/TravelerGuidesPage";
import AccomodationPage from "./page/AccomodationPage";
import GettingHerePage from "./page/GettingHerePage";
import GettingAroundPage from "./page/GettingAroundPage";
import Loader from "./components/common/Loader";
import RestoItemPage from "./page/RestoItemPage";
import ResortItemPage from "./page/ResortItemPage";
import EventItemPage from "./page/EventItemPage";
import TermOfUsePage from "./page/TermOfUsePage";
import AccesibilityPage from "./page/AccesibilityPage";
import CookiePage from "./page/CookiePage";
import Cookie from "./components/common/Cookie";
import HotelItemPage from "./page/HotelItemPage";
import FallsPage from "./page/FallsPage";
import CulturePage from "./page/CulturePage";
import TransportationPage from "./page/TransportationPage";

export const LangContext = createContext(null);

function App() {
  const [language, setLanguage] = useState({});
  const [toggleLang, setToggleLang] = useState(true);
  const [startingPoint, setStartingPoint] = useState({latitude: '', longitude: '', error: ''})
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

  useEffect(() => {
      const success = (val) => {
        if (!!val?.coords?.latitude && !!val?.coords?.longitude) {
          setStartingPoint({
            lat:val?.coords?.latitude,
            long: val?.coords?.longitude
          })
        }
    }
    const error = (val) => {
        console.log('location', val)
        setStartingPoint({
          ...startingPoint,
          error: true
        })
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className="w-full bg-white h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="bg-[#fffaf2]">
          <Cookie />
          <LangContext.Provider
            value={{ language, setLanguage, toggleLang, setToggleLang, startingPoint }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/beaches/:id" element={<Beaches />} />
                {/* HOME PAGE / LANDING PAGE */}
                <Route path="/" element={<Home />} />
                {/* OTHER PAGES */}
                <Route path="/whats-on" element={<WhatsOn />} />
                <Route path="/resorts/" element={<ResortPage />} />
                <Route path="/restaurants/" element={<RestoPage />} />
                <Route path="/restaurants/" element={<RestoPage />} />
                <Route path="/hotels/" element={<HotelPage />} />
                <Route path="/falls/" element={<FallsPage />} />
                <Route
                  path="/transportations/"
                  element={<TransportationPage />}
                />
                {/* PLAN A HEAD PAGES */}
                <Route
                  path="/traveler-guides/"
                  element={<TravelerGuidesPage />}
                />
                <Route path="/accommodation/" element={<AccomodationPage />} />
                <Route path="/getting-here/" element={<GettingHerePage />} />
                <Route path="/culture/" element={<CulturePage />} />
                <Route
                  path="/getting-around/"
                  element={<GettingAroundPage />}
                />
                {/* ITEM COMPONENTS BY ID */}
                <Route path="/restaurantss/" element={<RestoItemPage />} />
                <Route path="/resortss/" element={<ResortItemPage />} />
                <Route path="/event/" element={<EventItemPage />} />
                <Route path="/hotelss/" element={<HotelItemPage />} />
                {/* LEGAL PAGE */}
                <Route path="/term-of-use/" element={<TermOfUsePage />} />
                <Route path="/accesibility/" element={<AccesibilityPage />} />
                <Route path="/cookie-policy/" element={<CookiePage />} />
              </Routes>
            </BrowserRouter>
          </LangContext.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
