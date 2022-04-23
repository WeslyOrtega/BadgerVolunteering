import {  useDispatch, useSelector} from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { sendResponse } from "../features/data/dataSlice";
import { useNavigate } from "react-router-dom";

function ResultResponse({ text, details }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  user_id } = useSelector(
    (state) => state.data
  );

  const onClick = (e) => {
    dispatch(sendResponse(
      {
      agree: e,
      user_token: user_id.user_token}
      ));
    navigate('/thank-you')
  };
  return (
    <>
      <div className="font-Poppins text-center pb-3 overflow-hidden">
        <h1>
          Our algorithm has matched you with ...
          <span className="text-xl"> {text}</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 pl-2 pr-2 gap-3 pb-3">
        <button className="active:scale-175" onClick={() => onClick(true)}>
          <div className="flex flex-col w-full items-center justify-center bg-slate-300 rounded-xl shadow-xl p-4 ">
            <h1>Agree?</h1>
            <FaCheck className="flex items-center justify-center w-full text-5xl text-green-700" />
          </div>
        </button>
        <button className="active:scale-175" onClick={() => onClick(false)}>
          <div className="flex flex-col items-center justify-center w-full bg-slate-300 rounded-xl shadow-xl p-4">
            <h1>Disagree?</h1>
            <FaTimes className="flex items-center justify-center w-full  text-5xl text-red-700" />
          </div>
        </button>
      </div>
    </>
  );
}

export default ResultResponse;
