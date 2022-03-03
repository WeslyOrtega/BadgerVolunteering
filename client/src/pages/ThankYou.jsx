import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/data/dataSlice";

function ThankYou() {
  const {  isSuccess, isError, isLoading } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If API retrieves data successfully we navigate to home page
  useEffect(() => {
      dispatch(reset());

  }, [dispatch,reset]);

  const onClick = () => {
   navigate('/home')
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if(isError){
    return <h1>Server Error...</h1>
  }

  return (
    <div className="flex justify-center items-center h-screen md:container md:mx-auto">
      <div className="w-full bg-slate-200 h-3/4 rounded-xl shadow-xl">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="text-center text-slate-600  ">
            <h1 className="font-PlayfairDisplay text-5xl mb-10 md:text-6xl">
            BADGER
            </h1>
            <p className="font-Poppins text-sm px-10 mb-7 md:mb-10 md:px-24 md:text-base">
              Thank you for contribution
            </p>
          </div>
          {/* <div className="w-full mt-10 px-6 md:w-1/3 md:mt-9">
            <button
              className="bg-slate-600  py-5 w-full text-slate-100 rounded-2xl shadow-lg hover:text-white hover:shadow-xl focus:animate-wiggle"
              onClick={onClick}
            >
              Try again...
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
