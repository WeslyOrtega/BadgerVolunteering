import { useSelector } from "react-redux";

import Spinner from "../Components/Spinner";
import Slider from "../Components/Slider/Slider";
import {
  FaCheckCircle,
  FaTwitterSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";
function ThankYou() {
  const { isError, isLoading } = useSelector((state) => state.data);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>Server Error...</h1>;
  }

  return (
    <div className="flex flex-col h-screen relative w-full">
      <div className="absolute top-7 md:top-10 ml-auto mr-auto z-10 w-full md:relative md:flex md:flex-row md:justify-center md:items-center font-Poppins uppercase tracking-widest   md:text-4xl text-2xl text-[#D5F9F1]">
        <h1 className="flex w-full items-center justify-evenly ">badger ai</h1>
      </div>

      <div className="w-full ml-auto pt-28 flex flex-wrap justify-between px-4  md:px-0  h-1/2  ">
        <div>
          <h1 className=" text-center w-full text-[#F2BC41] md:text-2xl text-md leading-relaxed  font-extrabold md:pb-5  ">
            How'd we do?
          </h1>
          <div className="text-[#D5F9F1] md:text-4xl text-xl leading-loose  m-auto md:w-2/3 font-extrabold text-center md:pb-5 pb-10">
            <h1>
              Our algorithm learns by your feedback. Let us know how closely you
              think the opportunity matches your style.
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full h-1/2">
        <div className="flex flex-col items-center justify-center w-full">
          <Slider home={false} />
          <div className="flex flex-row text-sm justify-between w-[290px] pt-1 text-[#F2BC41]">
            <h1>NOT A FIT</h1>
            <h1>NAILED IT</h1>
          </div>
        </div>

        <div className=" w-full flex items-center justify-center md:pt-12 pt-4">
          <textarea
            placeholder="Other comments / suggestions?"
            className="
            bg-[#D5F9F1] bg-clip-padding
            form-control
            block
            w-[330px]
            md:w-2/3
            px-3
            py-1.5
            text-base
            font-normal
            text-[#2B6351]
            border border-solid border-[#377968]
            transition
            ease-in-out
            m-0
            focus:text-[#275446] focus:bg-[#e2fbf5] focus:border-[#377968] focus:outline-none
            rounded-xl 
          "
            id="user-feedback"
            rows="5"
          ></textarea>
        </div>

        <div className="flex flex-row w-full items-center justify-center pt-5">
          <a
            href="/"
            className="flex items-center relative justify-center w-[330px] bg-[#F2BC41]  md:w-2/3 rounded-xl text-[#D5F9F1] md:text-4xl text-2xl leading-loose  font-extrabold text-center md:pb-5 p-4 shadow-lg focus:translate-y-1"
          >
            " "
            <FaCheckCircle className="absolute z-30 text-7xl text-[#F2BC41]" />
            <div className="absolute bg-[#D5F9F1] w-[50px] h-[50px]"></div>
          </a>
        </div>
        <div className="flex flex-row w-1/4 justify-between pt-5">
          <a
            class="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Find%out%what%kind%of%volunteer%you%are%with%Badger%AI%tinyurl.com/39vjwj2t%"
          >
            <FaTwitterSquare className="z-30 text-[32px] text-[#8CD4C4]" />
          </a>
          <a
            class="message-share-button"
            href="sms:body=Find%out%what%kind%of%volunteer%you%are%with%Badger%AI%tinyurl.com/39vjwj2t"
          >
            <FaEnvelopeSquare className="z-30 text-[32px] text-[#8CD4C4]" />
          </a>
        </div>
      </div>
      <h1 className="text-[#8CD4C4] text-center text-sm p-2">share!</h1>
    </div>
  );
}

export default ThankYou;
