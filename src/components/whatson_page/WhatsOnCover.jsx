import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FooterButton from "../../components/common/FooterButton";
import { GoLinkExternal } from "react-icons/go";
import { LangContext } from "../../App";
import TextCarousel from "../common/TextCarousel";

const WhatsOnCover = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="w-full">
      <div className="bg-[url(./assets/WhatsOnPage/whatsoncover.jpg)] bg-fixed bg-cover bg-center h-[25rem]">
        <div className="relative bg-black bg-opacity-60 w-full h-[25rem] flex items-center flex-col justify-center ">
          <p className="text-4xl lg:text-5xl text-white font-title text-center tracking-wider">
            {language.whats_on_page?.header}
          </p>
        </div>
      </div>
      <div className="py-20 px-4">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-10 text-center ">
          <div className="flex gap-2 text-base">
            <Link to="/">
              <p className="hover:font-bold hover:underline underline-offset-8 cursor-pointer">
                Home
              </p>
            </Link>
            <p> | </p>
            <p className="font-bold underline underline-offset-8">
              {language.whats_on_page?.header}
            </p>
          </div>
          <div className="">
            <TextCarousel className="mx-auto max-w-[290px] md:max-w-[600px] lg:max-w-[900px] text-lg">
              <div className="max-w-[800px]">
                <p> {language.whats_on_page?.data.data_0}</p>
              </div>
              <div className="max-w-[800px]">
                <p> {language.whats_on_page?.data.data_1}</p>
              </div>
              <div className="max-w-[800px]">
                <p> {language.whats_on_page?.data.data_2}</p>
              </div>
            </TextCarousel>
          </div>
        </div>
      </div>
      <div className="bg-[url(./assets/WhatsOnPage/whatsonbody.jpg)] bg-fixed bg-cover bg-center h-[25rem] mb-10">
        <div className="relative bg-black bg-opacity-60 w-full h-[25rem] flex flex-col justify-center">
          <div className="w-full lg:w-[1100px] mx-auto">
            <div className="max-w-[500px] flex flex-col gap-4 mx-4">
              <p className="text-white text-xl font-bold tracking-wider">
                {language.whats_on_page?.sub_header}
              </p>
              <p className="text-white text-lg">
                {language.whats_on_page?.content}
              </p>
              <Link
                to="https://www.facebook.com/LGUCatanauanQuezon4311"
                target="_blank"
              >
                <FooterButton className="">
                  <span className="flex m-auto">
                    <GoLinkExternal className="text-xl mr-2" />
                    {language.whats_on_page?.btn_txt}
                  </span>
                </FooterButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsOnCover;
