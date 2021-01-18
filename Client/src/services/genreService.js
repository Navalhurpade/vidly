import http from "./httpService";
import { apiURL } from "./../config.json";

const CONNECTION_URL = apiURL + "/genres";

export async function getGenres() {
  const { data } = await http.get(CONNECTION_URL);
  return data;
}

export async function getGenre(lable) {
  const genres = await getGenres();
  let selectedGenre = [];

  switch (lable) {
    case "Action":
      selectedGenre = genres.filter((g) => g.name === "Action");
      break;

    case "Comedy":
      selectedGenre = genres.filter((g) => g.name === "Comedy");
      break;

    case "Thriller":
      selectedGenre = genres.filter((g) => g.name === "Thriller");
      break;

    case "Romance":
      selectedGenre = genres.filter((g) => g.name === "Romance");
      break;

    default:
      console.log(`Cant find genre named ${lable} !`);

      break;
  }
  return selectedGenre[0];
}
