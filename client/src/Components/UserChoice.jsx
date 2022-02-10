import React from "react";

function UserChoice({ data, click, position }) {

  const { img, text, id, alt } = data;

  return (
    <>
      <button onClick={click} className={`active:${position}translate-x-1`}>
        <div
          className={`m-2 p-2 translate-y-2 translate-x-3 rounded-lg drop-shadow-md`}
        >
          <img id={id} src={img} alt={alt} className="rounded-md"></img>
          <div
            className={`flex items-center justify-center p-2 mt-2 rounded-md`}
          >
            <span className="text-4xl">{text}</span>
          </div>
        </div>
      </button>
    </>
  );
}

export default UserChoice;
