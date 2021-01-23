import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "./../config.json";

const apiEndpoint = config.apiURL + "/auth";

http.setJWT(getJWT());

export async function login(user) {
  const { data: webToken } = await http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
  });
  localStorage.setItem("token", webToken);
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function getCurrentUser() {
  const user = localStorage.getItem("token");
  if (user) return jwtDecode(user);
  else return null;
}

export function getJWT() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
}
