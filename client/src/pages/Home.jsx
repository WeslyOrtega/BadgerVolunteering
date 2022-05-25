import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/data/dataSlice";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import UserChoice from "../Components/UserChoice";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import Slider from "../Components/Slider/Slider";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [numData, setNumData] = useState("");
  const [val, setValue] = useState("");
  const [response] = useState([
    ["not a fit", "no", "not me", "nope"],
    ["meh", "not really", "a little bit", "nah", "probably not"],
    ["slide to choose"],
    ["sure", "i agree", "yes", "sounds fun", "why not?", "sounds good"],
    [
      "nailed it!",
      "100%",
      "yes!",
      "would love that",
      "yes please!",
      "sign me up",
    ],
  ]);
  // function for choosing random expression above
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  // set data from result
  const sendResponse = (d) => {
    setNumData(d);
  };

  const { data, user_id, isError, isLoading } = useSelector(
    (state) => state.data
  );

  const [isDisabled] = useState(true);
  const { name, option1_destination, option2_destination, isFinal } = data;

  // If this is a leaf node we navigate to results
  useEffect(() => {
    if (isFinal) {
      navigate("/results");
    }
    if (val) {
      setValue(response[numData]);
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="absolute top-7 md:top-10 ml-auto mr-auto z-10 w-full md:relative md:flex md:flex-row md:justify-center md:items-center font-Poppins uppercase tracking-widest   md:text-4xl text-2xl text-[#D5F9F1]">
        <span className="flex w-full items-center justify-evenly ">
          badger ai
        </span>
      </h1>
      <div className="flex flex-col pt-[25%] justify-start items-end px-4 md:px-0  md:w-1/2  h-full">
        <div className="text-[#D5F9F1] md:text-4xl text-4xl leading-relaxed  font-extrabold text-center md:pb-5 pb-10 ">
          {name}
        </div>
      </div>
      <div className="flex items-center justify-center absolute bottom-48 w-full p-5">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[#F2BC41] md:text-4xl text-4xl leading-relaxed  font-extrabold text-center p-2">
            {response[numData / 25][
              getRandomInt(response[numData / 25].length)
            ].toUpperCase()}
          </h1>
          <Slider sendResponse={sendResponse} home={true} />
        </div>
      </div>
      <div className="flex items-center justify-center absolute bottom-3 w-full p-5 ">
        <div className="flex flex-row md:w-1/4 w-5/6 items-center justify-between  ">
          {numData === 50 ? (
            <>
              <button
                disabled={isDisabled}
                className="opacity-50"
                onClick={() => onClick(option2_destination)}
              >
                <FaTimesCircle className="text-8xl text-[#8CD4C4] " />
              </button>
              <button
                disabled={isDisabled}
                className="opacity-50"
                onClick={() => onClick(option1_destination)}
              >
                <FaCheckCircle className="text-8xl text-[#F2BC41]" />
                {console.log(`opacity-[${numData + 50}%]`)}
              </button>
            </>
          ) : numData < 50 ? (
            <>
              <button
                className={numData === 25 ? "opacity-90 focus:translate-y-1" : "opacity-100 focus:translate-y-1"}
                onClick={() => onClick(option2_destination)}
              >
                <FaTimesCircle className="text-8xl text-[#8CD4C4] " />
              </button>
              <button
                disabled={isDisabled}
                className={numData === 25 ? "opacity-40" : "opacity-30"}
                onClick={() => onClick(option1_destination)}
              >
                <FaCheckCircle className="text-8xl text-[#F2BC41]" />
              </button>
            </>
          ) : (
            <>
              <button
                disabled={isDisabled}
                className={numData === 75 ? "opacity-40" : "opacity-30"}
                onClick={() => onClick(option2_destination)}
              >
                <FaTimesCircle className="text-8xl text-[#8CD4C4] " />
              </button>

              <button
                className={numData === 75 ? "opacity-90 focus:translate-y-1" : "opacity-100 focus:translate-y-1"}
                onClick={() => onClick(option1_destination)}
                
              >
                <FaCheckCircle className="text-8xl text-[#F2BC41]" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
