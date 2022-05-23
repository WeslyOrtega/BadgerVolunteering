import React from "react";
import ResultResponse from "./ResultResponse";
import { useSelector } from "react-redux";

function ResultItem() {
  const { data } = useSelector(
    (state) => state.data
  );
  const { final } = data;
  return (
    <>
      <div
        className="z-30 rounded-md md:rounded-xl w-full shadow-xl p-2 mb-5 md:bottom-5 md:right-5 md:w-2/5"
        style={{ background: "rgba(58, 131, 107, 0.4)" }}>
        <ResultResponse text={final[0].text} details={final[0].details} />
      </div>
      <img
        src={final[0].img}
        alt="Badger"
        className="absolute inset-0 w-full h-full object-cover  shadow-lg rounded-md opacity-90"
      />
    </>
  );
}

export default ResultItem;

