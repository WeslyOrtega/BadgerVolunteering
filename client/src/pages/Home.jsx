import React from "react";
import UserChoice from "../components/UserChoice";

function Home() {
  return (
    <div className="pt-10 pb-10">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="bg-red-100 rounded-xl">
          <UserChoice />
        </div>
        <div className="bg-red-100 rounded-xl">
          <UserChoice />
        </div>
      </div>
      <div className="bg-red-100 rounded-xl p-5 mt-5">Undecided</div>
    </div>
  );
}

export default Home;
