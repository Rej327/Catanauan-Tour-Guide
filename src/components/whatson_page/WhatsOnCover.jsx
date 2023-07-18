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
            What's On
          </p>
        </div>
      </div>
      <div className="py-20 px-2">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-10 text-center ">
          <div className="flex gap-2 text-sm">
            <Link to="/">
              <p className="hover:font-bold hover:underline underline-offset-8 cursor-pointer">
                Home
              </p>
            </Link>
            <p> | </p>
            <p className="font-bold underline underline-offset-8">What's On</p>
          </div>
          <div className="">
            <TextCarousel className="mx-auto max-w-[290px] md:max-w-[600px] lg:max-w-[900px] text-lg">
              <div className="max-w-[800px]">
                <p>
                  Explore a variety of outstanding accommodations in the
                  charming town of Catanauan. From cozy bed and breakfasts to
                  luxurious resorts, theres a perfect place to stay for every
                  traveler's taste and preference.
                </p>
              </div>
              <div className="max-w-[800px]">
                <p>
                  The town's art gallery is hosting a captivating exhibition
                  showcasing the works of talented local artists. Immerse
                  yourself in a world of creativity and explore various artistic
                  styles and mediums. The exhibition will be open throughout the
                  month, so drop by and let the artwork inspire you.
                </p>
              </div>
              <div className="max-w-[800px]">
                <p>
                  Mark your calendars for our annual Family Fun Day on the 25th
                  of July. Bring the whole family for a day filled with games,
                  inflatables, face painting, and delicious food. There will be
                  live performances, interactive shows, and surprises for all
                  ages. It's a wonderful opportunity to create lasting memories
                  with your loved ones.
                </p>
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
                What heppening in Catanauan
              </p>
              <p className="text-white text-lg">
                Discover the fantastic events taking place across Dublin right
                now. Ranging from theatre, music and literature to family
                friendly workshops, there's so much to experience.
              </p>
              <Link
                to="https://www.facebook.com/LGUCatanauanQuezon4311"
                target="_blank"
              >
                <FooterButton className="opacity-70">
                  <span className="flex m-auto">
                    <GoLinkExternal className="text-xl mr-2" />
                    Discover Catanauan
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
