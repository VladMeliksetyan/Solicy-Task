import axios from "axios";

const fetchData = async (method, endpoint, data) => {
  try {
    return await axios({
      method,
      url: "http://localhost:2000/" + endpoint,
      data: { ...data },
      headers: {
        type: "aplication/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};


export default fetchData;