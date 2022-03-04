import React from "react";
import ResultResponse from "./ResultResponse";
import { useSelector } from "react-redux";

function ResultItem() {
  const { data, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.data
  );
  const { final } = data
  return (
    <>
      <div className="z-30 rounded-xl w-full bg-slate-100 opacity-90 shadow-xl p-2 md:bottom-5 md:right-5 md:w-2/5   ">
        <ResultResponse text={final[0].text} details={final[0].details} />
      </div>
      <img
        src={final[0].img}
        alt="Badger"
        className="absolute inset-0 w-full h-full object-cover shadow-lg rounded-md opacity-90"
      />
    </>
  );
}

export default ResultItem;
