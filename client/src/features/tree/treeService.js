import axios from "axios";
const API_URL = "/api/choice/";

// Get all nodes from backend
const getNodes = async () => {
  const response = await axios.get('http://localhost:3000/nodes');
  console.log(response.data)
  return response.data;
};

// Get all options from backend
const getOptions = async () => {
    const response = await axios.get('http://localhost:3000/options');
    return response.data;
  };
  


const treeService = {
  getNodes,
  getOptions,

};
export default treeService;

