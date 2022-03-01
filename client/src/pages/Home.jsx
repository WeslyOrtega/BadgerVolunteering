import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getData, getNode, reset } from '../features/data/dataSlice'
import UserChoice from "../components/UserChoice";
import img1 from "../assets/pexels.jpg";
import img2 from "../assets/pexels2.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  // const fetchData = async () => {
  //   const res = await fetch("http://localhost:5000/api/choice");
  //   if (res.status === 200) {
  //     const data = await res.json();
  //     setData(data);
  //   }
  // };

  //const [data, setData] = useState(null);
  const [resp, setResp] = useState(null);
  const navigate = useNavigate();
  const { data, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.data
  )


  const onClick = (e) => {
   //  Use the clicked object to point to next node
   dispatch(getNode(e))
   .unwrap()
   .then((originalPromiseResult) => {
     // Let call complete and then get the addresses of options and get those elements
     const {isFinal, option1_address, option1_obj,option2_address,option2_obj} = originalPromiseResult;
   
     if(isFinal){
       //do something
       console.log('Final node')
       navigate('/results')
     }else{
      dispatch(getData({option1_obj,option1_address}));
      dispatch(getData({option2_obj,option2_address}));
     }

   })
   .catch((rejectedValueOrSerializedError) => {
     console.log("Error");
   });
    //this is where we will dispatch result to API endpoint and update state
  };

  const dispatch = useDispatch();


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const { choices } = data;
  return (
    <div className="h-screen pt-5 pb-5 md:h-screen md:pt-10 md:pb-10">
      <div className="flex flex-col md:grid md:grid-cols-2 p-5 rounded-xl md:gap-6 bg-slate-300 h-5/6 ">
        <div className={'bg-slate-100 shadow-xl  h-1/2 p-3 rounded-2xl md:h-full m-2 md:m-0'}>
          <UserChoice data={data[data.length-2]} onClick={onClick} position="" />
        </div>
        <div className={'bg-slate-100 h-1/2 p-3 shadow-xl  rounded-2xl md:h-full'}>
          <UserChoice data={data[data.length-1]} onClick={onClick} position="-" />
        </div>
      </div>
      <div className="flex items-center  justify-center font-PlayfairDisplay text-slate-600 text-4xl bg-slate-100 rounded-xl  mt-5 active:translate-y-1 drop-shadow-md">
       
        <button  className='p-5 pt-6 pb-6 rounded-xl shadow-xl  w-full h-full bg-slate-100' id="undecided" onClick={() => onClick("undecided")}>
          Not Important
        </button>
      </div>
    </div>
  );
}

export default Home;
