import axios from "axios";
const API_URL = "/api/choice/";

// Get initial user data
const getBegin = async () => {
  const response = await axios.get(`http://127.0.0.1:5000/api/begin`);

  return response.data;
};
// Get Initial Choices; will do this work in backend
const getNode = async (_id) => {
  const response = await axios.get(`http://localhost:3000/nodes?_id=${_id}`);
  const {
    option1_destination,
    option2_destination,
    option1_obj,
    option2_obj,
    isFinal,
    final,
  } = response.data[0];
  const res = {
    isFinal: isFinal,
    option1_obj: option1_obj,
    option1_address: option1_destination,
    option2_obj: option2_obj,
    option2_address: option2_destination,
    final: final,
  };
  return res;
};

// Get Initial Choices; will do this work in backend
const getData = async (data) => {
  const response = await axios.get(
    `http://127.0.0.1:5000/api/node?node_id=${data.node_id}`,
    {
      headers: {
        user_token: data.user_token,
      },
    }
  );
 return response.data;
};


// Send final response to backend
const sendResponse = async (data) => {
  const config = {
    headers: { user_token: data.user_token },
  };
  const response = await axios.post(
    `http://127.0.0.1:5000/api/review`,
    { agree: data.agree },
    config
  );
  return response.data;
};

const dataService = {
  getBegin,
  getData,
  sendResponse,
};
export default dataService;

//s://badgervolunteering.herokuapp.com
