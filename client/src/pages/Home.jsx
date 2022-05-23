import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/data/dataSlice";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import UserChoice from "../Components/UserChoice";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, user_id, isError, isLoading } = useSelector(
    (state) => state.data
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  const {
    name,
    option1_obj,
    option2_obj,
    option1_destination,
    option2_destination,
    isFinal,
  } = data;

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="absolute top-7 md:top-10 ml-auto mr-auto z-10 w-full md:relative md:flex md:flex-row md:justify-center md:items-center font-Poppins uppercase tracking-widest   md:text-4xl text-2xl text-[#D5F9F1]">
        <span className="flex w-full items-center justify-evenly ">
          badger ai
        </span>
      </h1>
      <div className="flex flex-col items-between justify-center px-4 md:px-0 md:h-screen md:w-1/2 h-5/6">
        <div className="text-[#D5F9F1] md:text-4xl text-4xl leading-relaxed  font-extrabold text-center md:pb-5 pb-10">
          {name}
        </div>

        <div className="flex flex-row items-center  justify-center pt-5 pb-5  md:pt-10 md:pb-10 w-full ">
          <div className="flex flex-col md:grid md:grid-cols-2 p-5   rounded-xl md:gap-6 w-full h-full ">
            {!isMobile && (
              <>
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
                <div
                  className={"bg-teal-600  p-3 shadow-xl  rounded-2xl md:full"}
                >
                  <UserChoice
                    data={option2_obj}
                    address={option2_destination}
                    onClick={onClick}
                    position="-"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center  justify-center  text-center w-full text-teal-200 text-lg font-extrabold invisible md-visible">
          Choose the option which best matches your personality.
        </div>
      </div>
      <div className="flex items-center justify-center absolute bottom-3 w-full p-5">
        {isMobile && (
          <div className="flex flex-row w-full items-center justify-evenly  ">
            <button onClick={() => onClick(option1_destination)}>
              <FaCheckCircle className="text-7xl text-[#8CD4C4] " />
            </button>
            <button onClick={() => onClick(option2_destination)}>
              <FaTimesCircle className="text-7xl text-[#F2BC41]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
