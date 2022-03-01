import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getData, getNode, reset } from "../features/data/dataSlice";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import ResultItem from "../components/ResultItem";
function Results() {
  const { options, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.data
  );
  return (
    <div className="h-screen relative flex flex-col justify-center">
      <div className="z-30  md:relative md:grid md:grid-cols-3 md:items-center md:p-3   ">
        <div className="absolute top-24 left-5 md:left-0 md:top-0 z-10 md:relative md:p-0 md:flex md:flex-row md:items-center md:justify-start ">
          <Link to="/">
            <img src={Logo} alt="Badger" className="h-24 md:h-16 " />
          </Link>
        </div>
        <h1 className="absolute top-7 md:top-0 ml-auto mr-auto z-10 w-full md:relative md:flex md:flex-row md:justify-center md:items-center font-PlayfairDisplay  md:text-4xl text-3xl text-slate-300">
          <span className="flex w-full items-center justify-evenly tracking-widest">
            B A D G E R
          </span>
        </h1>
        <div className="absolute bottom-0 w-full md:flex md:flex-row md:justify-end md:items-center font-Poppins ">
          {/* <div className="flex flex-row w-full items-center justify-center ">
          <FaArrowAltCircleRight className=" text-green-800 text-3xl" />
          <span className=" pl-3 text-slate-700">More Results...</span>
          </div> */}
        </div>
      </div>

      <div className=" h-5/6 p-2">
        <div className="h-full rounded-xl shadow-lg p-3 flex relative justify-center items-end md:justify-end md:p-8">
          <ResultItem />
        </div>
      </div>
    </div>
  );
}

export default Results;

//{options.final.map((element,idx)=><div key={idx}>{element}</div>)}
