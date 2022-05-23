import { useSelector } from "react-redux";
import Spinner from "../Components/Spinner";

function ThankYou() {
  const { isError, isLoading } = useSelector((state) => state.data);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>Server Error...</h1>;
  }

  return (
    <div className="flex justify-center items-center h-screen md:container md:mx-auto">
      <div className="w-5/6 bg-[#F2BC41] h-1/4 rounded-xl shadow-xl">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="text-center text-[#D5F9F1]  ">
            <h1 className="font-Poppins uppercase tracking-widest  text-4xl mb-5 md:text-6xl">
              BADGER AI
            </h1>
            <p className="font-Poppins text-sm px-10 mb-7 md:mb-10 md:px-24 md:text-base">
              Thank you for contribution
            </p>
            <a className='font-Poppins text-md p-5 uppercase font-strong' href="/">Try Again</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
