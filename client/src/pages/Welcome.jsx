import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBegin, getData } from "../features/data/dataSlice";
import Spinner from "../Components/Spinner";
function Welcome() {
  const { user_id, isSuccess, isError, isLoading } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If API retrieves data successfully we navigate to home page
  useEffect(() => {
    if (isSuccess && user_id) {
      navigate("/v2");
    }
  }, [isSuccess]);

  const onClick = () => {
    // Get starting data from API
    dispatch(getBegin())
      .unwrap()
      .then((originalPromiseResult) => {
        // Let call complete and then use user_token and node_id to get data
        const { start: node_id, user_token } = originalPromiseResult;
        dispatch(getData({ user_token, node_id }));
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log("Error!");
      });
  };
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>Server Error...</h1>;
  }

  return (
    <div className="flex justify-center items-center h-screen md:container md:mx-auto">
      <div className="w-full bg-slate-200 h-3/4 rounded-xl shadow-xl">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="text-center text-teal-700  ">
            <h1 className="font-PlayfairDisplay text-5xl mb-10 md:text-6xl">
              WELCOME TO BADGER
            </h1>
            <p className="font-Poppins text-sm px-10 mb-7 md:mb-5 md:px-24 md:text-xl">
              Matching you to volunteer work that fits your personality.
            </p>
            <h1 className="pl-32 pr-32">
              Focus on answering the next few questions in terms of what types
              of activities be enjoyable to you. If you are uncertain, choose
              the option which is the closest.
            </h1>
          </div>
          <div className="w-full mt-10 px-6 md:w-1/3 md:mt-9">
            <button
              className="bg-teal-900  py-5 w-full text-slate-100 rounded-2xl shadow-lg hover:text-white hover:shadow-xl focus:animate-wiggle"
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
