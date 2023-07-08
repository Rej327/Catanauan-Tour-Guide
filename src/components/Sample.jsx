import React, { useContext } from "react";
import { LangContext } from "../App";
import { Link, useParams } from "react-router-dom";

const Sample = () => {
  const { language } = useContext(LangContext);
  return (
    <div>
      <p>Beaches</p>
      {language?.beaches?.map((beach) => (
        <div key={beach.id}>
          <Link to={`/beaches/${beach.id}`}>
            <p>{beach.name}</p>
            <button className="bg-red-500 text-white m-2">{`Go to ${beach.name}`}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sample;
