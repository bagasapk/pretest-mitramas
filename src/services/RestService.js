import http from "./http-common";

const post = (data) => {
  return http.post(`/customers`, data);
};

const get = () => {
  return http.get(`/customers`);
};

const RestService = {
  post,
  get,
};

export default RestService;
