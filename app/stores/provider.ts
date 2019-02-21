import axios from "axios";

async function getStatus() {
  let response = await axios.post('/api/test', {data: 1})
  return response.data;
}

export {
  getStatus
}