import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, reset } from "../features/data/dataSlice";
import UserChoice from "../components/UserChoice";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, user_id, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.data
  );
  const {
    option1_obj,
    option2_obj,
    option1_destination,
    option2_destination,
    isFinal,
  } = data;

  // If this is a leaf node we navigate to results
  useEffect(() => {
    if (isFinal) {
      navigate("/results");
    }
  }, [data]);

  const onClick = (e) => {
    const nodePackage = {
      user_token: user_id.user_token,
      node_id: e,
    };
    dispatch(getData(nodePackage));
  };

  if (isLoading || data.isFinal) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Server Error...</h1>;
  }

  return (
    <div className="h-screen pt-5 pb-5 md:h-screen md:pt-10 md:pb-10">
      <div className="flex flex-col md:grid md:grid-cols-2 p-5 rounded-xl md:gap-6 bg-slate-300 h-5/6 ">
        <div
          className={
            "bg-slate-100 shadow-xl  h-1/2 p-3 rounded-2xl md:h-full m-2 md:m-0"
          }
        >
          <UserChoice
            data={option1_obj}
            address={option1_destination}
            onClick={onClick}
            position=""
          />
        </div>
        <div
          className={"bg-slate-100 h-1/2 p-3 shadow-xl  rounded-2xl md:h-full"}
        >
          <UserChoice
            data={option2_obj}
            address={option2_destination}
            onClick={onClick}
            position="-"
          />
        </div>
      </div>
      {/* <div className="flex items-center  justify-center font-PlayfairDisplay text-slate-600 text-4xl bg-slate-100 rounded-xl  mt-5 active:translate-y-1 drop-shadow-md">
        <button
          className="p-5 pt-6 pb-6 rounded-xl shadow-xl  w-full h-full bg-slate-100"
          id="undecided"
          onClick={() => onClick("undecided")}
        >
          Not Important
        </button>
      </div> */}
    </div>
  );
}

export default Home;
