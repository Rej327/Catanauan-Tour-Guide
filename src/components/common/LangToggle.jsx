import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../App";
import { en, fil } from "../../translation/index";
import { ENGLISH_LANGUAGE, FILIPINO_LANGUAGE } from "../../constants";
import { Stack, Switch, useToast } from "@chakra-ui/react";

const LangToggle = () => {
  const { language, setLanguage, toggleLang, setToggleLang } =
    useContext(LangContext);
  const getLanguage = localStorage.getItem("lang");
  const [isEng, setIsEng] = useState(getLanguage == FILIPINO_LANGUAGE);
  const toast = useToast();

  useEffect(() => {
    if (getLanguage === ENGLISH_LANGUAGE) {
      setLanguage(en);
    } else setLanguage(fil);
  }, []);

  const handleChange = () => {
    if (!isEng) {
      toast({
        title: "Translated to Filipino Language",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setIsEng(true);
      localStorage.setItem("lang", FILIPINO_LANGUAGE);
      setLanguage(fil);
    } else {
      toast({
        title: "Translated to English Language",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setIsEng(false);
      localStorage.setItem("lang", ENGLISH_LANGUAGE);
      setLanguage(en);
    }
  };

  return (
    <div>
      <Stack align="center" direction="row">
        <Switch
          size="md"
          className="border-2 rounded-full border-[#FFFBF3] mt-1"
          colorScheme="none"
          checked={"background:#F9DBA9"}
          isChecked={isEng}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default LangToggle;
