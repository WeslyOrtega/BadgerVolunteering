import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { sendResponse } from "../features/data/dataSlice";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ResultResponse({ text, details }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user_id } = useSelector((state) => state.data);

  const onClick = (e) => {
    dispatch(
      sendResponse({
        agree: e,
        user_token: user_id.user_token,
      })
    );
    navigate("/thank-you");
  };
  return (
    <>
      <div className="font-Poppins text-center pt-10 overflow-hidden text-[#D5F9F1]">
        <h1 className="text-2xl pb-10">
          Congratulations, We have found the perfect match for your volunteer
          experience as a<span className="text-white text-2xl "> {text} </span>
          specialist.
        </h1>
      </div>
      <h1 className="text-center font-black text-xl text-[#F2BC41] pb-2">
        Is This a Fit?
      </h1>

      <div className="flex justify-center items-center p-5 ">
        <div className="flex flex-row w-3/4 pt-3  items-center justify-between  ">
          <button className='focus:translate-y-1' onClick={() => onClick(false)}>
            <FaTimesCircle className="text-7xl text-[#8CD4C4]" />
          </button>
          <button className='focus:translate-y-1' onClick={() => onClick(true)}>
            <FaCheckCircle className="text-7xl text-[#F2BC41]" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultResponse;
