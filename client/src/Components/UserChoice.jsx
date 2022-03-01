import React from "react";

function UserChoice({ data, onClick, position }) {
  const { _id, text, alt, img, dest_node } = data;
  return (
    <div className='h-full bg-slate-50 '>
       <div
          className={'relative w-full h-full rounded-3xl pb-2/3 sm:pt-1/3 lg:pt-2/3 shadow-xl'}
        >
          {/*  */}
         
      <button
        onClick={()=>onClick(dest_node)}
        className={`h-full w-full active:${position}translate-x-1`}
      > 
      <div className='text-5xl font-PlayfairDisplay text-center text-slate-700 '><img id={_id} src={img} alt={alt} className="absolute inset-0 w-full h-full object-cover shadow-lg rounded-md"></img>
      
      <div className="absolute bottom-0  p-4 w-full bg-slate-100 opacity-60   ">
      {text}
   </div>
   <div className='z-30 text-slate-700 absolute bottom-0 p-4 w-full '>
        {text}</div>

      </div>
      </button>
         </div>
       

{/* 
          <h1
            className={`font-PlayfairDisplay text-center text-slate-700 p-2 mt-2 rounded-md`}
          >
            <span className="text-4xl">{text}</span>
       
        </h1> */}
     
    </ div>
  );
}

export default UserChoice;
//` m-2 p-2 translate-y-2 translate-x-3 rounded-lg drop-shadow-md`