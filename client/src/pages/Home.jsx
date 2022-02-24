import { useState, useEffect } from "react";
import UserChoice from "../components/UserChoice";
import img1 from "../assets/pexels.jpg";
import img2 from "../assets/pexels2.jpg";

function Home() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/choice");
    if (res.status === 200) {
      const data = await res.json();
      setData(data);
    }
  };

  const [data, setData] = useState(null);

  const [resp, setResp] = useState(null);

  const onClick = (e) => {
    setResp({
      id: data.id,
      choiceId: e,
      token: "tbd",
    });

    //this is where we will dispatch result to API endpoint and update state
  };

  useEffect(() => {
    fetchData();
    if (resp !== null) console.log(resp);
  }, [resp]);

  if (data === null) {
    return <h1>Loading...</h1>;
  }

  const { choices } = data;
  return (
    <div className="pt-10 pb-10 ">
      <div className="grid grid-cols-2 gap-10 ">
        <div className={`bg-gray-100 rounded-lg`}>
          <UserChoice data={choices[0]} onClick={onClick} position="" />
        </div>
        <div className={`bg-gray-100 rounded-lg`}>
          <UserChoice data={choices[1]} onClick={onClick} position="-" />
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
