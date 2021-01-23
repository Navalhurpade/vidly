import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectError) {
    toast.error("an unexpected error ocured !");
    logger.log(error);
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export function setJWT(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

// eslint-disable-next-line
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT,
};
