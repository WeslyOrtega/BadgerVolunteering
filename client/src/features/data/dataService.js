import axios from "axios";
const API_URL = "/api/choice/";

const baseURL =
  process.env.REACT_APP_ENV === "prod"
    ? "https://badgervolunteering.herokuapp.com"
    : "http://localhost:5000";

// Get initial user data
const getBegin = async () => {
  const response = await axios.get(`${baseURL}/api/begin`);

  return response.data;
};
// Get Initial Choices; will do this work in backend
const getNode = async (_id) => {
  const response = await axios.get(`${baseURL}/nodes?_id=${_id}`);
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
    `${baseURL}/api/node?node_id=${data.node_id}`,
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
    `${baseURL}/api/review`,
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
