import http from "./httpService";
import config from "./../config.json";

const apiEndpoint = config.apiURL + "/users";

export function registerUser(user) {
  const newUser = {
    email: user.username,
    password: user.password,
    name: user.name,
  };

  return http.post(apiEndpoint, newUser);
}
