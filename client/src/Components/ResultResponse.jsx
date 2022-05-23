import {  useDispatch, useSelector} from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { sendResponse } from "../features/data/dataSlice";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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
      <div className="font-Poppins text-center pt-10 overflow-hidden text-[#D5F9F1]">
        <h1 className='text-2xl pb-10'>
        Congratulations, We have found the perfect match for your volunteer experience as a 
          <span className="text-white text-2xl "> {text} </span>
          specialist.
        </h1>

      </div>
      <div className="flex justify-center items-center p-5 ">
          
          <div className="flex flex-row w-3/4  items-center justify-between ">
            <button onClick={() => onClick(true)}>
              <FaCheckCircle  className="text-7xl text-[#8CD4C4]" />
            </button>
            <button onClick={() => onClick(false)}>
              <FaTimesCircle className="text-7xl text-[#F2BC41]" />
            </button>
          </div>
          
      </div>
      <h1 className='text-center text-[#F2BC41] pb-2'>How'd we do?</h1>



      {/* <div className="grid grid-cols-2 pl-2 pr-2 gap-3 pb-3">
        <button className="active:scale-175" onClick={() => onClick(true)}>
          <div className="flex flex-col w-full items-center justify-center bg-slate-300 rounded-xl shadow-xl p-4 ">
           
            <FaCheck className="flex items-center justify-center w-full text-5xl text-green-700" />
          </div>
        </button>
        <button className="active:scale-175" onClick={() => onClick(false)}>
          <div className="flex flex-col items-center justify-center w-full bg-slate-300 rounded-xl shadow-xl p-4">
            <h1>Disagree?</h1>
            <FaTimes className="flex items-center justify-center w-full  text-5xl text-red-700" />
          </div>
        </button>
      </div> */}
    </>
  );
}

export default ResultResponse;


// position: absolute;
// width: 380px;
// height: 391px;
// left: 17px;
// top: 534px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 600;
// font-size: 24px;
// line-height: 36px;
// text-align: center;

// color: #FFFFFF;
