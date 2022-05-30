export const genres = [
    { _id: "2022-05-01", name: "1 Month" },
    { _id: "2021-12-01", name: "6 Month" },
    { _id: "2021-05-01", name: "1 Year" }
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }
  