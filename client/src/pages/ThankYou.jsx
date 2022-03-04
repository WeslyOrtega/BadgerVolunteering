import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { reset } from "../features/data/dataSlice";

function ThankYou() {
  const { isSuccess, isError, isLoading } = useSelector((state) => state.data);
  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Server Error...</h1>;
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
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
