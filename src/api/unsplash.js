import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AT345vZBSH_0v1J5I0d-Yjs4aLcSovj23QvDFgbpy3s",
  },
});
