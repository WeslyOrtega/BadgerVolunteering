import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function UserChoice({ data, onClick, position, address }) {
  const { text, alt, img } = data;
  return (
    <div className="h-full bg-teal-800 ">
      <div
        className={
          "relative w-full h-full rounded-3xl pb-2/3 sm:pt-1/3 lg:pt-2/3 shadow-xl"
        }
      >
        <button
          onClick={() => onClick(address)}
          className={`h-full w-full active:${position}translate-x-1`}
        >
          <div className="text-5xl font-PlayfairDisplay text-center text-slate-700 ">
            <div className="flex flex-row justify-center items-center  z-30 text-teal-100  p-4 w-full ">
              {text}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default UserChoice;
