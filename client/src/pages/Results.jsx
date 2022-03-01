import React from "react";
import {FaArrowAltCircleRight} from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux";
import { getData, getNode, reset } from "../features/data/dataSlice";
import Logo from "../assets/logo.png";
function Results() {
  const { options, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.data
  );

  return (
    <div className="h-screen">
      <div className="flex flex-row justify-between items-center p-5 pt-2 pb-2 ">
        <div>
          <img src={Logo} alt="Badger" className="h-24"></img>
        </div>
        <h1 className="font-PlayfairDisplay text-4xl text-slate-300">
          B A D G E R
        </h1>
        <div className='flex flex-row items-center'><FaArrowAltCircleRight className='text-green-800 font' /> More </div>
      </div>

      <div className=" h-5/6 p-2 ">
        <div className="bg-blue-100 h-full rounded-xl  shadow-lg p-3 relative">
          <img
            src="https://i.imgur.com/gALMySQ.jpg"
            alt="Badger"
            className="absolute inset-0 w-full h-full object-cover shadow-lg rounded-md opacity-90"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Results;

//{options.final.map((element,idx)=><div key={idx}>{element}</div>)}
