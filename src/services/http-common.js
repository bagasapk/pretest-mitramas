import axios from "axios";

axios.defaults.headers.common["Authorization"] = sessionStorage.getItem("token");

export default axios.create({
  baseURL: "https://mitramas-test.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
