import { useState, useEffect } from "react";
import UserChoice from "../components/UserChoice";
import img1 from "../assets/pexels.jpg";
import img2 from "../assets/pexels2.jpg";

function Home() {
  const [data] = useState({
    id: "1",
    option1: {
      id: "snoopy",
      text: "Date me",
      img: img1,
      alt: "happy office employee",
      colorPrimary: "bg-red-100",
      colorSecondary: "bg-red-200",
    },
    option2: {
      id: "poopy",
      text: "hate me",
      img: img2,
      alt: "happy people planting trees",
      colorPrimary: "bg-green-100",
      colorSecondary: "bg-green-200",
    },
  });

  const [resp, setResp] = useState(null);

  const onClick = (e) => {
    setResp({
      id: data.id,
      choiceId: e,
      token: "tbd",
    });

    //this is where we will dispatch result to API endpoint and update state
  };

  const { option1, option2 } = data;
  useEffect(() => {
    if (resp !== null) 
    console.log(resp);
  }, [resp]);

  return (
    <div className="pt-10 pb-10 ">
      <div className="grid grid-cols-2 gap-10 ">
        <div className={`${option1.colorPrimary} rounded-lg`}>
          <UserChoice data={option1} onClick={onClick} position="" />
        </div>
        <div className={`${option2.colorPrimary} rounded-lg`}>
          <UserChoice data={option2} onClick={onClick} position="-" />
        </div>
      </div>
      <div className="flex items-center  justify-center  text-4xl bg-slate-100 rounded-xl p-5 mt-5 active:translate-y-1 drop-shadow-md">
        <button id="undecided" onClick={() => onClick("undecided")}>
          UNDECIDED
        </button>
      </div>
    </div>
  );
}

export default Home;
