import React from "react";

function UserChoice({ data, onClick, position, address}) {
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
            {/* <img
              src={img}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover shadow-lg rounded-md"
            ></img> */}

            {/* <div className="flex flex-row justify-center items-center p-4 w-full bg-teal-800 opacity-60   ">
              {text}
            </div> */}
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
//` m-2 p-2 translate-y-2 translate-x-3 rounded-lg drop-shadow-md`
