const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "2022-05-01", name: "1 Month" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "2022-05-01", name: "1 Month" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2019-05-03",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "2021-05-01", name: "1 Year" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    publishDate: "2022-07-03",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "2021-12-01", name: "6 Month" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2021-11-021",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "2021-12-01", name: "6 Month" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2021-09-10",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "2021-12-01", name: "6 Month" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2022-02-04",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "2021-05-01", name: "1 Year" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    publishDate: "2022-05-30",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "2021-05-01", name: "1 Year" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    publishDate: "2022-04-02",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "2022-05-01", name: "1 Month" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2021-11-21",
  }
];

export function getMovies() {
  return movies;
}