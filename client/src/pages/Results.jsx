import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import ResultItem from "../Components/ResultItem";
function Results() {
  return (
    <div className="h-screen relative flex flex-col justify-center">
      <div className="z-30  md:relative md:grid md:grid-cols-3 md:items-center md:p-3   ">
        <div className="absolute top-24 left-5 md:left-0 md:top-0 z-10 md:relative md:p-0 md:flex md:flex-row md:items-center md:justify-start md:visible invisible">
          <a href="/">
            <img src={Logo} alt="Badger" className="h-24 md:h-16 " />
          </a>
        </div>
        <h1 className="absolute top-7 md:top-0 ml-auto mr-auto z-10 w-full md:relative md:flex md:flex-row md:justify-center md:items-center font-Poppins uppercase tracking-widest   md:text-4xl text-2xl text-slate-300">
          <span className="flex w-full items-center justify-evenly ">
            badger ai
          </span>
        </h1>
        <div className="absolute bottom-0 w-full md:flex md:flex-row md:justify-end md:items-center font-Poppins "></div>
      </div>

      <div className="h-full md:h-5/6 md:p-2">
        <div className="h-full rounded-xl shadow-lg p-3 flex relative justify-center items-end md:justify-end md:p-8">
          <ResultItem />
        </div>
      </div>
    </div>
  );
}

export default Results;
