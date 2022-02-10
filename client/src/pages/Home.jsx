import { useEffect, useState } from "react";
import UserChoice from "../Components/UserChoice";

function Home() {

  const [data, setData] = useState({
    choices:[
      {},
      {}
    ]
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/choice")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => setData(data))
      .then((error) => console.log(error))
  }, [])

  const [resp, setResp] = useState({
    id: "",
    choiceId: "",
    token: null,
  });

  const onClick = (e) => {
    setResp({
      id: data.id,
      choiceId: e.target.id,
      token: "tbd",
    });

    //this is where we will dispatch result to API endpoint and update state
  };

  const { choices } = data;
  return (
    <div className="pt-10 pb-10 ">
      <div className="grid grid-cols-2 gap-10 ">
        <div className={`bg-red-100 rounded-lg`}>
          <UserChoice data={choices[0]} click={onClick} position="" />
        </div>
        <div className={`bg-green-100 rounded-lg`}>
          <UserChoice data={choices[1]} click={onClick} position="-" />
        </div>
      </div>
      <div className="flex items-center  justify-center  text-4xl bg-slate-100 rounded-xl p-5 mt-5 active:translate-y-1 drop-shadow-md">
        <button id="undecided" onClick={onClick}>
          UNDECIDED
        </button>
      </div>
    </div>
  );
}

export default Home;
