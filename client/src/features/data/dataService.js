import axios from "axios";
const API_URL = "/api/choice/";

// Get Initial Choices; will do this work in backend
const getNode = async (_id) => {
  const response = await axios.get(`http://localhost:3000/nodes?_id=${_id}`);
  const {
    option1_destination,
    option2_destination,
    option1_obj,
    option2_obj,
    isFinal, 
    final
  } = response.data[0];
  const res = {
    isFinal: isFinal,
    option1_obj: option1_obj,
    option1_address: option1_destination,
    option2_obj: option2_obj,
    option2_address: option2_destination,
    final: final
  };
  return res;
};

// Get Initial Choices; will do this work in backend
const getData = async (_id) => {
  let response = null;
  let result = null;
  if(_id.option1_obj){
   response = await axios.get(
      `http://localhost:3000/options?_id=${_id.option1_obj}`
    );
    result = {...response.data[0], dest_node: _id.option1_address}

  }else if(_id.option2_obj){
    response = await axios.get(
      `http://localhost:3000/options?_id=${_id.option2_obj}`
    );
    result = {...response.data[0], dest_node: _id.option2_address}

  }

  return result;
};

// Get Final objects and return them
const getFinal = async (_id) => {
  let response = null;
  let result = null;
  if(_id.option1_obj){
   response = await axios.get(
      `http://localhost:3000/options?_id=${_id.option1_obj}`
    );
    result = {...response.data[0], dest_node: _id.option1_address}

  }else if(_id.option2_obj){
    response = await axios.get(
      `http://localhost:3000/options?_id=${_id.option2_obj}`
    );
    result = {...response.data[0], dest_node: _id.option2_address}

  }

  return result;
};

// Get following choices and send choices
const getDataAndRespond = async (choice) => {
  const response = await axios.get(API_URL, choice);
  return response.data;
};

const dataService = {
  getData,
  getNode,
  getDataAndRespond,
};
export default dataService;

//s://badgervolunteering.herokuapp.com
