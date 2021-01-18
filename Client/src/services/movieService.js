import http from "./httpService";
import { apiURL } from "./../config.json";

const CONNECTION_URL = apiURL + "/movies";

export async function getMovies() {
  const { data } = await http.get(CONNECTION_URL);

  return data;
}

export async function getMovie(_id) {
  return await http.get(`${CONNECTION_URL}/${_id}`);
}

export async function deleteMovie(movie_id) {
  await http.delete(CONNECTION_URL + "/" + movie_id);
}

export async function saveMovie(movie) {
  if (movie._id) {
    let body = { ...movie };
    delete body._id;
    return await http.put(CONNECTION_URL + "/" + movie._id, body);
  }

  delete movie._id;
  return await http.post(CONNECTION_URL, movie);
}
