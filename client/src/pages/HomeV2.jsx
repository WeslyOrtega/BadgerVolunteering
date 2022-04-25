import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, reset } from "../features/data/dataSlice";
import UserChoice from "../Components/UserChoice";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, user_id, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.data
  );
  const {
    name,
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
    return <Spinner />;
  }

  if (isError) {
    return <h1>Server Error...</h1>;
  }

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-between justify-center  md:h-screen md:w-1/2 h-5/6">
        <div className="text-teal-100 md:text-4xl text-3xl font-extrabold text-center md:pb-5 pb-10">
          {name}
        </div>

        <div className="flex flex-row items-center  justify-center pt-5 pb-5  md:pt-10 md:pb-10 w-full ">
          <div className="flex flex-col md:grid md:grid-cols-2 p-5   rounded-xl md:gap-6 w-full h-full ">
            <div
              className={
                "bg-teal-600 shadow-xl  h-full p-3 rounded-2xl md:h-full m-2 md:m-0"
              }
            >
              <UserChoice
                data={option1_obj}
                address={option1_destination}
                onClick={onClick}
                position=""
              />
            </div>
            <div className={"bg-teal-600  p-3 shadow-xl  rounded-2xl md:full"}>
              <UserChoice
                data={option2_obj}
                address={option2_destination}
                onClick={onClick}
                position="-"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center  justify-center  text-center w-full text-teal-200 text-lg font-extrabold">
          Choose the option which best matches your personality.
        </div>
      </div>
    </div>
  );
}

export default Home;
