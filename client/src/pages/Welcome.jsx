import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getNode, getData } from "../features/data/dataSlice";

function Welcome() {
  const { data, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length === 2) {
      navigate("/home");
    }
  }, [data]);
  const onClick = () => {
    //  Get the initial node from database
    dispatch(getNode("6217035701d269f6df9092f0"))
      .unwrap()
      .then((originalPromiseResult) => {
        // Let call complete and then get the addresses of options and get those elements
        const {
          isFinal,
          option1_address,
          option1_obj,
          option2_address,
          option2_obj,
        } = originalPromiseResult;
        dispatch(getData({ option1_obj, option1_address }));
        dispatch(getData({ option2_obj, option2_address }));
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log("Error");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen md:container md:mx-auto">
      <div className="w-full bg-slate-200 h-3/4 rounded-xl shadow-xl">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="text-center text-slate-600  ">
            <h1 className="font-PlayfairDisplay text-5xl mb-10 md:text-6xl">
              WELCOME TO BADGER
            </h1>
            <p className="font-Poppins text-sm px-10 mb-7 md:mb-10 md:px-24 md:text-base">
              Matching you to volunteer work that fits your personality.
            </p>
          </div>
          <div className="w-full mt-10 px-6 md:w-1/3 md:mt-9">
            <button
              className="bg-slate-600  py-5 w-full text-slate-100 rounded-2xl shadow-lg hover:text-white hover:shadow-xl focus:animate-wiggle"
              onClick={onClick}
            >
              Begin...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
