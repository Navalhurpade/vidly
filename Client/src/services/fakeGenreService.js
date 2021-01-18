export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

export function getGenre(lable) {
  let selectedGenre = "";
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

    default:
      console.log(`Cant find genre named ${lable} !`);

      break;
  }

  return selectedGenre[0];
}
