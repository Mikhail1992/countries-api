import axios from "axios";

const httpClient = (baseURL) => {
  return {
    get: async (path, params) => {
      const res = await axios.get(`${baseURL}${path}`, { params });
      return res.data;
    },
  };
};

export default httpClient;
