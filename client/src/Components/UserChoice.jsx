import React from "react";

function UserChoice({ data }) {
  const { img, text } = data;
  return (
    <>
      <img src={img} alt="image of stuff"></img>
      <div className="flex items-center justify-center p-2 bg-red-100 mt-2 rounded-md">
        <span className="text-4xl">{text}</span>
      </div>
    </>
  );
}

export default UserChoice;
