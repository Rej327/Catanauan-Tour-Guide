import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { LangContext } from "../App";

const Beaches = () => {
  const { language } = useContext(LangContext);
  const [viewPrice, setViewPrice] = useState(false);
  const params = useParams();

  const beachInfo = useMemo(() => {
    const beach = language?.beaches?.find((beach) => beach.id == params.id);
    return beach;
  }, [language, params]);

  return (
    <div>
      <h1>{language?.titles?.listOfBeaches}</h1>
      <p>{beachInfo?.name}</p>
      <button onClick={() => setViewPrice(!viewPrice)}>View Price</button>
      {viewPrice && (
        <div className="border-2 mt-4">
          <p>{`Small: ${beachInfo.price.sm}`}</p>
          <p>{`Extra Large: ${beachInfo.price.xl}`}</p>
        </div>
      )}
    </div>
  );
};

export default Beaches;
