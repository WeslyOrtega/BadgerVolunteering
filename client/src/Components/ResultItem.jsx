import React from "react";
import ResultResponse from "./ResultResponse";

function ResultItem() {
  return (
    <>
      <div className="z-30 rounded-xl w-full bg-slate-100 opacity-90 shadow-xl p-2 md:bottom-5 md:right-5 md:w-2/5   ">
        <ResultResponse />
      </div>
      <img
        src="https://i.imgur.com/gALMySQ.jpg"
        alt="Badger"
        className="absolute inset-0 w-full h-full object-cover shadow-lg rounded-md opacity-90"
      />
    </>
  );
}

export default ResultItem;
