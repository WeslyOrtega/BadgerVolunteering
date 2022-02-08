import { useState } from "react";
import UserChoice from "../components/UserChoice";
import img1 from "../assets/pexels.jpg";
import img2 from "../assets/pexels2.jpg";

function Home() {
  const [data] = useState({
    _id: "1",
    data1: {
      _id: "snoopy",
      text: "Date me",
      img: img1,
    },
    data2: {
      _id: "poopy",
      text: "hate me",
      img: img2,
    },
  });

  const [resp, setResp] = useState({
    _id: "",
    choiceId: "",
    token: null,
  });

  const onClick = () => {};

  const { data1, data2 } = data;
  return (
    <div className="pt-10 pb-10">
      <div className="grid grid-cols-2 gap-5 ">
        <div className="bg-red-100 rounded-lg">
          <div className="bg-red-200 m-2 p-2 translate-y-2 translate-x-2 rounded-lg">
            <UserChoice data={data1} onClick={onClick} />
          </div>
        </div>
        <div className="bg-red-100 rounded-xl">
          <div className="bg-red-200 m-2 p-2 translate-y-2 translate-x-2 rounded-lg">
            <UserChoice data={data2} onClick={onClick} />
          </div>
        </div>
      </div>
      <div className="bg-red-100 rounded-xl p-5 mt-5">
        <button onClick={onClick}>UNDECIDED</button>
      </div>
    </div>
  );
}

export default Home;
