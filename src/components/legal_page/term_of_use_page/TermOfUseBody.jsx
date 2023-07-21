import React, { useContext } from "react";
import { LangContext } from "../../../App";

const TermOfUseBody = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="w-full pb-5">
      <ul>
        {language?.legal?.term_of_use?.map((data) => (
          <div className="max-w-[1100px] text-justify px-5 mx-auto border-b-[1px] my-5 pb-10 pt-5">
            <li className="list-decimal tracking-wider mb-2">
              <p className="text-2xl font-bold">{data.title}</p>
            </li>
            <p className="text-lg">{data.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TermOfUseBody;
